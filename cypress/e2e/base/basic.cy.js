/// <reference types="cypress" />

describe('Cypress basic', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        cy.title().should('be.equal', 'Campo de Treinamento')
        
        cy.title()
        .should('contain', 'Campo de Treinamento')
        .and('contain', 'Campo')

        let syncTitle
        cy.title().then(title => {
            console.log(title)

            cy.get('#formNome').type(title)
            syncTitle = title
        })

        cy.get('[data-cy=dataSobrenome]').then($el => {
            $el.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle)
        })
    })
    
    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')
        
        
        
        /*
         Pause -> Para a execução até voce mandar parar  executar passo a passo.
         sintax -> cy.pause()
         Debug -> Efetivo para pegar mais detalhes de um determinado ponto
         sintax -> cy.title().should('be.equal', 'Campo de Treinamento').debug() ou cy.title().debug().should('be.equal', 'Campo de Treinamento')
        */
        })
})