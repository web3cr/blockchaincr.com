const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const $ = gulpLoadPlugins()
const fs = require('fs')

const imageminOpts = [
  $.imagemin.gifsicle({interlaced: true}),
  $.imagemin.jpegtran({progressive: true}),
  $.imagemin.optipng({optimizationLevel: 5}),
  $.imagemin.svgo({plugins: [{removeViewBox: true}]})
]

gulp.task('optimize-images', () => {
  return gulp.src('static-src/img/**/*')
    .pipe($.cache($.imagemin(imageminOpts)))
    .pipe(gulp.dest('static/img'))
})

gulp.task('deploy', () => {
  fs.writeFile('./public/CNAME', 'blockchaincr.com', function (err) {
    if (err) return console.log(err)
  })
  return gulp.src('./public/**/*')
    .pipe($.ghPages({branch: 'master'}))
})

gulp.task('clear-cache', () => $.cache.clearAll())
