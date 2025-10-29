class Menu {
    navigateToLogin() {
        cy.get('a[href="/login"]').click();
    };
};

class ContactUs {
    navigateToContactUs() {
        cy.get('a[href="/contact_us"]').click();
    };
};

class Products {
    navigateToProducts() {
        cy.get('a[href="/products"]').click();
        cy.url().should('include', 'products')
        cy.get('h2.title').should('have.text', 'All Products')
    };
};

export const menu = new Menu();
export const contactUs = new ContactUs();
export const products = new Products();