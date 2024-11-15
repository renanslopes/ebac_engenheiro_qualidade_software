/// <reference types="cypress" />


describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type('renan.teste@teste.com');
        cy.get('#password').type('123456');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain', 'Olá, renan.teste (não é renan.teste? Sair)')
    });
    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {

        cy.get('#username').type('renan123.teste@teste.com');
        cy.get('#password').type('123456');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li')
            .should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.');
    });
    it.only('Deve exibir mensagem de erro ao inserir senha inválida', () => {

        cy.get('#username').type('renan.teste@teste.com');
        cy.get('#password').type('12345');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li')
            .should('contain', 'Erro: A senha fornecida para o e-mail renan.teste@teste.com está incorreta. Perdeu a senha?');
    });

});