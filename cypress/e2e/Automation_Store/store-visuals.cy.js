/// <reference types="cypress" />

// This test case spec contains everything needed to run a full visual test against the QW online store site.
// The line below imports the StorePage class from our page objects file.
import {StorePage} from '../../page-objects/store-page'

// This "describe" method contains related test cases with per-test setup and cleanup.
describe('Visual Validation', function() {
  const Store_Page = new StorePage()

  //This method navigates to the QW online store site.
  before(() =>{
      Store_Page.navigate()
  })

  // This method performs setup before each test.
  beforeEach(() => {
    /* 
    This comment open applitools eyes to start visual testing.
    Also creates the app and batch name
    Each test should open its own Eyes for its own snapshots. 
    */
    cy.eyesOpen({appName: 'QW Automation Store', batchName: 'Visual Regression Test!',})
  })

  // This method performs cleanup after each test.
  afterEach(() => {

    // Close Eyes to tell the server it should display the results.
    cy.eyesClose()
  })

  //Filers item prices from lowest to highest
  it.only('Filter from lowest to highest', () => {
    Store_Page.sortItemButton.click()
    Store_Page.lowestToHighest.click()
    cy.eyesCheckWindow('Store item prices from lowest to highest')
  })

  //QW add to cart automation workflow
  /*
  it('Add an item to the cart', () => {
    //Select an item
    Store_Page.quality_hat.click()
    cy.wait(500)
    cy.eyesCheckWindow('Item Selected')
    //Add an extra unit of the item
    Store_Page.increase_unit.click()
    /cy.eyesCheckWindow('Increase the unit of the item')
     //Add item to cart
    Store_Page.add_to_cart.click()
    cy.wait(1000)
    cy.eyesCheckWindow('Item in my cart')
  })
  */
})