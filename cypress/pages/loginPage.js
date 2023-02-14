class LoginPage {
  get inputUsername() {
    return cy.get('input[name=username]')
  }
  get inputPassword() {
    return cy.get('input[name="password"]')
  }
  get submitLogin() {
    return cy.get('[type="submit"]')
  }
}
export default new LoginPage()
