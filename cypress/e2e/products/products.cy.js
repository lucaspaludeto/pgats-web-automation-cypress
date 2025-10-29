/// <reference types="cypress" />

import { products } from '../../modules/menu/index'

const searchTerm = 'TShirt';
const pattern = /t[\s\-]?shirt/i; // aceita Tshirt, T-shirt, T shirt, TSHIRT...

describe('Products', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com');
        products.navigateToProducts();
    });

    it('Verify All Products and product detail page', () => {
        cy.get('.product-image-wrapper')
            .first()
            .find('a[href*="product_details"]')
            .click();
            
        cy.get('.product-information h2').should('be.visible').and('have.text', 'Blue Top')        
        cy.contains('.product-information p', 'Category:').should('have.text', 'Category: Women > Tops')
        cy.contains('.product-information span', 'Rs. 500').should('be.visible').and('have.text', 'Rs. 500')
        cy.contains('.product-information p', 'Availability:').should('have.text', 'Availability: In Stock')
        cy.contains('.product-information p', 'Condition:').should('have.text', 'Condition: New')
        cy.contains('.product-information p', 'Brand:').should('have.text', 'Brand: Polo')
    });

    it('Search Product', () => {
        cy.get('#search_product').type(searchTerm)
        cy.get('#submit_search').click()
        cy.get('.title.text-center').should('have.text', 'Searched Products')
        cy.get('.productinfo.text-center')
          .should('have.length.greaterThan', 0)
          .each(($el) => {
              const text = $el.text().trim();
              expect(text).to.match(pattern, `Produto inesperado encontrado: ${text}`);
          });
    });
});