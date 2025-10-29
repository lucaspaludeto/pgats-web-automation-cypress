/// <reference types="cypress" />

import { menu } from '../../modules/menu/index'
import { generateUser } from '../../support/helpers';

let user;

describe('Place Order', () => {
    beforeEach(() => {
        user = generateUser();
        cy.visit('https://automationexercise.com');
        menu.navigateToLogin();
    });

    it('Place Order: Register before Checkout', () => {
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
        cy.get('[data-qa="continue-button"]').click()

        cy.contains(`Logged in as ${user.name}`).should('be.visible')

        cy.contains('Add to cart').first().click({ force: true })
        cy.contains('Continue Shopping').click()
        cy.contains('Cart').click();

        cy.url().should('include', '/view_cart')
        cy.contains('Proceed To Checkout').click()
        cy.contains('Address Details').should('be.visible')
        cy.contains('Review Your Order').should('be.visible')

        cy.get('textarea[name="message"]').type('This is an automated test message.')
        cy.contains('Place Order').click()

        cy.get('[data-qa="name-on-card"]').type(user.name)
        cy.get('[data-qa="card-number"]').type(user.cardNumber)
        cy.get('[data-qa="cvc"]').type(user.cvc)
        cy.get('[data-qa="expiry-month"]').type(user.expMonth)
        cy.get('[data-qa="expiry-year"]').type(user.expYear)
        cy.get('[data-qa="pay-button"]').click()
        
        cy.url().should('include', '/payment_done')
        cy.contains('Congratulations! Your order has been confirmed!')

        cy.contains('Delete Account').click()
        cy.get('[data-qa="account-deleted"]').should('have.text', 'Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()
    });
});