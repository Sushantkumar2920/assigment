import { test, expect } from '@playwright/test';

test('Load and Verify List Items', async ({ page }) => {
  await page.goto('/public/artifacts/1e02a9a5-4f20-4f19-a7ba-6c3f16c6eab9');
  await page.getByText('Timing Challenges').click();

  for (let i = 0; i < 3; i++) {
    await page.getByText('Load More Items').click();
    await page.waitForSelector('.list-item');
  }

  const items = page.locator('.list-item');
  await expect(items).toHaveCount(15);

  const activeCount = await page.locator('.status-active').count();
  const pendingCount = await page.locator('.status-pending').count();

  expect(activeCount).toBeGreaterThan(0);
  expect(pendingCount).toBeGreaterThan(0);
});
