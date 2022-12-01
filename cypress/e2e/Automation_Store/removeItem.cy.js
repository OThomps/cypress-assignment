/// <reference types="cypress" />

import LoginPage from '../../page-objects/loginPage'
import LoginData from '../../data/userData'
import ProductsPage from '../../page-objects/productsPage'


describe('Remove Feature', () => {
    beforeEach(() => {
        cy.visit('/')
        //Login with standard user
        LoginPage.login(LoginData[0].username, LoginData[0].password)
    })

    it('should remove item from product list page', () => {
        //add single item to cart
        ProductsPage.addToCart()
        //check cart icon was updated and item now has a remove button
        cy.get(ProductsPage.cartBadge).should('be.visible').should('have.text', '1')
        cy.get(ProductsPage.removeBtn).should('be.visible')
        //remove item and assert
        ProductsPage.removeFromCart()
        cy.get(ProductsPage.removeBtn).should('not.exist')
        cy.get(ProductsPage.cartBadge).should('not.exist')
        cy.get(ProductsPage.onsesieItem).should('have.text', "Add to cart")
    })

    it('should remove item from cart', () => {
        //add items to cart
        ProductsPage.addToCart()
        //navigate to cart
        ProductsPage.navToCart()
        //remove item and assert
        ProductsPage.removeFromCart()
        cy.get(ProductsPage.removeBtn).should('not.exist')

        cy.contains('Sauce Labs Onesie').should('not.exist')
        cy.get(ProductsPage.cartBadge).should('not.exist')

    })
})