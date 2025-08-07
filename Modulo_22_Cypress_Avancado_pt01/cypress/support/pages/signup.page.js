/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

export const signupPage = {
    get btnSignup() { return cy.get('[data-testid="signUp"] > .css-146c3p1') },
    get firstName() { return cy.get('[data-testid="firstName"]') },
    get lastName() { return cy.get('[data-testid="lastName"]') },
    get phoneNumber() { return cy.get('[data-testid="phone"]') },
    get email() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]') },
    get password() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]') },
    get rePassword() { return cy.get('[data-testid="repassword"]') },
    get btnCreate() { return cy.get('[data-testid="create"]') },
    get btnAccount() { return cy.get('[href="/Tab/Account"]') },
    get profileTitle() { return cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > [style="color: rgb(255, 255, 255); font-size: 20px; font-family: Montserrat-Bold;"]') },


    createUser(firstName, lastname, phoneNumber, email, password, rePassword) {

        this.firstName.type(faker.person.firstName())
        this.lastName.type(faker.person.lastName())
        this.phoneNumber.type(faker.phone.number())
        this.email.type(faker.internet.email())
        this.password.type("123456")
        this.rePassword.type("123456")
        this.btnCreate.click()
    },


}
