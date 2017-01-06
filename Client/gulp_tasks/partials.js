const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const angularTemplatecache = require('gulp-angular-templatecache');

const conf = require('../conf/gulp.conf');

gulp.task('partials', partials);

function partials() {
  return gulp.src(conf.path.src('**/*.html'))
    .pipe(htmlmin(conf.htmlmin))
    .pipe(angularTemplatecache('templateCacheHtml.js', {
      module: conf.ngModule,
      standalone: false,
        base: function(file) {
        return  file.path.replace(/^.*(\\|\/|\:)/, '');   
    },
    }))
    .pipe(gulp.dest(conf.path.tmp()));
}

		
			
