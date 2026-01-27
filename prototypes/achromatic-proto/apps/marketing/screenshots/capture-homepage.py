#!/usr/bin/env python3
"""
Capture clean screenshots of all homepage sections and their variants.
"""

from playwright.sync_api import sync_playwright
import os
import json

BASE_URL = 'http://localhost:3011'
SCREENSHOTS_DIR = os.path.dirname(os.path.abspath(__file__)) + '/homepage-sections'
STORAGE_KEY = 'achromatic-debug-global'

# Default state
DEFAULT_STATE = {
    "colorAccentVariant": "full",
    "gridVariant": "default",
    "cornerRadiusVariant": "default",
    "gridThicknessVariant": "default",
    "dashedThicknessVariant": "default",
    "gridColorVariant": "default",
    "gridOpacityVariant": "subtle",
    "gridZIndexVariant": "back",
    "headerVariant": "default",
    "heroVariant": "marketing",
    "logosVariant": "default",
    "featuresVariant": "bento-tabs",
    "statsVariant": "default",
    "testimonialsVariant": "default",
    "faqVariant": "default",
    "ctaVariant": "default",
    "blogVariant": "default",
    "sdkVariant": "default",
    "rolesVariant": "cards",
    "footerVariant": "default",
    "monochromeMode": False,
    "isDebugMenuOpen": False,
}

SECTIONS = [
    ('header', 'headerVariant', ['default', 'simple'], 'header'),
    ('hero', 'heroVariant', ['marketing'], 0),
    ('logos', 'logosVariant', ['default', 'linear', 'marquee'], 1),
    ('features', 'featuresVariant', ['bento-tabs', 'solution', 'tabbed'], 2),
    ('roles', 'rolesVariant', ['cards', 'bento', 'stacked'], 3),
    ('sdk', 'sdkVariant', ['default'], 4),
    ('stats', 'statsVariant', ['default', 'orbital', 'timeline'], 5),
    ('testimonials', 'testimonialsVariant', ['default', 'editorial', 'clean'], 6),
    ('blog', 'blogVariant', ['default', 'featured'], 7),
    ('faq', 'faqVariant', ['default', 'cards', 'pricing'], 8),
    ('cta', 'ctaVariant', ['default', 'beam', 'careers'], 9),
    ('footer', 'footerVariant', ['default', 'flickering'], 'footer'),
]


def cleanup_ui(page):
    """Remove floating UI elements."""
    page.evaluate('''() => {
        // Remove cookie banners
        document.querySelectorAll('[class*="ookie"], [class*="onsent"]').forEach(el => el.remove());

        // Remove ALL fixed position elements
        document.querySelectorAll('*').forEach(el => {
            const style = window.getComputedStyle(el);
            if (style.position === 'fixed' && el.tagName !== 'HEADER') {
                el.remove();
            }
        });
    }''')


def main():
    os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

    # Clear old screenshots
    for f in os.listdir(SCREENSHOTS_DIR):
        if f.endswith('.png'):
            os.remove(os.path.join(SCREENSHOTS_DIR, f))

    print(f'Output: {SCREENSHOTS_DIR}\n')

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1440, 'height': 900},
            device_scale_factor=2,
        )
        page = context.new_page()

        # First load to establish localStorage domain
        print('Initial page load...')
        page.goto(BASE_URL, wait_until='networkidle', timeout=60000)
        page.wait_for_timeout(3000)

        # Click Accept on cookie banner once
        try:
            accept = page.locator('button:has-text("Accept")').first
            if accept.is_visible(timeout=2000):
                accept.click()
                print('Cookie banner dismissed')
                page.wait_for_timeout(500)
        except:
            pass

        screenshot_count = 0
        section_num = 0

        for section_name, state_key, variants, selector in SECTIONS:
            section_num += 1
            prefix = f'{section_num:02d}'
            print(f'\n[{prefix}] {section_name.upper()}')

            for variant in variants:
                filename = f'{prefix}-{section_name}-{variant}.png'
                filepath = os.path.join(SCREENSHOTS_DIR, filename)

                # Update state with this variant
                state = DEFAULT_STATE.copy()
                state[state_key] = variant
                state_json = json.dumps(state)

                # Set localStorage and reload
                page.evaluate(f'''() => {{
                    localStorage.setItem('{STORAGE_KEY}', '{state_json}');
                }}''')

                page.reload(wait_until='networkidle', timeout=60000)
                page.wait_for_timeout(2500)

                # Cleanup UI
                cleanup_ui(page)

                print(f'  {variant}...', end=' ', flush=True)

                try:
                    if selector == 'header':
                        page.evaluate('window.scrollTo(0, 0)')
                        page.wait_for_timeout(300)
                        el = page.locator('header').first
                        el.screenshot(path=filepath)

                    elif selector == 'footer':
                        page.evaluate('document.querySelector("header").style.display = "none"')
                        el = page.locator('footer').first
                        el.scroll_into_view_if_needed()
                        page.wait_for_timeout(600)
                        cleanup_ui(page)
                        el.screenshot(path=filepath)

                    elif isinstance(selector, int):
                        page.evaluate('document.querySelector("header").style.display = "none"')
                        sections = page.locator('section').all()

                        if selector < len(sections):
                            el = sections[selector]
                            el.scroll_into_view_if_needed()
                            page.wait_for_timeout(800)
                            cleanup_ui(page)
                            el.screenshot(path=filepath)
                        else:
                            print(f'NOT FOUND (only {len(sections)} sections)')
                            continue

                    screenshot_count += 1
                    size_kb = os.path.getsize(filepath) / 1024
                    print(f'OK ({size_kb:.0f}KB)')

                except Exception as e:
                    print(f'FAILED: {e}')

        browser.close()

    print(f'\n{"="*50}')
    print(f'Done! {screenshot_count} screenshots captured')
    print(f'\nFiles:')
    for f in sorted(os.listdir(SCREENSHOTS_DIR)):
        if f.endswith('.png'):
            size = os.path.getsize(os.path.join(SCREENSHOTS_DIR, f)) / 1024
            print(f'  {f} ({size:.0f}KB)')


if __name__ == '__main__':
    main()
