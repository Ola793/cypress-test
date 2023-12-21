/// <reference types = "cypress" />

import { LoginPage } from "../../pages/login.page"

describe('login page check', () => {
  const validEmail = 'test@test.com';
  const validPassword = 'password';
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.open()
  })

  it('log in check', () => {
    cy.log('log in check')
    loginPage.emailInput.type(validEmail)
    loginPage.passwordInput.type(validPassword)
    loginPage.submitButton.should('be.enabled').click()
    loginPage.userPicture.should('exist')
  })

  it('forgot password check', () => {
    cy.log('forgot password check')
    loginPage.emailInput.type(validEmail)
    loginPage.submitButton.should('be.disabled')
    loginPage.forgotPasswordLink.click()
    loginPage.emailInput.type(validEmail)
    loginPage.submitButton.should('be.enabled').click()
  })

  it('forgot password check: go back to login page', () => {
    cy.log('go back to login page')
    loginPage.forgotPasswordLink.click()
    loginPage.backToLoginLink.click()
    loginPage.title.should('contain', 'Login')
  })

  it('forgot password check: go to register page', () => {
    cy.log('go to register page')
    loginPage.forgotPasswordLink.click()
    loginPage.toRegisterLink.click()
    loginPage.title.should('contain', 'Register')
  })
})
