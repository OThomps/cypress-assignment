/// <reference types="cypress" />

import LoginPage from '../../page-objects/loginPage'
import LoginData from '../../data/userData'
import ProductsPage from '../../page-objects/productsPage'
import InventoryData from '../../data/inventoryData'


describe('Sort Validations', () => {
    beforeEach(() => {
        cy.visit('/')
        //Login with standard user
        LoginPage.login(LoginData[0].username, LoginData[0].password)
    })

    it('should sort items from A-Z', () => {
        //sort product list on page
        ProductsPage.sortBy('az')
        //check active option
        cy.get(ProductsPage.activeOption).should('have.text', 'Name (A to Z)')
        //assert list is in the right order
        cy.get(ProductsPage.inventoryItems).each((item, index) => {
            let sorted = InventoryData.sort((a, b) => a.name > b.name ? 1 : -1)
            //entire text of element is returned so capture substring that contains product name only
            expect(item.text().slice(0, sorted[index].count)).equal(sorted[index].name)
        })
    })

    it('should sort items from Z-A', () => {
        //sort product list on page
        ProductsPage.sortBy('za')
        //check active option
        cy.get(ProductsPage.activeOption).should('have.text', 'Name (Z to A)')
        //assert list is in the right order
        cy.get(ProductsPage.inventoryItems).each((item, index) => {
            let sorted = InventoryData.sort((a, b) => b.name > a.name ? 1 : -1)
            //entire text of element is returned so capture substring that contains product name only
            expect(item.text().slice(0, sorted[index].count)).equal(sorted[index].name)
        })
    })


    it('should sort items from low to high', () => {
        //sort product list on page
        ProductsPage.sortBy('lohi')
        //check active option
        cy.get(ProductsPage.activeOption).should('have.text', 'Price (low to high)')
        //assert list is in the right order
        cy.get(ProductsPage.inventoryItems).each((item, index) => {
            let sorted = InventoryData.sort((a, b) => a.price > b.price ? 1 : -1)
            //find the price element and assert the price value is correct based on sorting
            cy.get(item).find(ProductsPage.itemPrice).should('have.text', '$' + sorted[index].price)
            //expect(item.text().slice(0, sorted[index].count)).equal('$' + sorted[index].price)
        })
    })


    it('should sort items from high to low', () => {
        //sort product list on page
        ProductsPage.sortBy('hilo')
        //check active option
        cy.get(ProductsPage.activeOption).should('have.text', 'Price (high to low)')
        //assert list is in the right order
        cy.get(ProductsPage.inventoryItems).each((item, index) => {
            let sorted = InventoryData.sort((a, b) => b.price > a.price ? 1 : -1)
            //find the price element and assert the price value is correct based on sorting
            cy.get(item).find(ProductsPage.itemPrice).should('have.text', '$' + sorted[index].price)
            //expect(item.text().slice(0, sorted[index].count)).equal('$' + sorted[index].price)
        })
    })

})