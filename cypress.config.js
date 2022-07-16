const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:3000',
    specPattern: "tests/**/*.test.{js,jsx,ts,tsx}"
  },
});
