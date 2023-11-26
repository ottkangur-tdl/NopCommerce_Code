import { pages } from "../support/pages";

export class MainPageTest {
    async openMainPage(){
        await browser.url('https://demo.nopcommerce.com/');
        await browser.maximizeWindow();
        await pages.mainPage.getMainPageBody().waitForExist();
    }

    async goToRegisterPage(){
        await pages.mainPage.getRegisterPageLink().click();
        await pages.registerPage.getRegisterPageBody().waitForExist();
    }

    async goToLoginPage(){
        await pages.mainPage.getLoginPageLink().click();
        await pages.loginPage.getLoginPageBody().waitForExist();
    }
}
