/// <reference types = "cypress" />

import { RegisterPage } from "../pages/register.page";

describe('register page check', () => {
  const name = 'New User';
  const newEmail = 'test@test.com';
  const newPassword = 'password';
  const registerPage = new RegisterPage();

  beforeEach(() => {
    registerPage.open()
  })

  it('register check', () => {
    cy.log('register check')
    registerPage.nameInput.type(name)
    registerPage.emailInput.type(newEmail)
    registerPage.passwordInput.type(newPassword)
    registerPage.repeatPasswordInput.type(newPassword)
    registerPage.agreementCheckBox.click()
    registerPage.submitButton.should('be.enabled').click()
    registerPage.userPicture.should('exist')
  })
})
