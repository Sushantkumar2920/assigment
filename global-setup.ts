import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(
    'https://claude.ai/public/artifacts/1e02a9a5-4f20-4f19-a7ba-6c3f16c6eab9'
  );

  await context.storageState({ path: 'auth.json' });
  await browser.close();
}

export default globalSetup;
