
require('app-module-path').addPath(__dirname);
require('app-module-path').addPath(__dirname + '/app_modules');

var gulp  = require('gulp')
var babel = require('gulp-babel')
var file  = require('gulp-file')

var packageJSON = require('./package')

function getQuery(){
  var date    = new Date()
  var version = packageJSON.version
  var query   = version + '__'

  return query + [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  ].join('-')
  + '_' +
  [
    date.getHours(),
    date.getMinutes(),
    date.getMilliseconds(),
  ].join(':')
}


gulp.task('build-html', function(){

  require('babel-register')

  var IndexPage = require('./build/IndexPage')
  var query = getQuery();

  var indexStr = IndexPage.renderToStaticMarkup({
    query: query
  })

  file('index.html', indexStr, {src: true})
    .pipe(gulp.dest('dist'))
})

gulp.task('copy-react', function(){
  gulp.src('./node_modules/react/dist/react.min.js')
     .pipe(gulp.dest('./dist'))
  gulp.src('./node_modules/react-dom/dist/react-dom.min.js')
     .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['build-html', 'copy-react'])
