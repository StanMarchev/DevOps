const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('http://localhost:8080'); 
    const homeLink = await page.waitForSelector('p[href="/"]', { timeout: 5000, visible: true });
    const text = await homeLink.textContent();
    expect(text).toBe('This is the Regular exam for Software Engineering and DevOps course @ SoftUni');
  });
  