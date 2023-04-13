describe('Feelings page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/how-are-you-feeling')
  })

  it('Should display a heading prompting the user to select how they are currently feeling', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should display a list of emotions that can be selected by the user', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should bring the user from the feelings page to the journal prompt page when a feeling is selected', () => {
    cy.visit('https://example.cypress.io')
  })

})