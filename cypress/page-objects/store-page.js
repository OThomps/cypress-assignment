export class StorePage {
  
    navigate() {
      cy.visit('https://automation-camp.vercel.app/')
    }

    get sortItemButton () {
        return cy.get('div.MuiInputBase-root');
  }

    get lowestToHighest () {
        return cy.get('li:nth-child(2)');
  }

    get highestToLowest () {
        return cy.get('li:nth-child(3)');
  }

    get A_Z () {
        return cy.get('li:nth-child(4)');
    }

    get quality_hat () {
        return cy.get('#quality-hat');
  }

    get increase_unit () {
        return cy.get('div.Quantity_btnGroup__wUmv_ > button:nth-child(1)');
  }

    get add_to_cart () {
        return cy.get('div:nth-child(2) > div > button');
  }

}
