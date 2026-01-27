#!/usr/bin/env python3
"""
Screenshot each section of next-adapty.vercel.app homepage cleanly.
"""

from playwright.sync_api import sync_playwright
import time

OUTPUT_DIR = "/Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto/apps/marketing/screenshots/adapty"

SECTIONS = [
    {
        "name": "01-header-nav",
        "selector": "header",
        "description": "Navigation header"
    },
    {
        "name": "02-hero",
        "selector": "#revenue-os",
        "description": "Hero - Revenue OS for mobile apps"
    },
    {
        "name": "03-trusted-logos",
        "selector": ".trust-section",
        "description": "Trusted by logos"
    },
    {
        "name": "04-help-your-team",
        "selector": "#help-your-team-run",
        "description": "Help your team run the mobile subscription business"
    },
    {
        "name": "05-integrate-iap",
        "selector": "#integrate-in-app-purchases",
        "description": "Integrate in-app purchases with a few lines of code"
    },
    {
        "name": "06-sdk-platforms",
        "selector": "#get-the-sdk",
        "description": "Get the SDK for your platform"
    },
    {
        "name": "07-features",
        "selector": "#everything-you-need",
        "description": "Everything you need to grow subscription revenue"
    },
    {
        "name": "08-testimonials",
        "selector": "#developers-from-all-kinds-of-apps",
        "description": "Developers from all kinds of apps testimonials"
    },
    {
        "name": "09-enterprise",
        "selector": "#enterprise-grade",
        "description": "Enterprise-grade platform"
    },
    {
        "name": "10-g2-ratings",
        "selector": "#trusted-for-usability",
        "description": "Trusted for usability - G2 ratings"
    },
    {
        "name": "11-case-studies",
        "selector": "#read-the-real-cases",
        "description": "Read the real cases of our customers"
    },
    {
        "name": "12-footer",
        "selector": "footer",
        "description": "Footer"
    }
]


def screenshot_sections():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1440, "height": 900},
            device_scale_factor=2
        )
        page = context.new_page()

        print("Navigating to next-adapty.vercel.app...")
        page.goto("https://next-adapty.vercel.app/", timeout=60000)
        page.wait_for_load_state("domcontentloaded")
        time.sleep(2)

        # Full page screenshot
        print("Taking full page screenshot...")
        page.screenshot(path=f"{OUTPUT_DIR}/00-full-page.png", full_page=True)
        print("  Saved: 00-full-page.png")

        # Screenshot each section
        for section in SECTIONS:
            name = section["name"]
            selector = section["selector"]
            description = section["description"]

            print(f"\nScreenshotting: {name}")
            print(f"  Description: {description}")

            try:
                element = page.locator(selector).first

                if element.count() == 0:
                    print(f"  WARNING: Element not found, skipping")
                    continue

                element.scroll_into_view_if_needed()
                time.sleep(0.5)

                box = element.bounding_box()
                if box:
                    print(f"  Size: {int(box['width'])}x{int(box['height'])}px")

                element.screenshot(path=f"{OUTPUT_DIR}/{name}.png")
                print(f"  Saved: {name}.png")

            except Exception as e:
                print(f"  ERROR: {str(e)}")

        browser.close()
        print("\nDone! All screenshots saved.")


if __name__ == "__main__":
    screenshot_sections()
