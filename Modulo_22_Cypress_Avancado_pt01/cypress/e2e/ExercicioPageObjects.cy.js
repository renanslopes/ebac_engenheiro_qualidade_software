/// <reference types="cypress"/>

const { homePage } = require("../support/pages/home.page")
const { signupPage } = require("../support/pages/signup.page")

describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })

  it('Deve conseguir fazer o login', () => {

    // let fName = signupPage.firstName
    // let lName = signupPage.lastName
    homePage.openMenu('Account')
    signupPage.btnSignup.click()
    signupPage.createUser()
    homePage.openMenu('Account')
    signupPage.profileTitle.should('contain', 'Profile')
    // cy.log("Console LOG", fName)
    // profilePage.customerName.should('contain', 'EBAC Cliente')
  })
})