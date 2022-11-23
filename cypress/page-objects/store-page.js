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
}
