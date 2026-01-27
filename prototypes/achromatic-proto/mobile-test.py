#!/usr/bin/env python3
"""Mobile responsiveness testing script for Adapty marketing site."""

import sys
import os
from playwright.sync_api import sync_playwright

VIEWPORTS = [
    {'name': '375px', 'width': 375, 'height': 812},
    {'name': '390px', 'width': 390, 'height': 844},
    {'name': '768px', 'width': 768, 'height': 1024},
]

def test_page(page_path: str):
    """Test a page at mobile viewports."""
    output_dir = '/tmp/mobile-tests'
    os.makedirs(output_dir, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        for vp in VIEWPORTS:
            context = browser.new_context(
                viewport={'width': vp['width'], 'height': vp['height']},
                device_scale_factor=2,
                is_mobile=True,
                has_touch=True
            )
            page = context.new_page()

            url = f'http://localhost:3011{page_path}'
            print(f"Testing {url} at {vp['name']}...")
            page.goto(url, wait_until='domcontentloaded', timeout=60000)
            page.wait_for_timeout(2000)

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
                print(f"  WARNING: Horizontal overflow at {vp['name']}")
                print(f"    Body: {overflow['bodyWidth']}px, Window: {overflow['windowWidth']}px")

                # Find elements causing overflow
                overflowing = page.evaluate('''() => {
                    const elements = [];
                    document.querySelectorAll('*').forEach(el => {
                        const rect = el.getBoundingClientRect();
                        if (rect.right > window.innerWidth + 10) {
                            elements.push({
                                tag: el.tagName,
                                class: el.className?.substring?.(0, 100) || '',
                                width: rect.width,
                                right: rect.right
                            });
                        }
                    });
                    return elements.slice(0, 10);
                }''')

                if overflowing:
                    print("  Overflowing elements:")
                    for el in overflowing:
                        print(f"    - {el['tag']}.{el['class'][:50]}... right:{el['right']:.0f}px")
            else:
                print(f"  OK: No horizontal overflow at {vp['name']}")

            # Screenshot
            safe_path = page_path.replace('/', '_') or '_home'
            screenshot_path = f"{output_dir}/{safe_path}_{vp['name']}.png"
            page.screenshot(path=screenshot_path, full_page=True)
            print(f"  Screenshot: {screenshot_path}")

            context.close()

        browser.close()

if __name__ == '__main__':
    page_path = sys.argv[1] if len(sys.argv) > 1 else '/'
    test_page(page_path)
