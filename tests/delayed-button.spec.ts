import { test, expect } from '@playwright/test';

test('Delayed Button Flow', async ({ page }) => {
  await page.goto('/public/artifacts/1e02a9a5-4f20-4f19-a7ba-6c3f16c6eab9');
  await page.getByText('Timing Challenges').click();
  await page.getByText('Start Process').click();

  const confirmBtn = page.getByRole('button', { name: 'Confirm Action' });
  await expect(confirmBtn).toBeEnabled();

  await confirmBtn.click();
  await expect(page.getByText('Success')).toBeVisible();
});
