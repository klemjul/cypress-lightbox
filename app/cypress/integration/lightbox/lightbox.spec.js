describe('cesar', () => {
    const lightBoxCardImg = "lightbox-card-image"

    const lightBoxPopUp = 'lightbox-popup'
    const lightBoxPopUpCross = 'lightbox-popup-close'

    const lightBox = 'lightbox'
    const lightBoxLikeSvg = 'lightbox-like'
    const lightBoxLikedSvg = 'lightbox-liked'
    const lightBoxLikeCountText = 'lightbox-like-count'
    
    const lightBoxCommentInput = 'lightbox-add-comment-input'
    const lightBoxCommentAdd = 'lightbox-submit-comment'
    const lightBoxComments = 'lightbox-comment'
    const lightBoxToggleCommentVisibility = "lightbox-toggle-comment-visibility"
    beforeEach(() => {
        cy.visit('../../../html/lightbox.html')
    })

    it('test lightbox.html open', () => {
        cy.dataCy(lightBoxCardImg)
            .click()

        cy.dataCy(lightBoxPopUp)
            .should('not.have.css', 'display', 'none')

        cy.dataCy(lightBoxPopUpCross).click()
            
        cy.dataCy(lightBoxPopUp)
            .should('have.css', 'display', 'none')
    })

    it('test lightbox.html open and close', () => {
        cy.dataCy(lightBoxCardImg)
            .click()

        cy.dataCy(lightBoxPopUp)
            .should('not.have.css', 'display', 'none')

        cy.dataCy(lightBoxPopUpCross).click()
            
        cy.dataCy(lightBoxPopUp)
            .should('have.css', 'display', 'none')
    })

    it('test lightbox.html open and like', () => {
        cy.dataCy(lightBoxCardImg)
            .click()

        cy.dataCy(lightBox).scrollTo('bottom')

        cy.dataCy(lightBoxLikeSvg)
            .click()
            .should('have.css', 'display', 'none')

        cy.dataCy(lightBoxLikedSvg).should('not.have.css', 'display', 'none')
        cy.dataCy(lightBoxLikeCountText).should('have.text', 1)

    })

    it('test lightbox.html open, like and dislike', () => {
        cy.dataCy(lightBoxCardImg)
            .click()

        cy.dataCy(lightBox).scrollTo('bottom')

        cy.dataCy(lightBoxLikeSvg)
            .click()
            .should('have.css', 'display', 'none')

        cy.dataCy(lightBoxLikedSvg).click()

        cy.dataCy(lightBoxLikedSvg).should('have.css', 'display', 'none')
        cy.dataCy(lightBoxLikeSvg).should('not.have.css', 'display', 'none')
        cy.dataCy(lightBoxLikeCountText).should('have.text', 0)

    })

    it('test lightbox.html open, add comment', () => {
        cy.dataCy(lightBoxCardImg)
            .click()

        cy.dataCy(lightBox).scrollTo('bottom')

        cy.dataCy(lightBoxCommentInput).type("Awesome!")
        cy.dataCy(lightBoxCommentAdd).click()

        cy.dataCy(`${lightBoxComments}-0`).should("exist")
    })

    it('test lightbox.html open, add empty comment', () => {
        cy.dataCy(lightBoxCardImg)
            .click()

        cy.dataCy(lightBox).scrollTo('bottom')

        cy.dataCy(lightBoxCommentAdd).should('have.attr', 'disabled')

    })

    it('test lightbox.html open, add comment and hide him', () => {
        cy.dataCy(lightBoxCardImg)
            .click()

        cy.dataCy(lightBox).scrollTo('bottom')

        cy.dataCy(lightBoxCommentInput).type("Awesome!")
        cy.dataCy(lightBoxCommentAdd).click()


        cy.dataCy(lightBoxToggleCommentVisibility).click()
        cy.dataCy(`${lightBoxComments}-0`).should("not.be.visible")

    })

    


}) 