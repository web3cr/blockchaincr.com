// import libs
global.jQuery = global.$ = require('jquery')
require('bootstrap-sass')
require('particles.js')
require('./libs/jquery.unveil')
require('./libs/jquery.easing.1.3')
require('./libs/jquery.waypoints.min')
require('./libs/jquery.stellar.min')
require('./libs/jquery.countTo')
require('./libs/jquery.magnific-popup.min')

// import site scripts
require('./magnific-popup-options')
// require('./google_map')
require('./main')


particlesJS.load('particles', 'assets/particlesjs-config.json', function(err) {
  if(err){
    return console.log(err)
  }
  console.log('callback - particles.js config loaded');
});
