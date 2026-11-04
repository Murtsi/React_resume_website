import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1400, height: 900 });

// Visit the blog post
await page.goto('http://localhost:3000/blog/security-recon-console');
await page.waitForTimeout(1500);

// Capture the header
await page.screenshot({ path: 'C:\\Users\\antti\\AppData\\Local\\Temp\\opencode\\blog-header.png', fullPage: false });

// Scroll and capture the findings section
await page.evaluate(() => window.scrollTo(0, 800));
await page.waitForTimeout(500);
await page.screenshot({ path: 'C:\\Users\\antti\\AppData\\Local\\Temp\\opencode\\blog-findings.png', fullPage: false });

// Scroll and capture the skills section
await page.evaluate(() => window.scrollTo(0, 2400));
await page.waitForTimeout(500);
await page.screenshot({ path: 'C:\\Users\\antti\\AppData\\Local\\Temp\\opencode\\blog-skills.png', fullPage: false });

// Scroll and capture the chat section
await page.evaluate(() => window.scrollTo(0, 3200));
await page.waitForTimeout(500);
await page.screenshot({ path: 'C:\\Users\\antti\\AppData\\Local\\Temp\\opencode\\blog-chat.png', fullPage: false });

// Also visit the blog list
await page.goto('http://localhost:3000/blog');
await page.waitForTimeout(1000);
await page.screenshot({ path: 'C:\\Users\\antti\\AppData\\Local\\Temp\\opencode\\blog-list.png', fullPage: false });

await browser.close();
console.log('Screenshots captured!');
