/// <reference types = "cypress" />

describe('Cypress first ui tests', () => {
  beforeEach(() => {
    cy.visit('/pages/modal-overlays/dialog')
  })

  it('popover check', () => {
    cy.log('dialog return check')
    cy.get('.result-from-dialog button.appearance-filled.size-medium.status-primary.shape-rectangle.transitions:last-of-type').click()
    cy.get('input.size-medium.shape-rectangle').click().type('Olya').as('name')
    cy.get('button.appearance-filled.size-medium.status-success.shape-rectangle.transitions').click()
    cy.get('.result-from-dialog li.ng-star-inserted').should('exist').should('not.be.empty')
  })
})

