import {test, expect} from '@playwright/test';

test.describe('Login Page', () => {
 test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/')
 })

 // Test for successful login
 test('should successfully login', async ({ page }) => {
   await page.fill('#username', 'JohnDoe');
   await page.fill('#password', 'Password123');
   await page.click('button[type="submit"]');
   await expect(page).toHaveURL('http:/localhost:3000/dashboard');
   await expect(page.locator('li a:has-text("Dashboard")')).toBeVisible({ timeout: 15000});
 })

 test('')

})  
    