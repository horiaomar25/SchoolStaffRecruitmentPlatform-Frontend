import {test, expect} from '@playwright/test';

test.describe('Login Page', () => {
 test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/')
 })

 // Test for successful login and logout.
 test('should login and logout successfully', async ({ page }) => {

   await page.getByLabel('Username').fill('JohnDoe');
   await page.getByLabel('Password').fill('Password123');
   await page.getByTestId('login-button').click();
    
   await expect(page).toHaveURL('http://localhost:3000/dashboard');
   await expect(page.getByRole('link', {name: 'Dashboard'})).toBeVisible({timeout: 10000});

   await page.getByRole('button', {name:'Logout'}).click();
   await page.waitForSelector('[data-testid=logout-modal]', {state: 'visible'});
   await page.getByRole('button', {name:'Yes'}).click(); // getByRole used for buttons, links etc
   await expect(page).toHaveURL('http://localhost:3000/');

 })

 test('should display the correct error message when login is incorrect', async ({page}) => {

   await page.getByLabel('Username').fill('IncorrectUsername');
   await page.getByLabel('Password').fill('IncorrectPassword');
   await page.getByTestId('login-button').click();

   await expect(page.locator('[data-testid=unsuccessful-login-alert]')).toBeVisible();
 })

 test('should show required validation in input', async ({page}) => {
  await page.getByTestId('login-button').click();
  const userNameInput = page.getByLabel('Username');
  await expect(userNameInput).toHaveAttribute('required');

 })

 test('password should be masked', async ({page}) => {
  const passwordInput = page.getByLabel('Password');
  await expect(passwordInput).toHaveAttribute('type', 'password');
 })

 

  

})  
    