const url = (path) => Cypress.config().baseUrl + path;
const username = (Math.random() + 1).toString(36).substring(7);
const password = "password";

describe("Secret Chat", () => {
    it("load", () => {
        cy.visit("/");
        cy.contains("Secret Chat");
    });

    it("server redirection", () => {
        cy.visit("/");
        cy.url().should("eq",  url("/inicio-sesion"));
    });

    it("client redirection", () => {
        cy.visit("/registro");
        cy.get('a[href="/"]').click();
        cy.url().should("eq", url("/inicio-sesion"));
    });

    it("going to register", () => {
        cy.visit("/");
        cy.get('a[href="/registro"]').click();
        cy.url().should("eq", url("/registro"));
    });

    it("signup with no credentials", () => {
        cy.visit("/registro");
        cy.get("button").click();
        cy.url().should("eq", url("/registro"));
        cy.contains("Ingresa un nombre de usuario");
    });

    it("signup without password", () => {
        cy.visit("/registro");
        cy.get('input[type="text"]').type("user test");
        cy.get("button").click();
        cy.url().should("eq", url("/registro"));
        cy.contains("Ingresa una contraseña");
    });

    it("register", () => {
        cy.visit("/registro");
        cy.get('input[type="text"]').type(username);
        cy.get('input[type="password"]').type(password);
        cy.get("button").click();
        cy.url().should("eq", url("/"));
        cy.contains(username);
    });

    it("login", () => {
        cy.visit("/inicio-sesion");
        cy.get('input[type="text"]').type(username);
        cy.get('input[type="password"]').type(password);
        cy.get("button").click();
        cy.url().should("eq", url("/"));
        cy.contains(username);
    });
});