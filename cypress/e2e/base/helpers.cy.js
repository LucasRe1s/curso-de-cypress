/// <reference types="cypress" />

describe('Helpers...', () => {
    it('Wrap', () => {
        const obj = { nome: 'User', idade: 20 }
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //cy.get('#formNome').then($el => {
        //    $el.val('Teste')
        //    cy.wrap($el).type('Teste')
        //})

        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => {console.log('Encontrei o primeiro botão')})
        //promise.then((num) => {console.log(num)})
        cy.wrap(promise).then(ret => {console.log(ret)})
        cy.get('#buttonList').then(() => {console.log('Encontrei o segundo botão')})

        cy.wrap().then(num => {
            return 2
        }).should('be.equal', 2)
    })

    it('Its', () => {
        const obj = { nome: 'User', idade: 20 }
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('idade').should('be.equal', 20)

        const obj2 = { nome: 'User', idade: 20, endereco: { rua: 'dos bobos' } }
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobos')
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)
    })

    it.only('Invoke', () => {
        const getValue = () => 1
        const soma = (a, b) => a + b

        cy.wrap({ f1: getValue})
        .invoke('f1').should('be.equal', 1)

        cy.wrap({ f2: soma})
        .invoke('f2', 1, 2).should('be.equal', 3)

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Texto via invoke')
        cy.window().invoke('alert', 'Dá pra ver?')
        cy.get('#resultado')
            .invoke('html', '<input type="button" value="hacked!"/>')
    })
})