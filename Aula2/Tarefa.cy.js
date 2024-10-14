describe("Teste login e delete", () => {
	it("teste apagar login", () => {
		cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
		cy.get('.btn-link').click()
		cy.get('#firstName').type("User1")
		cy.get('#Text1').type("User1")
		cy.get('#username').type("User1")
		cy.get('#password').type("securePassword")
		cy.get('.btn-primary').click()
		cy.get('.ng-binding').should("contain.text", "Registration successful")

		cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
		cy.get('#username').type("User1")
		cy.get('#password').type("securePassword")
		cy.get('.btn-primary').click()
		cy.get('h1.ng-binding').should("contains.text", "User1")

        cy.get('.ng-binding > a').click()
        cy.get('.btn').click()
        cy.get('h2').should("contain.text", "Login")

		cy.get('#username').type("User1")
		cy.get('#password').type("securePassword")
		cy.get('.btn-primary').click()
        cy.get('.ng-binding').should("contain.text", "password is incorrect")
	})
})
