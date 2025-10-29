/// <reference types="cypress" />

import validUser from '../../fixtures/validUser.json'

describe('Footer subscription Section', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com');
    });

    it('Verify Subscription in home page', () => {
        cy.get('#susbscribe_email')
            .scrollIntoView()
            .should('be.visible')
            .type(validUser.email)

        cy.get('#subscribe')
            .should('be.visible')
            .click()

        cy.get('#success-subscribe')
            .should('be.visible')
            .and('contain.text', 'You have been successfully subscribed')
    });
});