describe('Search exercise', () => {
  beforeEach(() => {
    cy.visit('/exercises')
  })

  it('searches an exercise', () => {
    cy.get('input[name="search"]').type('Arnold Press')
    cy.contains('Bench Press').should('not.exist')
  })
})
