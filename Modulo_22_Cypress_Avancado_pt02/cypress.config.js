const { defineConfig } = require("cypress");
require('dotenv').config()


module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
  },
  env: {
    // MY_ENV: "dev",
    // MY_ENV: process.env.MY_ENV,
    // ebacStoreVersion: "v1"
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report', // Onde os relatórios individuais serão salvos
    overwrite: false,               // NÃO sobrescrever relatórios existentes
    html: false,                    // NÃO gerar HTML para cada teste individual
    json: true
  }
}
);
