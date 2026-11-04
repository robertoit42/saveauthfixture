import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  await page.goto(''); // Tu BASE_URL apunta a /login
  await page.getByRole('textbox', { name: 'Email' })
    .fill(process.env.TEST_EMAIL!);
  await page.getByRole('textbox', { name: 'Password' })
    .fill(process.env.TEST_PASSWORD!);
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('https://conduit.bondaracademy.com/');
 
  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});