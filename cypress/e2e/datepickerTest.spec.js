/// <reference types = "cypress" />
import moment from "moment"
import { DatePickerPage } from "../pages/datepicker.page";

describe('register page check', () => {
  const datePickerPage = new DatePickerPage();
  const today = moment().format("MMM D, YYYY");

  beforeEach(() => {
    datePickerPage.open()
  })

  it('date check', () => {
    cy.log('date check')
    datePickerPage.commonDatePicker.click()
    datePickerPage.today.click()
    datePickerPage.commonDatePicker.should('have.value', today)
  })
})
