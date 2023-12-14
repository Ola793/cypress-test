export class RegisterPage {
  open() {
    cy.visit('/auth/register')
  }

  get title() {
    return cy.get('h1')
  }

  get nameInput() {
    return cy.get('#input-name')
  }

  get emailInput() {
    return cy.get('#input-email')
  }

  get passwordInput() {
    return cy.get('#input-password')
  }

  get repeatPasswordInput() {
    return cy.get('#input-re-password')
  }

  get agreementCheckBox() {
    return cy.get('span.custom-checkbox')
  }

  get submitButton() {
    return cy.get('button')
  }

  get userPicture() {
    return cy.get('div.user-picture')
  }
}
