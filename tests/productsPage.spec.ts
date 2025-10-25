import { test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';

test.describe("Add Products to cart", ()=>{
    test("Add Backpack to Cart", async ({page})=>{
        const loginpage = new LoginPage(page);
        await loginpage.navigateToLoginPage();
        await loginpage.login("standard_user", "secret_sauce")
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

        const productPage = new ProductPage(page);
        await productPage.addBackpackToCart();
        await page.pause();
    });
});