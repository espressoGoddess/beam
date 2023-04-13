describe('Journal prompt spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/why-are-you-feeling-that-way')
  })

  it('Should display a heading that prompts the user to write a journal entry about why they are experiencing the feeling they selected', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should display a text area that allows the user to type their thoughts inside', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should update the text area value as user inputs characters', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should display a button that will bring the user from the journal prompt page to the activities page', () => {
    cy.visit('https://example.cypress.io')
  })
})