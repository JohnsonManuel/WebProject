var gulp = require('gulp');
var server = require('browser-sync').create();

// reloading browsers
gulp.task("serve" ,(done)=>{
    server.init({
      server: {
        baseDir: './app/'
      }
    });
    done();
  });
gulp.task("reload" , function(done){
    server.reload();
    done();
})
gulp.task("watch", function(){
    gulp.watch("./app/*.html" , gulp.series("reload"));
})

  

// use default task to launch Browsersync and watch JS files
gulp.task('default', gulp.series("serve" ,"reload", "watch"));