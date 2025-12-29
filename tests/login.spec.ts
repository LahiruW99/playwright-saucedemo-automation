import { test, expect } from '@playwright/test';
import { POManager } from '../pages/POManager';
import testData from "../utils/loginTestData.json";

test.describe("Login Functionality", ()=>{
    test("Login with valid credentials", async ({page})=>{
        const poManager = new POManager(page);
        const loginpage = poManager.getLoginPage();

        await loginpage.navigateToLoginPage();
        await expect(page).toHaveTitle("Swag Labs");
        await loginpage.login(testData.login.validUser.username, testData.login.validUser.password)
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    });

    test("Login with Invalid Password", async({page})=>{
        const poManager = new POManager(page);
        const loginpage = poManager.getLoginPage();

        await loginpage.navigateToLoginPage();
        await expect(page).toHaveTitle("Swag Labs");
        await loginpage.login(testData.login.invalidPassword.username, testData.login.invalidPassword.password)
        await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();  
    });

    test("Login with Invalid Username", async({page})=>{
        const poManager = new POManager(page);
        const loginpage = poManager.getLoginPage();

        await loginpage.navigateToLoginPage();
        await expect(page).toHaveTitle("Swag Labs");
        await loginpage.login(testData.login.invalidUserName.username, testData.login.invalidUserName.password)
        await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();  
    });

    test("Click Login without username and password", async({page})=>{
        const poManager = new POManager(page);
        const loginpage = poManager.getLoginPage();

        await loginpage.navigateToLoginPage();
        await expect(page).toHaveTitle("Swag Labs");
        await loginpage.login("", "")
        await expect(page.getByText("Epic sadface: Username is required")).toBeVisible();  
    });
});