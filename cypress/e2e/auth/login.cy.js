/// <reference types="cypress" />

import validUser from '../../fixtures/validUser.json'
import invalidUser from '../../fixtures/invalidUser.json'
import { menu } from '../../modules/menu/index'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com');
        menu.navigateToLogin();
    });

    it('Login User with correct email and password', () => {
        cy.get('input[data-qa="login-email"]').type(validUser.email)
        cy.get('input[data-qa="login-password"]').type(validUser.password, { log: false })

        cy.get('button[data-qa="login-button"]').click()

        cy.get('i.fa-user').parent().should('contain', 'QA Tester')  
    });

    it('Login User with incorrect email and password', () => {
        cy.get('input[data-qa="login-email"]').type(invalidUser.email)
        cy.get('input[data-qa="login-password"]').type(invalidUser.password)

        cy.get('button[data-qa="login-button"]').click()

        cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')
    });

    it('Logout User', () => {
        cy.get('input[data-qa="login-email"]').type(validUser.email)
        cy.get('input[data-qa="login-password"]').type(validUser.password, { log: false })
        cy.get('button[data-qa="login-button"]').click()

        cy.get('a[href="/logout"]').should('be.visible').click()

        cy.url().should('include', 'login')
    });
});