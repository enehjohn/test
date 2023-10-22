import 'cypress-file-upload'
describe("invoice generator", ()=> {
    it("Parse csv file", ()=> {
        Cypress.on('uncaught:exception', (err, runnable) => {

            // Log the error to the console for easy debugging      
            console.error(err);
            // returning false here prevents Cypress from failing the test      
            return false;
        });


        cy.visit('https://csvdemomockappp.bundlewallet.com/')
        cy.get('#statement-file').attachFile('test.csv')
        cy.get('.btn').click()
        cy.get(':nth-child(1) > :nth-child(2) > .ng-binding').should('be.visible')
        cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-binding').should('be.visible')

        cy.get('thead > tr > :nth-child(2)').should('be.visible')
        cy.wait(5000)
        cy.get(':nth-child(1) > :nth-child(2) > .ng-binding').click()

    })
})