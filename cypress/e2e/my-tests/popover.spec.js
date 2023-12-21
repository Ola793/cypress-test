/// <reference types = "cypress" />

describe('Cypress first ui tests', () => {
  beforeEach(() => {
    cy.visit('/pages/modal-overlays/popover')
  })

  it('popover check', () => {
    cy.log('popover check')
    cy.get('button.appearance-filled.size-medium.status-danger.shape-rectangle.transitions:last-of-type').trigger('mouseenter')
    cy.get('nb-popover').should('be.visible')
  })
})

