const { defineConfig } = require('cypress');
require('dotenv').config(); // Load environment variables

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space/',
    env: {
      userEmail: process.env.CYPRESS_userEmail,
      userPassword: process.env.CYPRESS_userPassword,
    },
    setupNodeEvents(on, config) {
    },
    defaultCommandTimeout: 10000, 
    requestTimeout: 15000,
    responseTimeout: 15000,
    pageLoadTimeout: 60000,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  }
});






