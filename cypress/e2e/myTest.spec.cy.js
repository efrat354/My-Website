/// <reference types="cypress" />

describe('Google Search Test', () => {
    it('Searches for Paris and checks results', () => {

        cy.visit('../../public/index.html');

        cy.get('#header').contains('Today');

    });
});
