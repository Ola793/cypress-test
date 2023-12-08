/// <reference types = "cypress" />

describe('Cypress first ui tests', () => {
  const colors = {
    "Light": "rgb(255, 255, 255)",
    "Dark": "rgb(34, 43, 69)",
    "Cosmic": "rgb(50, 50, 89)",
    "Corporate": "rgb(255, 255, 255)"
   }

  beforeEach(() => {
    cy.visit('/pages/forms/layouts')
    cy.get('.select-button').click()
  })

  it('color theme Light', () => {
    cy.log('color theme Light')
    cy.get('nb-option:first-of-type').click()
    cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Light)
  })

  it('color theme Dark', () => {
    cy.log('color theme Dark')
    cy.get('nb-option:nth-of-type(2)').click()
    cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Dark)
  })

  it('color theme Cosmic', () => {
    cy.log('color theme Cosmic')
    cy.get('nb-option:nth-of-type(3)').click()
    cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Cosmic)
  })

  it('color theme Corporate', () => {
    cy.log('color theme Corporate')
    cy.get('nb-option:nth-of-type(4)').click()
    cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Corporate)
  })
})

