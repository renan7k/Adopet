const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5v5tcj",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video:true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',  //Diretório onde vai salvar o relatório
      overwrite: false,  // não vai sobrescrever
      html: true,  // formato
      json: false, // formato
      timestamp: "mmddyyyy_HHMMss"
    }
  },
});
