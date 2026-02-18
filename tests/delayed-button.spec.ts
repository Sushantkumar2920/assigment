import { test, expect } from '@playwright/test';

test('Delayed Button Flow', async ({ page }) => {
await page.goto('https://claude.ai/public/artifacts/1e02a9a5-4f20-4f19-a7ba-6c3f16c6eab9');
  await page.getByTestId('consent-accept').click();
  await page.locator('iframe[title="Claude content"]').contentFrame().getByRole('button', { name: '⏱️ Timing Challenges' }).click();
  await page.locator('iframe[title="Claude content"]').contentFrame().getByTestId('start-process').click();
  await page.locator('iframe[title="Claude content"]').contentFrame().getByTestId('confirm-button').click();
  await page.locator('iframe[title="Claude content"]').contentFrame().getByTestId('success-message').isVisible();
});