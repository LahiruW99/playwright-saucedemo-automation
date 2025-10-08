import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe("Login Functionality", ()=>{
    test("Login with valid credentials", async ({page})=>{
        const loginpage = new LoginPage(page);

        await loginpage.navigateToLoginPage();
        await expect(page).toHaveTitle("Swag Labs");
        await loginpage.validLogin("standard_user", "secret_sauce")
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    });
});