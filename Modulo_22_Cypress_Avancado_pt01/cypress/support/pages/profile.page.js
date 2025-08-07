/// <reference types="cypress"/>

export const profilePage = {
    get customerName() { return cy.get(`[data-testid="CustomerName"]`) },


}
