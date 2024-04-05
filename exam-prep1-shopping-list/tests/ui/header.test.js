const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('http://localhost:8080'); 
    const homeLink = await page.waitForSelector('a[href="/"]', { timeout: 5000, visible: true });
    const text = await homeLink.textContent();
    expect(text).toBe('Home');
  });
  