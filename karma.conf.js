// Karma configuration
// Generated on Sat Jun 27 2020 15:20:19 GMT+0900 (Korean Standard Time)
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './src/js/index.js',
      './test/index.spec.js'
    ],
    autoWatch: true,
    browsers: ['Chrome'],
  });
}
