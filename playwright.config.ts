import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalSetup: './global-setup',
  testDir: './tests',
  timeout: 150000,
  use: {
    storageState: 'auth.json',
    headless: false,
    baseURL: 'https://claude.ai',
    actionTimeout: 100000
  }
});
