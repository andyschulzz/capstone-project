describe('Login', () => {
  it('logs into app with test account', () => {
    cy.visit('/exercises')
    cy.get('input[name="email"]').type('Pumpele@example.de')
    cy.get('input[name="password"]').type('123456')
    cy.contains('Log in').click()
  })
})
