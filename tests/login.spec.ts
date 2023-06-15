import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import cred from '../fixture/login.json'


test('Login to the application', async ({page}) => {
    test.setTimeout(120000);
    const loginPage = new LoginPage(page);
    await loginPage.visit()
    await loginPage.loginWithCredentails( cred.USERNAME, cred.PASSWORD)
})