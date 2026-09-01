import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Add employee', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Chethan');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('N');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Kumar');
  let empid= faker.string.alphanumeric(3);
  await page.getByRole('textbox').nth(4).fill(empid);
  await page.getByRole('button', { name: 'Save' }).click();
  //await expect(page.locator('div').filter({ hasText: /^Chethan Kumar$/ }).nth(1)).toBeVisible();
});