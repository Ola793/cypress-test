import { RegisterPage } from "./register.page"

export class LoginPage extends RegisterPage {
  open() {
    cy.visit('/auth/login')
  }

  get forgotPasswordLink() {
    return cy.get('a.forgot-password')
  }

  get backToLoginLink() {
    return cy.get('a.text-link').eq(0)
  }

  get toRegisterLink() {
    return cy.get('a.text-link').eq(1)
  }
}
