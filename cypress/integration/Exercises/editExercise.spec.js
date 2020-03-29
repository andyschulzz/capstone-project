describe('Edit exercise', () => {
  beforeEach(() => {
    cy.visit('/exercises')
    cy.contains('Test Curl').click()
  })
  it('goes to the edit page', () => {
    cy.get('a[href="/exercises/edit"]').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/exercises/edit')
    })
  })

  it('edits an exercise', () => {
    cy.get('a[href="/exercises/edit"]').click()
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
