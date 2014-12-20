var loader = require('es6-module-loader').System;

// loader.trace = true;
// loader.execute = true;

loader.import('./gens').then(function(module) {
  module.main();
}).catch(function(err) {
  console.error(err.stack);
});
// .then(null, function(err) {
//   console.error(err);
// });