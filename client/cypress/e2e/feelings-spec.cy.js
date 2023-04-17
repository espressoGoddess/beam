describe('Feelings page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/how-are-you-feeling')
  })

  it('Should display the header with the site logo', () => {
    cy.get('header').should('be.visible')
    cy.get('.logo').should('be.visible')
  })

  it('Should display the feelings page', () => {
    cy.get('.feelings-page').should('be.visible')
  })

  it('Should display a heading prompting the user to select how they are currently feeling', () => {
    cy.get('.feelings-header').should('be.visible').contains('How are you today?')
  })

  it('Should display a list of emotions that can be selected by the user', () => {

    const feelings = [
      'Amazed',
      'Angry',
      'Annoyed',
      'Anxious',
      'Ashamed',
      'Awful',
      'Bad',
      'Bitter',
      'Centered',
      'Confident',
      'Confused',
      'Content',
      'Depressed',
      'Disappointed',
      'Disgusted',
      'Distant',
      'Empty',
      'Encouraged',
      'Energetic',
      'Excited',
      'Fearful',
      'Free',
      'Frustrated',
      'Happy',
      'Hopeful',
      'Inquistive',
      'Insecure',
      'Inspired',
      'Judgmental',
      'Lonely',
      'Optimistic',
      'Overwhelmed',
      'Playful',
      'Powerful',
      'Proud',
      'Sad',
      'Stressed',
      'Surprised',
      'Thankful',
      'Tired',
      'Valued'
    ]

    cy.get('.feelings-container').should('be.visible')
    cy.get('.feelings-container').children().should('have.length', 41)

    feelings.forEach(feeling => {
      cy.get('.feelings-container').contains(feeling)
    })
  })

  it('Should bring the user from the feelings page to the journal prompt page when a feeling is selected', () => {
    cy.get('.feelings-container > :nth-child(1)').click()
    cy.get('.feelings-page').should('not.exist')
    cy.get('.prompt-container').should('be.visible')
    cy.get('header').should('be.visible')
    cy.url().should('eq', 'http://localhost:3000/why-are-you-feeling-that-way')
  })
})