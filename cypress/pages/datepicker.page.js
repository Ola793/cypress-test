export class DatePickerPage {
  open() {
    cy.visit('/pages/forms/datepicker')
  }

  get commonDatePicker() {
    return cy.get('input').eq(0)
  }

  get today() {
    return cy.get('.today')
  }
}
