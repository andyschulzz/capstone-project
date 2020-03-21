describe('Add exercise', () => {
  beforeEach(() => {
    cy.visit('/exercises')
  })

  it('goes to the add page', () => {
    cy.contains('Arnold Press').click()
    cy.get('textarea[id="name"]').should('have.value', 'Arnold Press')
    cy.get('textarea[id="type"]').should('have.value', 'Shoulder')
  })
})
