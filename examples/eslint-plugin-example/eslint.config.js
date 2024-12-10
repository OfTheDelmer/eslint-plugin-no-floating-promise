   // eslint.config.js
   const noFloatingPromise = require('eslint-plugin-no-floating-promise');

   module.exports = [
     {
       plugins: {
         'no-floating-promise': noFloatingPromise
       },
       rules: {
         'no-floating-promise/no-floating-promise': 'error'
       }
     }
   ];