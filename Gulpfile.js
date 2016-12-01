var NwBuilder = require('nw-builder');
var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('nw', function() {
    var nw = new NwBuilder({
        version: '0.11.0',
        files: './Resource/nwapp/**',
        macIcns: './icons/icon.icns',
        macPlist: {
            mac_bundle_id: 'myPkg'
        },
        platforms: ['win32', 'win64', 'osx32', 'osx64']
    });

    // Log stuff you want
    nw.on('log', function(msg) {
        gutil.log('nw-builder', msg);
    });

    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().catch(function(err) {
        gutil.log('nw-builder', err);
    });
});


gulp.task('makeico', function() {
    var nw = new NwBuilder({
        version: '0.11.0',
        files: './Resource/makeIco/**',
        macIcns: './Resource/makeIco/ico/ico.icns',
        macPlist: {
            mac_bundle_id: 'makeico'
        },
        platforms: ['win32', 'win64', 'osx32', 'osx64']
    });

    // Log stuff you want
    nw.on('log', function(msg) {
        gutil.log('nw-builder', msg);
    });

    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().catch(function(err) {
        gutil.log('nw-builder', err);
    });
});


gulp.task('readQuestion', function() {
    var nw = new NwBuilder({
        version: '0.14.6',
        files: './Resource/readQuestion/**',
        macIcns: './Resource/readQuestion/ico.icns',
        macPlist: {
            mac_bundle_id: 'readQuestion'
        },
        platforms: ['osx64']
            // platforms: ['win32', 'win64', 'osx32', 'osx64']
    });

    // Log stuff you want
    nw.on('log', function(msg) {
        gutil.log('nw-builder', msg);
    });

    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().catch(function(err) {
        gutil.log('nw-builder', err);
    });
});

gulp.task('picss', function() {
    var nw = new NwBuilder({
        version: '0.11.0',
        files: './Resource/merge/**',
        macIcns: './Resource/merge/ico.icns',
        macPlist: {
            mac_bundle_id: 'picss'
        },
        platforms: ['win32', 'win64', 'osx32', 'osx64']
    });

    // Log stuff you want
    nw.on('log', function(msg) {
        gutil.log('nw-builder', msg);
    });

    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().catch(function(err) {
        gutil.log('nw-builder', err);
    });
});

gulp.task('talks', function() {
    var nw = new NwBuilder({
        version: '0.11.0',
        files: './Resource/talk/**',
        macIcns: './Resource/talk/ico.icns',
        // winIco: './Resource/talk/ico.icns',
        macPlist: {
            mac_bundle_id: 'talks'
        },
        platforms: ['win32', 'win64', 'osx32', 'osx64']
        // platforms:["osx64"]
    });

    // Log stuff you want
    nw.on('log', function(msg) {
        gutil.log('nw-builder', msg);
    });

    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().catch(function(err) {
        gutil.log('nw-builder', err);
    });
});

gulp.task('ueditor', function() {
    var nw = new NwBuilder({
        version: '0.18.8',
        files: './Resource/ueditor/**',
        macIcns: './Resource/ueditor/ico.icns',
        winIco: './Resource/ueditor/ico.icns',
        macPlist: {
            mac_bundle_id: 'ueditor'
        },
        platforms: ['win64',  'osx64']
        // platforms:["osx64"]
    });

    // Log stuff you want
    nw.on('log', function(msg) {
        gutil.log('nw-builder', msg);
    });

    // Build returns a promise, return it so the task isn't called in parallel
    return nw.build().catch(function(err) {
        gutil.log('nw-builder', err);
    });
});

gulp.task('default', ['nw']);
gulp.task('ico', ['makeico']);
gulp.task('write', ['ueditor']);
// gulp.task('talk', ['talks']);

gulp.task('read', ['readQuestion']);