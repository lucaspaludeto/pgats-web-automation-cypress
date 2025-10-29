/// <reference types="cypress" />

import validUser from '../../fixtures/validUser.json'
import { contactUs } from '../../modules/menu/index'

describe('Contact Us', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com');
        contactUs.navigateToContactUs();
    });

    it('Contact Us Form', () => {
        cy.get('input[data-qa="name"]').type(validUser.name)
        cy.get('input[data-qa="email"]').type(validUser.email)
        cy.get('input[data-qa="subject"]').type("Test Message")
        cy.get('textarea[data-qa="message"]').type("This is an automated test message.")
        cy.fixture('test-image.jpg').as('file')
        cy.get('input[type="file"]').selectFile('@file')

        cy.get('[data-qa="submit-button"]').click()

        cy.get('.status')
            .should('be.visible')
            .and('have.text', 'Success! Your details have been submitted successfully.')
    });
});