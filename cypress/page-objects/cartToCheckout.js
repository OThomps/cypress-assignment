class Cart {
    /**
     * define selectors using getter methods
     */

    get singleItem() {
        return ('.inventory_item_name')
    }

    get allItems() {
        return ('.cart_item')
    }

    get cartLink() {
        return ('.shopping_cart_link')
    }

    get cartQuantity() {
        return ('.cart_quantity')
    }

    get itemPrice() {
        return ('.inventory_item_price')
    }

    get checkoutBtn() {
        return ('#checkout')
    }

    get firstNameField() {
        return ('#first-name')
    }

    get lastNameField() {
        return ('#last-name')
    }

    get zipField() {
        return ('#postal-code')
    }

    get continueBtn() {
        return ('#continue')
    }

    get finishBtn() {
        return ('#finish')
    }

    get itemTotal() {
        return ('.summary_subtotal_label')
    }

    get tax() {
        return ('.summary_tax_label')
    }

    get total() {
        return ('.summary_total_label')
    }

    get completeHeader() {
        return ('.complete-header')
    }

    get errorMsg() {
        return ('h3[data-test="error"]')
    }

    /**
    * Methods to encapsule automation code to interact with the page
    *
    */

    completeForm() {
        cy.get(this.firstNameField).type("Tester")
        cy.get(this.lastNameField).type("Testy")
        cy.get(this.zipField).type("808")
        cy.get(this.continueBtn).click()
    }

    missingFirstName() {
        cy.get(this.lastNameField).type("Testy")
        cy.get(this.zipField).type("808")
        cy.get(this.continueBtn).click()
    }

    missingLastName() {
        cy.get(this.firstNameField).type("Testy")
        cy.get(this.zipField).type("808")
        cy.get(this.continueBtn).click()
    }

    missingZip() {
        cy.get(this.firstNameField).type("Testy")
        cy.get(this.lastNameField).type("808")
        cy.get(this.continueBtn).click()
    }




}

export default new Cart()