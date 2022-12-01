/// <reference types="cypress" />

import LoginPage from '../../page-objects/loginPage'
import LoginData from '../../data/userData'
import ProductsPage from '../../page-objects/productsPage'
import CartPage from '../../page-objects/cartToCheckout'
import ProductsData from '../../data/productsData'


describe('Checkout Workflows', () => {
    beforeEach(() => {
        cy.visit('/')
        //Login with standard user
        LoginPage.login(LoginData[0].username, LoginData[0].password)
    })

    it('should complete checkout with a single item', () => {
        //add single item to cart
        ProductsPage.addToCart()
        //check cart icon was updated and item now has a remove button
        cy.get(ProductsPage.cartBadge).should('be.visible').should('have.text', '1')
        cy.get(ProductsPage.removeBtn).should('be.visible')

        //navigate to cart and check item is correct
        ProductsPage.navToCart()
        cy.url().should('eq', ProductsData[3].cartUrl)
        cy.get(CartPage.singleItem).should('have.text', ProductsData[0].product)
        cy.get(CartPage.cartQuantity).should('have.text', 1)
        cy.get(CartPage.itemPrice).should('have.text', '$' + ProductsData[0].price)

        //continue to checkout and fill out form
        cy.get(CartPage.checkoutBtn).click()
        cy.url().should('eq', ProductsData[3].checkoutUrl)
        CartPage.completeForm()
        //confirm overview information
        cy.url().should('eq', ProductsData[3].checkoutNextUrl)
        cy.get(CartPage.itemTotal).should('include.text', '$' + ProductsData[0].price)
        cy.get(CartPage.tax).should('include.text', '$' + ProductsData[0].expectedTax)
        cy.get(CartPage.total).should('include.text', '$' + (ProductsData[0].price + ProductsData[0].expectedTax))
        cy.get(CartPage.finishBtn).click()

        //confirm completion
        cy.url().should('eq', ProductsData[3].confirmationUrl)
        cy.get(CartPage.completeHeader).should('have.text', "THANK YOU FOR YOUR ORDER")
    })

    it('should complete checkout with multiple items', () => {
        //add items to cart
        ProductsPage.addMultiCart()
        //check cart icon was updated to match number of items added
        cy.get(ProductsPage.cartBadge).should('be.visible').should('have.text', '3')

        //navigate to cart and check item is correct
        ProductsPage.navToCart()
        cy.url().should('eq', ProductsData[3].cartUrl)
        //confirm items were added accurately and their price matches what was shown on the products page
        cy.get(CartPage.allItems).find('#item_0_title_link').should('have.text', ProductsData[1].product).siblings('.item_pricebar').children(CartPage.itemPrice).should('have.text', '$' + ProductsData[1].price)
        cy.get(CartPage.allItems).find('#item_1_title_link').should('have.text', ProductsData[2].product).siblings('.item_pricebar').children(CartPage.itemPrice).should('have.text', '$' + ProductsData[2].price)
        cy.get(CartPage.allItems).find('#item_2_title_link').should('have.text', ProductsData[0].product).siblings('.item_pricebar').children(CartPage.itemPrice).should('have.text', '$' + ProductsData[0].price)

        //continue to checkout and fill out form
        cy.get(CartPage.checkoutBtn).click()
        cy.url().should('eq', ProductsData[3].checkoutUrl)
        CartPage.completeForm()
        //confirm overview information
        cy.url().should('eq', ProductsData[3].checkoutNextUrl)

        //calculations for total cost and tax for items
        const itemTotalPrice = (ProductsData[1].price + ProductsData[2].price + ProductsData[0].price)
        const tax = (ProductsData[1].expectedTax + ProductsData[2].expectedTax + ProductsData[0].expectedTax)
        const grandTotal = (itemTotalPrice + tax)

        //assert values
        cy.get(CartPage.itemTotal).should('include.text', '$' + itemTotalPrice)
        cy.get(CartPage.tax).should('include.text', '$' + tax)
        cy.get(CartPage.total).should('include.text', '$' + grandTotal)
        cy.get(CartPage.finishBtn).click()

        //confirm completion
        cy.url().should('eq', ProductsData[3].confirmationUrl)
        cy.get(CartPage.completeHeader).should('have.text', "THANK YOU FOR YOUR ORDER")


    })
})