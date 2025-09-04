/// <reference types="cypress"/>

const { homePage } = require("../../support/pages/home.page")
const { email, senha } = require('../../fixtures/data.json')
const { categories } = require('../../fixtures/categories.json')


describe('Categorias', () => {

  beforeEach(() => {
    cy.shortLogin(email, senha)
  })


  it(`Deve pesquisar os produtos e ter um valor listado`, () => {
    homePage.openSearchProduct()
    homePage.searchProduct('ca')
    homePage.products().should('have.length.greaterThan', 0)

    homePage.products().each(product => {
      let price = product.find('[data-testid="price"]').text()
      expect(price).to.contain('R$')
    })
  })

})