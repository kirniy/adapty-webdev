#!/usr/bin/env python3
"""Mobile responsiveness testing script for Adapty marketing site."""

import os
import sys
from playwright.sync_api import sync_playwright

VIEWPORTS = [
    {'name': '375px', 'width': 375, 'height': 812},  # iPhone SE
    {'name': '390px', 'width': 390, 'height': 844},  # iPhone 14
    {'name': '768px', 'width': 768, 'height': 1024}, # Tablet
]

def test_page(page_path: str, output_dir: str = '/tmp/mobile-tests'):
    """Test a page at all mobile viewports."""
    os.makedirs(output_dir, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        for vp in VIEWPORTS:
            context = browser.new_context(
                viewport={'width': vp['width'], 'height': vp['height']},
                device_scale_factor=2,
                is_mobile=vp['width'] < 768,
                has_touch=vp['width'] < 768
            )
            page = context.new_page()

            # Navigate to page
            url = f'http://localhost:3011{page_path}'
            print(f"Testing {url} at {vp['name']}...")
            page.goto(url, wait_until='networkidle')
            page.wait_for_timeout(1000)  # Wait for animations

            # Check for horizontal overflow
            overflow = page.evaluate('''() => {
                const body = document.body;
                const html = document.documentElement;
                return {
                    hasHorizontalOverflow: body.scrollWidth > window.innerWidth,
                    bodyWidth: body.scrollWidth,
                    windowWidth: window.innerWidth,
                    htmlWidth: html.scrollWidth
                };
            }''')

            if overflow['hasHorizontalOverflow']:
                print(f"  WARNING: Horizontal overflow detected at {vp['name']}")
                print(f"    Body width: {overflow['bodyWidth']}px, Window: {overflow['windowWidth']}px")

            # Take screenshot
            safe_path = page_path.replace('/', '_') or '_home'
            screenshot_path = f"{output_dir}/{safe_path}_{vp['name']}.png"
            page.screenshot(path=screenshot_path, full_page=True)
            print(f"  Screenshot saved: {screenshot_path}")

            context.close()

        browser.close()

if __name__ == '__main__':
    page = sys.argv[1] if len(sys.argv) > 1 else '/'
    test_page(page)
