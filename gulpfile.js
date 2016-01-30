/** Dependencies */
var gulp = require('gulp');

/** Set base paths and paths */
var base = {
    app: 'app/',
    build: 'build/'
};

var paths = {
    css: {
        app: base.app + 'scss/',
        build: base.app + 'css/'
    },
    js: {
        app: base.app + 'js/',
        build: base.app + 'js/'
    }
};

/** Tasks */
