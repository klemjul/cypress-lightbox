describe('cesar', () => {
    const cypherKeyData = '[data-cy=cypher-key]'
    const cypherTextData = '[data-cy=cypher-text]'
    const cypherBtnData = '[data-cy=cypher-btn]'
    const cypherResData = '[data-cy=cypher-result]'
    beforeEach(() => {
        cy.visit('../../../html/cesar2.html')
    })

    it('test cesar2.html simple', () => {
        cy.get(cypherKeyData).type("3").should("have.value","3")
        cy.get(cypherTextData).type("abc").should("have.value", "abc")
        cy.get(cypherBtnData).click()
        cy.get(cypherResData).should("have.text", "def")
    })

    it('test cesar2.html CAPS NO CAPS', () => {
        cy.get(cypherKeyData).type("6").should("have.value","6")
        cy.get(cypherTextData).type("BoNjOur").should("have.value", "BoNjOur")
        cy.get(cypherBtnData).click()
        cy.get(cypherResData).should("have.text", "HuTpUax")
    })

    
    it('test cesar2.html overlap alphabet', () => {
        cy.get(cypherKeyData).type("29").should("have.value","29")
        cy.get(cypherTextData).type("abc").should("have.value", "abc")
        cy.get(cypherBtnData).click()
        cy.get(cypherResData).should("have.text", "def")
    })

}) 