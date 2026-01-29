import { test, expect } from '@playwright/test';

test('Modal Confirmation Flow', async ({ page }) => {
  await page.goto('/public/artifacts/1e02a9a5-4f20-4f19-a7ba-6c3f16c6eab9');
  await page.getByText('Responsive').click();

  await page.getByText('Open Modal').click();
  await page.getByText('Show Details').click();
  await page.getByText('Confirm').click();

  await expect(page.getByText('confirmed')).toBeVisible();
});
