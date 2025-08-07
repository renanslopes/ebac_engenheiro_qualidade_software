/// <reference types="cypress"/>

export const homePage = {
    openMenu(menu) {
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },
    clickSearch() {
        return cy.get(':nth-child(2) > .r-mh9cjk > .css-175oi2r').click()
    },
    typeSearch() {
        return cy.get('[data-testid="searchInput"]').type("bag Charlotte")
    },
    clickFirstSon() {
        return cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
    },



    // typeItem() {
    //     return cy.get('[data-testid="searchInput"]').type("Camiseta EBAC")
    // }
}