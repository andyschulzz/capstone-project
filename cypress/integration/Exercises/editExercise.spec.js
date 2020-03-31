describe('Edit exercise', () => {
  beforeEach(() => {
    cy.visit('/exercises')
    cy.contains('Test Curl').click()
  })

  it('edits an exercise', () => {
    cy.contains('Edit').click()
    cy.get('textarea[id="name"]')
      .type('{selectall}', { force: true })
      .type('Test', { force: true })
    cy.get('textarea[id="type"]')
      .type('{selectall}', { force: true })
      .type('Test', { force: true })
    cy.get('textarea[id="instructions"]')
      .type('{selectall}', { force: true })
      .type('Test', { force: true })
    cy.contains('Save').click()
    cy.get('textarea[id="name"]').should('have.value', 'Test')
    cy.get('textarea[id="type"]').should('have.value', 'Test')
    cy.get('textarea[id="instructions"]').should('have.value', 'Test')
    cy.contains('Edit').should('exist')
  })
})
