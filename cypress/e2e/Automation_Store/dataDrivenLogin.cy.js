/// <reference types="cypress" />

import LoginData from '../../data/userData'
import LoginPage from '../../page-objects/loginPage'


describe('Login Validations', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    //Data driven login using for loop through to check each user in data file
    for (const record of LoginData) {
        it(`should attempt login with ${record.username}`, () => {

            LoginPage.login(record.username, record.password)
            if (record.username === "invalid_user" || record.username === "locked_out_user") { //check if user is invalid or locked out.
                cy.url().should('eq', record.expectedUrl);
                cy.get(LoginPage.loginMessage).should('have.text', record.message); //assert error message is displayed
            } else {
                cy.url().should('eq', record.expectedUrl);
                cy.contains('Products').should('be.visible')
            }
        })

    }
})