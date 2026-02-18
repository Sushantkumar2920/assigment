import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalSetup: './global-setup',
  testDir: './tests',
  timeout: 10000,
  use: {
    storageState: 'auth.json',
    headless: false,
    baseURL: 'https://claude.ai',
    actionTimeout: 100000
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    }
  ]
});
