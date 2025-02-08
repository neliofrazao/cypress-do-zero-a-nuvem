describe('Central de Atendimento ao Cliente TAT', () => {
  const longText = Cypress._.repeat('abcdefghij', 10)
  beforeEach(() => cy.visit('./src/index.html'))
  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário.', ()=> {
    cy.get('#firstName').type('Fulano')
    cy.get('#lastName').type('de Tal')
    cy.get('#email').type('fulando@email.com')
    cy.get('#open-text-area').type(longText, {delay: 0})
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })

  it.only('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Fulano')
    cy.get('#lastName').type('de Tal')
    cy.get('#email').type('fulando@email,com')
    cy.get('#open-text-area').type(longText, {delay: 0})
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })
})