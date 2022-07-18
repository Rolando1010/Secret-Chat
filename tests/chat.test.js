const url = (path) => Cypress.config().baseUrl + path;
const randomString = () => (Math.random() + 1).toString(36).substring(7);
const username1 = randomString();
const username2 = randomString();
const password = "password";
const chatName1 = randomString();
const chatName2 = randomString();

describe("Chat Test", () => {
    const register = (username) => {
        cy.visit("/registro");
        cy.get('input[type="text"]').type(username);
        cy.get('input[type="password"]').type(password);
        cy.get("button").click();
    }

    const login = () => {
        cy.visit("/inicio-sesion");
        cy.get('input[type="text"]').type(username1);
        cy.get('input[type="password"]').type(password);
        cy.get("button").click();
    }

    it("load", () => {
        register(username1);
        cy.contains("Únete a una conversación");
    });

    it("creating new chat", () => {
        login();
        cy.wait(1000);
        cy.contains("Unirse a una conversación").click();
        cy.get(".OBHhEY0HAflZPM42vlVM input").type(chatName1);
        cy.get(".OBHhEY0HAflZPM42vlVM").submit();
        cy.contains("Cargando nueva conversación, por favor espera.");
        cy.wait(10000);
        cy.url().should("eq", url(`/conversaciones/${chatName1}`));
        cy.get(".f2q8hcWPxWZdiE1uTUeg").contains(chatName1);
        cy.get(".f2q8hcWPxWZdiE1uTUeg").contains("Creado por " + username1);
        cy.get(".jvzJ1XaH1MHl4pACTrE2").contains(chatName1);
        cy.get(".jvzJ1XaH1MHl4pACTrE2 button").click();
        cy.get(".vFmGmCf370skje_zcUcv").contains(username1);
    });

    it("joining existing chat by button", () => {
        login();
        cy.get(`a[href="/conversaciones/${chatName1}"]`).click();
        cy.wait(10000);
        cy.url().should("eq", url(`/conversaciones/${chatName1}`));
        cy.get(".jvzJ1XaH1MHl4pACTrE2").contains(chatName1);
        cy.get(".jvzJ1XaH1MHl4pACTrE2 button").click();
        cy.get(".vFmGmCf370skje_zcUcv").contains(username1);
    });

    it("joining existing conversation by url", () => {
        login();
        cy.wait(1000);
        cy.visit(`/conversaciones/${chatName1}`);
        cy.get(".jvzJ1XaH1MHl4pACTrE2").contains(chatName1);
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
        cy.get(".OBHhEY0HAflZPM42vlVM input").type(chatName1);
        cy.get(".OBHhEY0HAflZPM42vlVM").submit();
        cy.contains("Cargando nueva conversación, por favor espera.");
        cy.wait(10000);
        cy.url().should("eq", url(`/conversaciones/${chatName1}`));
        cy.get(".jvzJ1XaH1MHl4pACTrE2").contains(chatName1);
        cy.get(".f2q8hcWPxWZdiE1uTUeg").contains(chatName1).should("have.length", 1);
    });

    // Crear nuevo usuario y unirlo y comprobar si todo está bien como el chat con nombre y creador y todos los participantes
    it("join other user to the conversation", () => {
        register(username2);
        cy.wait(1000);
        cy.contains("Unirse a una conversación").click();
        cy.get(".OBHhEY0HAflZPM42vlVM input").type(chatName1);
        cy.get(".OBHhEY0HAflZPM42vlVM").submit();
        cy.contains("Cargando nueva conversación, por favor espera.");
        cy.wait(10000);
        cy.url().should("eq", url(`/conversaciones/${chatName1}`));
        cy.get(".f2q8hcWPxWZdiE1uTUeg").contains(chatName1);
        cy.get(".f2q8hcWPxWZdiE1uTUeg").contains("Creado por " + username1);
        cy.get(".jvzJ1XaH1MHl4pACTrE2").contains(chatName1);
        cy.wait(1000);
        cy.get(".jvzJ1XaH1MHl4pACTrE2 button").click();
        cy.get(".vFmGmCf370skje_zcUcv").contains(username2);
    });

    it("exists other conversation joined", () => {
        login();
        cy.wait(1000);
        cy.contains("Unirse a una conversación").click();
        cy.get(".OBHhEY0HAflZPM42vlVM input").type(chatName2);
        cy.get(".OBHhEY0HAflZPM42vlVM").submit();
        cy.wait(10000);
        cy.get(".f2q8hcWPxWZdiE1uTUeg").children().should('have.length', 2);
    });

    it("search chat", () => {
        login();
        cy.wait(1000);
        cy.get("input[placeholder='Buscar']").type(chatName2);
        cy.get(".f2q8hcWPxWZdiE1uTUeg").children().should('have.length', 1);
        cy.get(".f2q8hcWPxWZdiE1uTUeg").contains(chatName1).should("not.exist");
    });
});