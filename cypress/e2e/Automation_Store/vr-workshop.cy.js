/// <reference types="cypress" />

// The line below imports the StorePage from our page object file
import {StorePage} from '../../page-objects/store-page'

describe('Visual Validation Exercise', function() {
  const Store_Page = new StorePage()

  before(() =>{
      Store_Page.navigate()
  })

  beforeEach(() => {

    //Add code here to create app  and batch name
    
  })

  afterEach(() => {

    //Add code here to close applitools eyes

  })

  it('Visual regression on QW online store', () => {
    // Add code to take a snapshot of the Automation store webpage
  })
})