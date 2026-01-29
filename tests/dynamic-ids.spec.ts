import { test, expect } from '@playwright/test';

test('Dynamic ID Handling', async ({ page }) => {
  await page.goto('/public/artifacts/1e02a9a5-4f20-4f19-a7ba-6c3f16c6eab9');
  await page.getByText('Flaky Selectors').click();

  await page.getByText('Regenerate All IDs').click();
  await page.getByRole('option', { name: 'Beta' }).click();

  await expect(page.getByText('Selected: Beta')).toBeVisible();
});
