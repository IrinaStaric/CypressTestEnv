// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space/',
    env: {
      userEmail: 'testuser@example.com',
      userPassword: 'SecureP@ssw0rd123',
    },
    setupNodeEvents(on, config) {
    },
    defaultCommandTimeout: 10000, 
    requestTimeout: 15000,
    responseTimeout: 15000,
    pageLoadTimeout: 60000,
  },
});




