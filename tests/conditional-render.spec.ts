import { test, expect } from '@playwright/test';

test('Conditional Login Flow', async ({ page }) => {
  await page.goto('/public/artifacts/1e02a9a5-4f20-4f19-a7ba-6c3f16c6eab9');
  await page.getByText('Flaky Selectors').click();

  await page.getByText('Admin User').click();
  await expect(page.getByText('Admin Panel')).toBeVisible();
  await expect(page.getByText('Standard Panel')).toBeHidden();

  await page.getByText('Logout').click();

  await page.getByText('Standard User').click();
  await expect(page.getByText('Standard Panel')).toBeVisible();
  await expect(page.getByText('Admin Panel')).toBeHidden();
});
