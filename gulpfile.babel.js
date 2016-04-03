import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';
import del from 'del';
import runSequence from 'run-sequence';

const plugins = gulpLoadPlugins();

const paths = {
    js: ['./**/*.js', '!dist/**', '!node_modules/**', '!client/**'],
    ignoreFiles: ['!webpack.production.config.js', '!package.json', '!.gitignore', '!gulpfile.babel.js'],
    nonJs: ['./package.json', './.gitignore'],
    public: ['./server/public/index.html', './server/public/bundle.js']
};


// Clean up dist directory
gulp.task('clean', () =>
    del(['dist/**', '!dist'])
);

// Set env variables
gulp.task('set-env', () => {
    plugins.env({
        vars: {
            NODE_ENV: 'test'
        }
    });
});


gulp.task('copy-public', () =>
    gulp.src(paths.public)
        .pipe(gulp.dest('dist/server/public'))
);


// Copy non-js files to dist
gulp.task('copy', ['copy-public'], () =>
    gulp.src(paths.nonJs)
        .pipe(plugins.newer('dist'))
        .pipe(gulp.dest('dist'))
);

// Compile ES6 to ES5 and copy to dist
gulp.task('babel', () =>
    gulp.src([...paths.js, ...paths.ignoreFiles], { base: '.' })
        .pipe(plugins.newer('dist'))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.babel())
        .pipe(plugins.sourcemaps.write('.', {
            includeContent: false,
            sourceRoot(file) {
                return path.relative(file.path, __dirname);
            }
        }))
        .pipe(gulp.dest('dist'))
);

// Start server with restart on file changes
gulp.task('nodemon', ['copy', 'babel'], () =>
    plugins.nodemon({
        script: path.join('dist/server', 'index.js'),
        ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
        tasks: ['copy', 'babel'],
        exec: "node --optimize_for_size --max_old_space_size=460 --gc_interval=100"
    })
);

// gulp serve for development
gulp.task('serve', ['clean'], () => runSequence('nodemon'));

// default task: clean dist, compile js files and copy non-js files.
gulp.task('default', ['clean'], () => {
    runSequence(
        ['copy', 'babel']
    );
});