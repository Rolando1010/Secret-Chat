import { dark, light } from "../apps/web/src/styles/themes";

const hexToRgb = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const to = part => parseInt(part, 16);
    return result ?
        `rgb(${to(result[1])}, ${to(result[2])}, ${to(result[3])})`
    :
        null;
}

describe("Theme Test", () => {
    it("change theme", () => {
        cy.visit("/inicio-sesion");
        cy.get("body").should("have.css", "background-color", hexToRgb(dark.background));
        cy.get(".c1kgvJ6bi14vynbRSA8b").click();
        cy.get("body").should("have.css", "background-color", hexToRgb(light.background));
    });

    it("persist theme to page change", () => {
        cy.visit("/inicio-sesion");
        cy.get("body").should("have.css", "background-color", hexToRgb(dark.background));
        cy.get(".c1kgvJ6bi14vynbRSA8b").click();
        cy.get("body").should("have.css", "background-color", hexToRgb(light.background));
        cy.visit("/inicio-sesion");
        cy.get("body").should("have.css", "background-color", hexToRgb(light.background));
    });
});