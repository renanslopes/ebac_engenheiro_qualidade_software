/// <reference types="cypress"/>

const { homePage } = require("../../support/pages/home.page")
const { email, senha } = require('../../fixtures/data.json')
const { categories } = require('../../fixtures/categories.json')


describe('Categorias', () => {

  beforeEach(() => {
    cy.shortLogin(email, senha)
  })

  categories.forEach(category => {
    it(`Validação categoria ${category.name}`, () => {
      homePage.openSearchProduct()
      homePage.openCategoriesFilter()
      homePage.categories().should('contain.text', category.name)
    })

  })



})