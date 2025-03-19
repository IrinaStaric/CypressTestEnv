const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      userEmail: process.env.USER_EMAIL,
      userPassword: process.env.USER_PASSWORD,
    },
    setupNodeEvents(on, config) {
      return config;
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







