import "cypress-real-events/support";

const randomString = () => (Math.random() + 1).toString(36).substring(7);
const username1 = randomString();
const username2 = randomString();
const password = "password";
const chatName = randomString();
const message1 = randomString();
const message2 = randomString();

describe("Message Test", () => {
    const register = (username) => {
        cy.visit("/registro");
        cy.get('input[type="text"]').type(username);
        cy.get('input[type="password"]').type(password);
        cy.get("button").click();
        cy.wait(1000);
    }

    const login = (username) => {
        cy.visit("/inicio-sesion");
        cy.get('input[type="text"]').type(username);
        cy.get('input[type="password"]').type(password);
        cy.get("button").click();
        cy.wait(1000);
    }

    const joinConversation = () => {
        cy.contains("Unirse a una conversación").click();
        cy.get(".OBHhEY0HAflZPM42vlVM input").type(chatName);
        cy.get(".OBHhEY0HAflZPM42vlVM").submit();
        cy.contains("Cargando nueva conversación, por favor espera.");
        cy.wait(10000);
    }

    it("load", () => {
        register(username1);
        joinConversation();
        cy.get(".jvzJ1XaH1MHl4pACTrE2").contains(chatName);
    });

    it("publish message", () => {
        login(username1);
        joinConversation();
        cy.get(".m9cHbpz8D9teIpi_W7va input[type='text']").type(message1);
        cy.contains("Enviar").click();
        cy.get(".OfZ_3sDlsBOQaKVKh5xJ").children().should('have.length', 1);
        cy.get(".GXUD9aVbcORyqwM57X1n").contains(username1);
        cy.get(".GXUD9aVbcORyqwM57X1n").contains(message1);
    });

    it("see my message and partner message", () => {
        register(username2);
        joinConversation();
        cy.get(".OfZ_3sDlsBOQaKVKh5xJ").children().should('have.length', 1);
        cy.get(".GXUD9aVbcORyqwM57X1n").contains(username1);
        cy.get(".GXUD9aVbcORyqwM57X1n").contains(message1);
        cy.get(".m9cHbpz8D9teIpi_W7va input[type='text']").type(message2);
        cy.contains("Enviar").click();
        cy.wait(1000);
        cy.get(".OfZ_3sDlsBOQaKVKh5xJ").children().should('have.length', 2);
        cy.get(".GXUD9aVbcORyqwM57X1n").last().contains(username2);
        cy.get(".GXUD9aVbcORyqwM57X1n").last().contains(message2);
    });
    
    it("open emojis", () => {
        cy.get(".wcDaQ784LSsVfCK94Eks i").realHover();
        cy.get(".emoji-picker-react").should("exist");
    });

    it("write and see emoji", () => {
        const emoji = "😀";
        login(username1);
        joinConversation();
        cy.get(".m9cHbpz8D9teIpi_W7va input[type='text']").type(emoji);
        cy.get(".m9cHbpz8D9teIpi_W7va input[type='text']").should("have.value", emoji);
        cy.contains("Enviar").click();
        cy.wait(1000);
        cy.get(".OfZ_3sDlsBOQaKVKh5xJ").children().should('have.length', 3);
        cy.get(".GXUD9aVbcORyqwM57X1n").last().contains(emoji);
        login(username2);
        joinConversation();
        cy.get(".OfZ_3sDlsBOQaKVKh5xJ").children().should('have.length', 3);
        cy.get(".GXUD9aVbcORyqwM57X1n").last().contains(emoji);
    });
});