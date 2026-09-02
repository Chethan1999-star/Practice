import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer.firstName"]').fill('Chethan');
  await page.locator('[id="customer.lastName"]').fill('Gowda');
  await page.locator('[id="customer.address.street"]').fill('Bengaluru');
  await page.locator('[id="customer.address.city"]').fill('Nelamangala');
  await page.locator('[id="customer.address.state"]').fill('Karnataka');
  await page.locator('[id="customer.address.zipCode"]').fill('562123');
  await page.locator('[id="customer.phoneNumber"]').fill('9663824163');
  await page.locator('[id="customer.ssn"]').fill('000');
  await page.locator('[id="customer.username"]').fill(faker.person.fullName());
  await page.locator('[id="customer.password"]').fill('Password@123');
  await page.locator('#repeatedPassword').fill('Password@123');
  await page.getByRole('button', { name: 'Register' }).click();
  //await expect(page.getByRole('heading', { name: 'Welcome Username' })).toBeVisible();
  await page.close();
});