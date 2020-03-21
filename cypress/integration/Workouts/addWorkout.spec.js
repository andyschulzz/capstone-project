describe('Add workout', () => {
  beforeEach(() => {
    cy.visit('/workouts')
    cy.get('a[href="/workouts/add"]').click()
  })

  it('goes to the add page', () => {
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/workouts/add')
    })
  })

  it('adds a new workout', () => {
    cy.get('textarea[id="name"]').type('Test Workout')
    cy.contains('Add Exercises').click()
    cy.contains('Arnold Press').click({ force: true })
    cy.contains('Bench Press').click({ force: true })
    cy.contains('Next').click()
    cy.get('input[name="sets[0]"]').type('5')
    cy.get('input[name="reps[0]"]').type('5')
    cy.get('input[name="weight[0]"]').type('50')
    cy.get('input[name="sets[1]"]').type('10')
    cy.get('input[name="reps[1]"]').type('8')
    cy.get('input[name="weight[1]"]').type('90')
    cy.contains('Save').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/workouts')
    })
  })
})
