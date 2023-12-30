/// <reference types = "cypress" />

describe('Cypress first ui tests', () => {
  beforeEach(() => {
    cy.visit('/pages/layout/accordion')
  })

  it('invisibility check', () => {
    cy.log('invisibility check')
    cy.get('div.ng-trigger.ng-trigger-accordionItemBody').should('be.hidden')
  })

  it('visibility check', () => {
    cy.log('toggle first item')
    cy.get('button.appearance-filled').click()
    cy.get('div.ng-trigger.ng-trigger-accordionItemBody').should('be.visible')
  })
})

