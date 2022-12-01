/// <reference types="cypress" />

import LoginPage from '../../page-objects/loginPage'
import LoginData from '../../data/userData'
import ProductsPage from '../../page-objects/productsPage'
import CartPage from '../../page-objects/cartToCheckout'


describe('Negative Tests', () => {
    beforeEach(() => {
        cy.visit('/')
        //Login with standard user
        LoginPage.login(LoginData[0].username, LoginData[0].password)
    })


    it('should not complete checkout form with no first name entered', () => {
        //add single item to cart
        ProductsPage.addToCart()
        //navigate to cart and check item is correct
        ProductsPage.navToCart()
        //continue to checkout and fill out form
        cy.get(CartPage.checkoutBtn).click()
        CartPage.missingFirstName()
        cy.get(CartPage.errorMsg).should('be.visible').should('have.text', 'Error: First Name is required')
    })

    it('should not complete checkout form with no last name entered', () => {
        //add single item to cart
        ProductsPage.addToCart()
        //navigate to cart and check item is correct
        ProductsPage.navToCart()
        //continue to checkout and fill out form
        cy.get(CartPage.checkoutBtn).click()
        CartPage.missingLastName()
        cy.get(CartPage.errorMsg).should('be.visible').should('have.text', 'Error: Last Name is required')
    })

    it('should not complete checkout form with no zip code entered', () => {
        //add single item to cart
        ProductsPage.addToCart()
        //navigate to cart and check item is correct
        ProductsPage.navToCart()
        //continue to checkout and fill out form
        cy.get(CartPage.checkoutBtn).click()
        CartPage.missingZip()
        cy.get(CartPage.errorMsg).should('be.visible').should('have.text', 'Error: Postal Code is required')
    })

})