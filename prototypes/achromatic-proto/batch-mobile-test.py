#!/usr/bin/env python3
"""Batch mobile responsiveness testing for all pages."""

import os
from playwright.sync_api import sync_playwright

PAGES = [
    # Feature pages
    '/paywall-ab-testing',
    '/ltv-analytics',
    '/onboarding-builder',
    '/autopilot',
    '/ai-paywall-generator',
    '/fallback-paywalls',
    '/paywall-localization',
    '/paywall-targeting',
    '/remote-config',
    '/revenue-growth',
    '/sdk',
    '/state-of-subscriptions',
    # Role pages
    '/for-marketers',
    '/for-developers',
    '/for-app-owners',
    '/for-indie',
    # Compare pages
    '/compare/adapty-vs-revenuecat',
    '/compare/adapty-vs-qonversion',
    '/compare/adapty-vs-purchasely',
    '/compare/adapty-vs-superwall',
    '/compare/adapty-vs-in-house',
    # Other pages
    '/why-adapty',
    '/integrations',
]

def test_all_pages():
    output_dir = '/tmp/mobile-tests'
    os.makedirs(output_dir, exist_ok=True)

    issues = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        for page_path in PAGES:
            context = browser.new_context(
                viewport={'width': 375, 'height': 812},
                device_scale_factor=2,
                is_mobile=True,
                has_touch=True
            )
            page = context.new_page()

            url = f'http://localhost:3011{page_path}'
            print(f"Testing {page_path}...", end=' ')

            try:
                page.goto(url, wait_until='networkidle', timeout=30000)
                page.wait_for_timeout(1000)

                # Check for horizontal overflow
                overflow = page.evaluate('''() => {
                    const body = document.body;
                    return {
                        hasHorizontalOverflow: body.scrollWidth > window.innerWidth,
                        bodyWidth: body.scrollWidth,
                        windowWidth: window.innerWidth
                    };
                }''')

                if overflow['hasHorizontalOverflow']:
                    print(f"OVERFLOW ({overflow['bodyWidth']}px > {overflow['windowWidth']}px)")

                    # Find overflowing elements
                    overflowing = page.evaluate('''() => {
                        const elements = [];
                        document.querySelectorAll('*').forEach(el => {
                            const rect = el.getBoundingClientRect();
                            if (rect.right > window.innerWidth + 5) {
                                elements.push({
                                    tag: el.tagName,
                                    className: el.className?.toString?.()?.substring?.(0, 80) || '',
                                    right: rect.right
                                });
                            }
                        });
                        return elements.slice(0, 5);
                    }''')

                    issues.append({
                        'page': page_path,
                        'overflow': overflow,
                        'elements': overflowing
                    })

                    # Take screenshot of problematic page
                    safe_path = page_path.replace('/', '_')
                    page.screenshot(path=f"{output_dir}/{safe_path}_ISSUE.png", full_page=True)
                else:
                    print("OK")

            except Exception as e:
                print(f"ERROR: {e}")
                issues.append({'page': page_path, 'error': str(e)})

            context.close()

        browser.close()

    # Summary
    print("\n" + "="*50)
    print("SUMMARY")
    print("="*50)

    if issues:
        print(f"\nFound {len(issues)} page(s) with issues:\n")
        for issue in issues:
            print(f"  {issue['page']}:")
            if 'error' in issue:
                print(f"    Error: {issue['error']}")
            else:
                print(f"    Overflow: {issue['overflow']['bodyWidth']}px")
                for el in issue.get('elements', []):
                    print(f"      - {el['tag']}: {el['className'][:50]}...")
    else:
        print("\nAll pages passed mobile responsiveness check!")

if __name__ == '__main__':
    test_all_pages()
