context('API Testing', () => {
    const baseUrl = "http://localhost:3000"

    beforeEach(() => {
        cy.visit('../../../html/lightbox.html')
        cy.fixture('cars').then((cars) => {
            cy.request('POST', '/reset', cars);
        })
           
    })

    it('should test cars properties - GET /cars', () => {
        // Alias
        cy.request('GET', `${baseUrl}/cars`).as('cars');
        cy.get(`@cars`).should((response) => {
            expect(response.status).to.eq(200);
            response.body.forEach(car => {
                expect(car).to.have.all.keys(
                'id', 'brand', 'model',
                'color', 'year'
                );
            });
        });
    });

    it('should add a car - POST /cars', () => {
        let car = {
        "brand": "Fiat",
        "model": "500",
        "color": "blue",
        "year": 1972
        }
        cy.request('POST', `${baseUrl}/cars`, car);
    });
    it('should add a car - POST /cars', () => {
        cy.fixture('car').then((car) => {
            cy.request('POST', `${baseUrl}/cars`, car);
        })
    })
}); 

   
   