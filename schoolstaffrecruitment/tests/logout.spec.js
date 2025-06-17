import {test, expect} from '@playwright/test';

test.describe('Logout Page', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://localhost:3000/dashboard');
    })
})