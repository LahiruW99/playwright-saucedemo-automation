import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe("Login Functionality", ()=>{
    test("Login with valid credentials", async ({page})=>{
        const loginpage = new LoginPage(page);

        await loginpage.navigateToLoginPage();
        await expect(page).toHaveTitle("Swag Labs");
        await loginpage.login("standard_user", "secret_sauce")
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    });

    test("Login with Invalid Password", async({page})=>{
        const loginpage = new LoginPage(page);

        await loginpage.navigateToLoginPage();
        await expect(page).toHaveTitle("Swag Labs");
        await loginpage.login("standard_user", "sauce")
        await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();  
    });

    test("Login with Invalid Username", async({page})=>{
        const loginpage = new LoginPage(page);

        await loginpage.navigateToLoginPage();
        await expect(page).toHaveTitle("Swag Labs");
        await loginpage.login("standard", "secret_sauce")
        await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();  
    });

    test("Click Login without username and password", async({page})=>{
        const loginpage = new LoginPage(page);

        await loginpage.navigateToLoginPage();
        await expect(page).toHaveTitle("Swag Labs");
        await loginpage.login("", "")
        await expect(page.getByText("Epic sadface: Username is required")).toBeVisible();  
    });
});