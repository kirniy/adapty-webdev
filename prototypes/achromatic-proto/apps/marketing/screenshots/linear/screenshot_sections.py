#!/usr/bin/env python3
"""
Screenshot each section of Linear.app homepage cleanly.
Uses Playwright to capture each section at its exact boundaries.
"""

from playwright.sync_api import sync_playwright
import time

# Output directory
OUTPUT_DIR = "/Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto/apps/marketing/screenshots/linear"

# Section definitions based on page analysis
SECTIONS = [
    {
        "name": "01-header-nav",
        "selector": "nav",
        "description": "Navigation header"
    },
    {
        "name": "02-hero",
        "selector": "main > div:nth-child(2)",
        "description": "Hero section with headline"
    },
    {
        "name": "03-hero-visual",
        "selector": "main > section:nth-child(5)",
        "description": "Hero visual/demo section"
    },
    {
        "name": "04-customers-logos",
        "selector": "main > section:nth-child(6)",
        "description": "Customer logos section"
    },
    {
        "name": "05-what-makes-different",
        "selector": "main > section:nth-child(7)",
        "description": "Made for modern product teams"
    },
    {
        "name": "06-ai-section",
        "selector": "main > section:nth-child(8)",
        "description": "AI-assisted product development"
    },
    {
        "name": "07-planning",
        "selector": "main > section:nth-child(9)",
        "description": "Project and long-term planning"
    },
    {
        "name": "08-issue-tracking",
        "selector": "main > section:nth-child(10)",
        "description": "Task tracking and sprint planning"
    },
    {
        "name": "09-workflows",
        "selector": "main > section:nth-child(11)",
        "description": "Workflows and integrations"
    },
    {
        "name": "10-under-the-hood",
        "selector": "main > section:nth-child(12)",
        "description": "Built on strong foundations"
    },
    {
        "name": "11-cta-prefooter",
        "selector": "main > section:nth-child(13)",
        "description": "CTA - Plan the present"
    },
    {
        "name": "12-footer",
        "selector": "footer",
        "description": "Footer with links"
    }
]


def screenshot_sections():
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1440, "height": 900},
            device_scale_factor=2  # Retina quality
        )
        page = context.new_page()

        print("Navigating to Linear.app...")
        page.goto("https://linear.app/", timeout=60000)
        page.wait_for_load_state("domcontentloaded")
        print("Page loaded, waiting for content to render...")

        # Wait for animations to settle
        time.sleep(2)

        # First, take a full page screenshot for reference
        print("Taking full page screenshot...")
        page.screenshot(
            path=f"{OUTPUT_DIR}/00-full-page.png",
            full_page=True
        )
        print(f"  Saved: 00-full-page.png")

        # Screenshot each section
        for section in SECTIONS:
            name = section["name"]
            selector = section["selector"]
            description = section["description"]

            print(f"\nScreenshotting: {name}")
            print(f"  Description: {description}")
            print(f"  Selector: {selector}")

            try:
                # Find the element
                element = page.locator(selector).first

                # Check if element exists and is visible
                if element.count() == 0:
                    print(f"  WARNING: Element not found, skipping")
                    continue

                # Scroll element into view
                element.scroll_into_view_if_needed()
                time.sleep(0.5)  # Let any scroll animations complete

                # Get bounding box
                box = element.bounding_box()
                if box:
                    print(f"  Size: {int(box['width'])}x{int(box['height'])}px")

                # Take screenshot of just this element
                element.screenshot(path=f"{OUTPUT_DIR}/{name}.png")
                print(f"  Saved: {name}.png")

            except Exception as e:
                print(f"  ERROR: {str(e)}")

        # Close browser
        browser.close()
        print("\nDone! All screenshots saved.")


if __name__ == "__main__":
    screenshot_sections()
