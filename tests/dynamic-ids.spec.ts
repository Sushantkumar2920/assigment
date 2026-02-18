import { test, expect } from '@playwright/test';

test('Dynamic ID Handling', async ({ page }) => {
  await page.goto('https://claude.ai/public/artifacts/1e02a9a5-4f20-4f19-a7ba-6c3f16c6eab9');
  // await page.getByTestId('consent-accept').click();
  await page.locator('iframe[title="Claude content"]').contentFrame().getByRole('button', { name: '🎯 Flaky Selectors' }).click();
  await page.locator('iframe[title="Claude content"]').contentFrame().getByTestId('regenerate-ids').click();
  await page.locator('iframe[title="Claude content"]').contentFrame().getByText('BetaValue: 200ID: item-').click();
  await page.locator('iframe[title="Claude content"]').contentFrame().getByText('BetaValue: 200ID: item-').isVisible();
});
