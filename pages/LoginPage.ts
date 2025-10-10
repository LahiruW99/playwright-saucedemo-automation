import {Page, Locator, expect} from '@playwright/test';

export class LoginPage{
    private page: Page;
    private username : Locator;
    private password : Locator;
    private loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.locator("#user-name");
        this.password = page.locator ("#password");
        this.loginButton = page.locator("#login-button");
    }
    
    async navigateToLoginPage(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(UserName: string, Password: string){
        await this.username.fill(UserName);
        await this.password.fill(Password);
        await this.loginButton.click();
    }
}

