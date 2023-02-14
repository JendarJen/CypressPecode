const { url } = require('wd/lib/commands')

import LoginPage from '../pages/loginPage'

describe('Test task for Pecode company', () => {
  beforeEach(() => {
    cy.visit(
      'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php'
    )
  })

  it('Checking the Pecode website', () => {
    // cy.url().should('include', 'https://www.pecodesoftware.com/')
    cy.contains('AQA internship Login')
  })

  it('Positive login test', () => {
    LoginPage.inputUsername.click().type('rud.evgenia@gmail.com')
    LoginPage.inputUsername.should('have.value', 'rud.evgenia@gmail.com')
    LoginPage.inputPassword.click().type('EvgeniaRud123@')
    LoginPage.inputPassword.should('have.value', 'EvgeniaRud123@')
    LoginPage.submitLogin.should('have.value', 'Login')
    LoginPage.submitLogin.click()
    cy.contains('No account found with that username.')
  })

  it('Negative login test', () => {
    LoginPage.inputUsername.click().type('evgenia@gmail.com')
    LoginPage.inputUsername.should('have.value', 'evgenia@gmail.com')
    LoginPage.inputPassword.click().type('EvgeniaRud123@')
    LoginPage.inputPassword.should('have.value', 'EvgeniaRud123@')
    LoginPage.submitLogin.should('have.value', 'Login')
    LoginPage.submitLogin.click()
    cy.contains('No account found with that username.')
  })
})
