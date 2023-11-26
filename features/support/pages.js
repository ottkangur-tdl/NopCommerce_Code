import { MainPage } from "../page-objects/mainPage";
import { RegisterPage } from "../page-objects/registerPage";
import { LoginPage } from "../page-objects/loginpage";

class Pages {
    constructor(){
        this.mainPage = new MainPage(),
        this.registerPage = new RegisterPage(),
        this.loginPage = new LoginPage()
    }
}

export const pages = new Pages()
