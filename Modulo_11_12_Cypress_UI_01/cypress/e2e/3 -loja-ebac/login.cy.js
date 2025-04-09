/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta');
    });

    // afterEach(() => {
    //     cy.screenshot();
    // });

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
    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {

        cy.get('#username').type('renan.teste@teste.com');
        cy.get('#password').type('12345');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error > li')
            .should('contain', 'Erro: A senha fornecida para o e-mail renan.teste@teste.com está incorreta. Perdeu a senha?');
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario);
        cy.get('#password').type(perfil.senha);
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain', 'Olá, renan.teste (não é renan.teste? Sair)')
    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, { log: false });
            cy.get('#password').type(dados.senha, { log: false });
            cy.get('.woocommerce-form > .button').click();
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
                .should('contain', 'Olá, renan.teste (não é renan.teste? Sair)')
        })
    });

    it.only('Deve fazer login com sucesso - Usando comandos personalizados', () => {
        cy.login('renan.teste@teste.com', '123456')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain', 'Olá, Renan QA (não é Renan QA? Sair)')
    })
});
