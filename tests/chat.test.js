const url = (path) => Cypress.config().baseUrl + path;
const randomString = () => (Math.random() + 1).toString(36).substring(7);
const username = randomString();
const password = "password";
const chatName = randomString();

describe("Chat Test", () => {
    it("load", () => {
        cy.visit("/registro");
        cy.get('input[type="text"]').type(username);
        cy.get('input[type="password"]').type(password);
        cy.get("button").click();
        cy.contains("Únete a una conversación");
    });

    const login = () => {
        cy.visit("/inicio-sesion");
        cy.get('input[type="text"]').type(username);
        cy.get('input[type="password"]').type(password);
        cy.get("button").click();
    }

    it("creating new chat", () => {
        login();
        cy.wait(1000);
        cy.contains("Unirse a una conversación").click();
        cy.get(".OBHhEY0HAflZPM42vlVM input").type(chatName);
        cy.get(".OBHhEY0HAflZPM42vlVM").submit();
        cy.contains("Cargando nueva conversación, por favor espera.");
        cy.wait(10000);
        cy.url().should("eq", url(`/conversaciones/${chatName}`));
        cy.get(".f2q8hcWPxWZdiE1uTUeg").contains(chatName);
        cy.get(".f2q8hcWPxWZdiE1uTUeg").contains("Creado por " + username);
        cy.get(".jvzJ1XaH1MHl4pACTrE2").contains(chatName);
        cy.get(".jvzJ1XaH1MHl4pACTrE2 button").click();
        cy.get(".vFmGmCf370skje_zcUcv").contains(username);
    });

    it("joining existing chat by button", () => {
        login();
        cy.get(`a[href="/conversaciones/${chatName}"]`).click();
        cy.wait(10000);
        cy.url().should("eq", url(`/conversaciones/${chatName}`));
        cy.get(".jvzJ1XaH1MHl4pACTrE2").contains(chatName);
        cy.get(".jvzJ1XaH1MHl4pACTrE2 button").click();
        cy.get(".vFmGmCf370skje_zcUcv").contains(username);
    });

    it("joining existing conversation by url", () => {
        login();
        cy.wait(1000);
        cy.visit(`/conversaciones/${chatName}`);
        cy.get(".jvzJ1XaH1MHl4pACTrE2").contains(chatName);
    });

    it("get into not joined conversation by url", () => {
        login();
        cy.wait(1000);
        cy.visit(`/conversaciones/${randomString()}`);
        cy.url().should("eq", url("/"));
    });

    it("joining to existing conversation by form", () => {
        login();
        cy.wait(1000);
        cy.contains("Unirse a una conversación").click();
        cy.get(".OBHhEY0HAflZPM42vlVM input").type(chatName);
        cy.get(".OBHhEY0HAflZPM42vlVM").submit();
        cy.contains("Cargando nueva conversación, por favor espera.");
        cy.wait(10000);
        cy.url().should("eq", url(`/conversaciones/${chatName}`));
        cy.get(".jvzJ1XaH1MHl4pACTrE2").contains(chatName);
    });

    // Crear nuevo usuario y unirlo y comprobar si todo está bien como el chat con nombre y creador y todos los participantes
});