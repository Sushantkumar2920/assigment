import { test, expect } from '@playwright/test';

test('Load and Verify List Items', async ({ page }) => {

  await page.goto('https://claude.ai/public/artifacts/1e02a9a5-4f20-4f19-a7ba-6c3f16c6eab9');
  await page.getByTestId('consent-accept').click();

  const frame = page.locator('iframe[title="Claude content"]').contentFrame();

  for (let i = 0; i < 3; i++) {
    await frame.getByTestId('load-more').click();
  }

  // 🔥 Wait until all 15 items are present
  await expect(frame.locator('[data-testid^="list-item-"]')).toHaveCount(15);

const activeCount = await frame.locator('[data-testid^="list-item-"]').filter({ hasText: 'active' }).count();  
const pendingCount = await frame.getByText('pending').count();

  console.log(`Active items found: ${activeCount}`);
  console.log(`Pending items found: ${pendingCount}`);

  expect(activeCount).toBeGreaterThan(0);
  expect(pendingCount).toBeGreaterThan(0);
});
