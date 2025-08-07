/// <reference types="cypress"/>

// const { homePage } = require("../support/pages/home.page")
// const { loginPage } = require("../support/pages/login.page")
const { profilePage } = require("../support/pages/profile.page")
const { email, senha } = require('../fixtures/data.json')

context('Dado que estou na página inicial', () => {
  context('Quando eu faço login', () => {
    beforeEach(() => {
      cy.login(email, senha)

    });

    it('Então o nome do usuário deve aparece na página de perfil', () => {
      profilePage.customerName.should('contain', 'EBAC Cliente')
    })
  });
});

