export class LoginPage {
    getLoginPageBody(){
        return $('.login-page')
    }

    getEmail(){
        return $('#Email')
    }

    getPassword(){
        return $('#Password')
    }

    getLoginButton(){
        return $('.button-1 login-button')
    }
}
