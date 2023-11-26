import { pages } from "../support/pages";
import { data } from "../support/data";

export class LoginPageTest {
    async userInsertsLoginData(){
        await pages.loginPage.getEmail().setValue(await data.userData.newUser.email);
        await pages.loginPage.getPassword().setValue(await data.userData.newUser.password);
        await pages.loginPage.getLoginButton().click();
    }

    async userAssertsLogin(){
        await expect( pages.mainPage.getLogOutButton() ).waitForExist();
    }
}