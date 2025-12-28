import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { ProductPage } from "./ProductPage";

export class POManager
{
    private page: Page;
    readonly loginPage: LoginPage;
    readonly productPage: ProductPage;
    
    constructor(page: Page)
    {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.productPage = new ProductPage(page);    
    }

    getLoginPage(){
        return this.loginPage;
    }

    getProductPage(){
        return this.productPage;
    }
}