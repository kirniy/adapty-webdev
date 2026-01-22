const puppeteer = require('puppeteer');

const pages = [
  { name: 'homepage', url: 'https://adapty-achromatic-proto.vercel.app/' },
  { name: 'paywall-builder', url: 'https://adapty-achromatic-proto.vercel.app/paywall-builder' },
  { name: 'paywall-ab-testing', url: 'https://adapty-achromatic-proto.vercel.app/paywall-ab-testing' },
  { name: 'for-marketers', url: 'https://adapty-achromatic-proto.vercel.app/for-marketers' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  for (const p of pages) {
    console.log(`Capturing ${p.name}...`);
    await page.goto(p.url, { waitUntil: 'networkidle2', timeout: 30000 });
    await page.screenshot({ path: `public/screenshots/${p.name}.png` });
  }
  
  await browser.close();
  console.log('Done!');
})();
