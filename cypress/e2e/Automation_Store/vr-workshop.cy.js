/// <reference types="cypress" />

// This test case spec contains everything needed to run a full visual test against the QW online store site.
// The line below imports the store page objects.to
import {StorePage} from '../../page-objects/store-page'

// This "describe" method contains related test cases with per-test setup and cleanup.
describe('Visual Validation Exercise', function() {
  const Store_Page = new StorePage()

  //This method navigates to the QW online store website.
  before(() =>{
      Store_Page.navigate()
  })

  // This method performs setup before each test.
  beforeEach(() => {

    //Add code here to create app  and batch name
    
  })

  // This method performs cleanup after each test.
  afterEach(() => {

    //Add code here to close applitools eyes

  })

  //Observe Store Hopepage
  it('Visual regression on QW online store', () => {
    // Add code to take a snapshot of the Automation store webpage
  })
})