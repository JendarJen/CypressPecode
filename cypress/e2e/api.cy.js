context('Test API for Pecode company', () => {
  it('Test API', () => {
    cy.request({
      method: 'Get',
      url: 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php',
      headers: {
        Accept: 'application/JSON',
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
