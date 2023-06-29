const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    PARAM:
      "?adultsv2=3&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&qp_prevScreen=HOMEPAGE&ref=home&rtn=1",
      DATA_INICIO: 240504,
      DATA_FIM: 240615,
    },
  e2e: {
    baseUrl: "https://www.skyscanner.com.br/transporte/passagens-aereas/poa/opo/",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
