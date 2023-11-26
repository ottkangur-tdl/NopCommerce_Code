import { Given, When, Then } from '@wdio/cucumber-framework';
import { tests } from '../support/tests';

Given('User is on NopCommerce main page', async() => {
    tests.mainPageTest.openMainPage();
})

When('User opens Register page', async() => {
    tests.mainPageTest.goToRegisterPage();
})

When('User fills in the registration fields', async()=>{
    await tests.registerPageTest.userFillsInTheRegistration();
})

Then('User successfully reigisters', async()=>{
    await tests.registerPageTest.userAssertRegistration();
})

Given('User opens Login page', async() => {
    tests.mainPageTest.goToLoginPage();
})

When('User inserts login information', async()=>{
    await tests.loginPageTest.userInsertsLoginData();
})

Then('User is successfully logged in', async()=>{
    await tests.loginPageTest.userAssertsLogin();
})
