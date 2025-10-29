/// <reference types="cypress" />

import validUser from '../../fixtures/validUser.json'
import { menu } from '../../modules/menu/index'
import { generateUser } from '../../support/helpers';

let user;

describe('Register', () => {
    beforeEach(() => {
        user = generateUser();
        cy.visit('https://automationexercise.com');
        menu.navigateToLogin();
    });

    it('Register new user successfully', () => {
        cy.get('input[data-qa="signup-name"]').type(user.name)
        cy.get('input[data-qa="signup-email"]').type(user.email)

        cy.get('button[data-qa="signup-button"]').click()

        cy.get('input[name="title"]').check('Mr')

        cy.get('input[data-qa="password"]').type(user.password, { log: false })
        cy.get('select[data-qa="days"]').select('5')
        cy.get('select[data-qa="months"]').select('May')
        cy.get('select[data-qa="years"]').select('1991')

        cy.get('#newsletter').check()
        cy.get('#optin').check()

        cy.get('input[data-qa="first_name"]').type(user.firstName)
        cy.get('input[data-qa="last_name"]').type(user.lastName)
        cy.get('input[data-qa="company"]').type(user.company)
        cy.get('input[data-qa="address"]').type(user.address)
        cy.get('input[data-qa="address2"]').type(user.address)
        cy.get('select[data-qa="country"]').select('United States')
        cy.get('input[data-qa="state"]').type(user.state)
        cy.get('input[data-qa="city"]').type(user.city)
        cy.get('input[data-qa="zipcode"]').type(user.zipCode)
        cy.get('input[data-qa="mobile_number"]').type(user.mobileNumber)

        cy.get('button[data-qa="create-account"]').click()

        cy.url().should('include', 'account_created')
        cy.contains('b', 'Account Created!')
    });

    it('Register User with existing email', () => {
        cy.get('input[data-qa="signup-name"]').type(validUser.name)
        cy.get('input[data-qa="signup-email"]').type(validUser.email)

        cy.get('button[data-qa="signup-button"]').click()

        cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!')
    });
});