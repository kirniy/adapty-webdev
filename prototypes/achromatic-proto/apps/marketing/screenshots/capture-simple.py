#!/usr/bin/env python3
from playwright.sync_api import sync_playwright
import os

DIR = os.path.dirname(os.path.abspath(__file__)) + '/homepage-sections'
os.makedirs(DIR, exist_ok=True)

# Clear old
for f in os.listdir(DIR):
    if f.endswith('.png'):
        os.remove(os.path.join(DIR, f))

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_context(
        viewport={'width': 1440, 'height': 900},
        device_scale_factor=2
    ).new_page()

    print('Loading...')
    page.goto('http://localhost:3011', wait_until='networkidle', timeout=60000)
    page.wait_for_timeout(4000)

    # Dismiss cookie
    try:
        page.click('button:has-text("Accept")', timeout=3000)
        page.wait_for_timeout(500)
    except:
        pass

    # Remove all fixed elements (cookie, debug btn, etc)
    page.evaluate('''() => {
        document.querySelectorAll('*').forEach(el => {
            if (window.getComputedStyle(el).position === 'fixed') el.remove();
        });
    }''')

    # Get all sections
    sections = page.locator('section').all()
    print(f'Found {len(sections)} sections')

    # Capture header
    print('01-header...', end=' ')
    page.evaluate('window.scrollTo(0,0)')
    page.wait_for_timeout(300)
    page.locator('header').screenshot(path=f'{DIR}/01-header.png')
    print('OK')

    # Capture each section
    for i, section in enumerate(sections):
        name = f'{i+2:02d}-section-{i+1}'
        print(f'{name}...', end=' ', flush=True)

        # Hide header
        page.evaluate('document.querySelector("header").style.display="none"')

        section.scroll_into_view_if_needed()
        page.wait_for_timeout(1000)

        # Check if section has content (not just empty bg)
        box = section.bounding_box()
        if box and box['height'] > 50:
            section.screenshot(path=f'{DIR}/{name}.png')
            size = os.path.getsize(f'{DIR}/{name}.png') / 1024
            print(f'OK ({size:.0f}KB, {int(box["height"])}px)')
        else:
            print('SKIP (too small)')

        page.evaluate('document.querySelector("header").style.display=""')

    # Capture footer
    print('99-footer...', end=' ')
    page.evaluate('document.querySelector("header").style.display="none"')
    page.locator('footer').scroll_into_view_if_needed()
    page.wait_for_timeout(500)
    page.locator('footer').screenshot(path=f'{DIR}/99-footer.png')
    print('OK')

    browser.close()

print('\nDone!')
for f in sorted(os.listdir(DIR)):
    if f.endswith('.png'):
        print(f'  {f}')
