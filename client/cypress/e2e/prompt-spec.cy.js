describe('Journal prompt spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('.uni-btn').click()
    cy.get('.feelings-container > :nth-child(4)').click()
  })

  it('Should display the header and the journal prompt page', () => {
    cy.get('.prompt-container').should('be.visible')
    cy.get('header')
  })

  it('Should display a form for the journal entry', () => {
    cy.get('form').should('be.visible')
  })

  it('Should display a heading that prompts the user to write a journal entry about why they are experiencing the feeling they selected', () => {
    cy.get('.prompt').should('be.visible').contains('Why are you feeling this way?')
  })

  it('Should display a text area that allows the user to type their thoughts inside and updates the element value based on user input', () => {
    cy.get('#journal-entry').should('be.visible')
    cy.get('#journal-entry').type('Im feeling anxious because I have a big project due this weekend.')
    cy.get('#journal-entry').should('have.value', 'Im feeling anxious because I have a big project due this weekend.')
  })

  it('Should display a button that will bring the user from the journal prompt page to the activities page', () => {
    cy.get('#journal-entry').type('Im feeling anxious because I have a big project due this weekend.')
    cy.get('.uni-btn').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:3000/what-should-you-do/Anxious')
  })
})