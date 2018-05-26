var gulp = require("gulp");
var sass = require("gulp-sass");
var connect = require("gulp-connect");
/*gulp.task("hello",function(){
	console.log("hello world");
})*/
//gulp.task("default",["hello"]);
gulp.task("html",function(){
	gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})
gulp.task("sass",function(){
	gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("dist/css")).pipe(connect.reload());
})
gulp.task("script",function(){
	gulp.src("js/*.js").pipe(gulp.dest("dist/js")).pipe(connect.reload());
})
gulp.task("image",function(){
	gulp.src("img/*.{jpg,jpeg}").pipe(gulp.dest("dist/img")).pipe(connect.reload());
})
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true
		});
		gulp.watch("*.html",["html"]);
		gulp.watch("sass/*.scss",["sass"]);
		gulp.watch("js/*.js",["script"]);
		gulp.watch("img/*.{jpg,jpeg}",["image"])
})
/*gulp.task("watch",function(){
	
})*/
gulp.task("default",["server"]);
