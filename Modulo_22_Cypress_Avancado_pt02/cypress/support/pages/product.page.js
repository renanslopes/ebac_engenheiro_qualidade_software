/// <reference types="cypress"/>

export const productPage = {
    addToChart() {
        return cy.get('[data-testid="addToCart"]').click()
    },
    continueToPayment() {
        return cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
    },
    confirmCheckout() {
        return cy.get('[data-testid="completeCheckout"]').click()
    },
    confirmCheckoutMessage() {
        return cy.get('[class="css-146c3p1"]')
    },
    productNameConfirm() {
        return cy.get('[class="css-146c3p1"]')
    },
    // typeItem() {
    //     return cy.get('[data-testid="searchInput"]').type("Camiseta EBAC")
    // }
}