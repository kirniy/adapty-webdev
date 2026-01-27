#!/usr/bin/env python3
"""Capture unified hero section of Linear.app"""

from playwright.sync_api import sync_playwright
import time

OUTPUT_DIR = "/Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto/apps/marketing/screenshots/linear"

def capture_hero():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1440, "height": 900},
            device_scale_factor=2
        )
        page = context.new_page()

        print("Navigating to Linear.app...")
        page.goto("https://linear.app/", timeout=60000)
        page.wait_for_load_state("domcontentloaded")
        time.sleep(2)  # Let animations settle

        # Get bounds of combined hero (text + visual)
        bounds = page.evaluate("""
            () => {
                const heroText = document.querySelector('main > div:nth-child(2)');
                const heroVisual = document.querySelector('main > section:nth-child(5)');

                if (heroText && heroVisual) {
                    const textRect = heroText.getBoundingClientRect();
                    const visualRect = heroVisual.getBoundingClientRect();

                    return {
                        x: 0,
                        y: textRect.top,
                        width: 1440,
                        height: visualRect.bottom - textRect.top
                    };
                }
                return null;
            }
        """)

        if bounds:
            print(f"Hero bounds: {bounds['width']}x{bounds['height']}px")
            page.screenshot(
                path=f"{OUTPUT_DIR}/02-hero.png",
                clip=bounds
            )
            print("Saved: 02-hero.png")
        else:
            print("ERROR: Could not find hero sections")

        browser.close()

if __name__ == "__main__":
    capture_hero()
