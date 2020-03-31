describe('Add exercise', () => {
  beforeEach(() => {
    cy.visit('/exercises')
    cy.get('a[href="/exercises/add"]').click()
  })
  it('goes to the add page', () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.equal('/exercises/add')
    })
  })

  it('adds a new exercise', () => {
    cy.get('textarea[id="name"]').type('Test Curl', { force: true })
    cy.get('textarea[id="type"]').type('Test', { force: true })
    cy.get(
      'textarea[id="instructions"]'
    ).type('This is just a testing description.', { force: true })
    cy.contains('Save').click()
    cy.contains('Test Curl').should('exist')
  })
})
