import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/**/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:3000"
  }
});
