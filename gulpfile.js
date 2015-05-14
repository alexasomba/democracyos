var gulp = require('gulp');

var settings = {
  public: './public/',
  clientEntryPoint: './lib/boot/boot.js',
  verbose: false
};

require('./lib/build/js')(settings);
require('./lib/build/css')(settings);
require('./lib/build/public')(settings);
require('./lib/build/serve')(settings);
require('./lib/build/watch')(settings);
require('./lib/build/assets')(settings);
require('./lib/build/clean')(settings);

gulp
  .task('build', [/*'js:lint',*/ 'js:build', /*'css:lint',*/ 'css:build', 'assets'])
  .task('dist', [/*'js:lint',*/ 'js:dist', /*'css:lint',*/ 'css:dist', 'assets'])
  .task('default', ['build', 'serve'])
