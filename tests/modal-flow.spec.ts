import { test, expect } from '@playwright/test';

test('Modal Confirmation Flow', async ({ page }) => {
  await page.goto('https://claude.ai/public/artifacts/1e02a9a5-4f20-4f19-a7ba-6c3f16c6eab9');
  await page.getByTestId('consent-accept').click();
  await page.locator('iframe[title="Claude content"]').contentFrame().getByRole('button', { name: '📱 Responsive' }).click();
  await page.locator('iframe[title="Claude content"]').contentFrame().getByTestId('open-modal').click();
  await page.locator('iframe[title="Claude content"]').contentFrame().getByTestId('show-nested').click();
  await page.locator('iframe[title="Claude content"]').contentFrame().getByTestId('final-confirm').click();
  await page.locator('iframe[title="Claude content"]').contentFrame().getByTestId('confirmed').isVisible();
});