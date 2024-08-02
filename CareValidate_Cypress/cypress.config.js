const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// cypress.config.js
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://careglp-staging.carevalidate.com/',
    specPattern: 'cypress/e2e/**/*.spec.js',
    supportFile: 'cypress/support/index.js',
    defaultCommandTimeout: 10000, // Increase command timeout to 10 seconds
    pageLoadTimeout: 60000,      // Increase page load timeout to 60 seconds
  },
}





