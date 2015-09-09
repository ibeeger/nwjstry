var NwBuilder = require('nw-builder');
var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('nw', function () {

    var nw = new NwBuilder({
        version: '0.11.0',
        files: './Resource/nwapp/**',
        macIcns: './icons/icon.icns',
        macPlist: {mac_bundle_id: 'myPkg'},
        platforms: ['win32', 'win64', 'osx32', 'osx64']
    });

    // Log stuff you want
    nw.on('log', function (msg) {
        gutil.log('nw-builder', msg);
    });

    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().catch(function (err) {
        gutil.log('nw-builder', err);
    });
});

gulp.task('makeico', function () {
    var nw = new NwBuilder({
        version: '0.11.0',
        files: './Resource/makeIco/**',
        macIcns: './Resource/makeIco/ico/ico.icns',
        macPlist: {mac_bundle_id: 'makeico'},
        platforms: ['win32', 'win64', 'osx32', 'osx64']
    });

    // Log stuff you want
    nw.on('log', function (msg) {
        gutil.log('nw-builder', msg);
    });

    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().catch(function (err) {
        gutil.log('nw-builder', err);
    });
});



gulp.task('picss', function () {
    var nw = new NwBuilder({
        version: '0.11.0',
        files: './Resource/merge/**',
        macIcns: './Resource/merge/ico.icns',
        macPlist: {mac_bundle_id: 'picss'},
        platforms: ['win32', 'win64', 'osx32', 'osx64']
    });

    // Log stuff you want
    nw.on('log', function (msg) {
        gutil.log('nw-builder', msg);
    });

    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().catch(function (err) {
        gutil.log('nw-builder', err);
    });
});

gulp.task('default', ['nw']);
gulp.task('ico', ['makeico']);
gulp.task('pcss', ['picss']);
