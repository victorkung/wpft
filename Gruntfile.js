module.exports = function (grunt) {

    // Project configuration Start

    'use strict';

    grunt.initConfig({
        // Configs
        /*
        defaults: {
            src: 'src',
            dist: 'dist'
        },
        */
        less: {
            development: {
                files: {
                    'styles/main.css': 'styles/less/main.less'
                }
            }
        },
        concat: {
            package: {
                src: [
                    // Dependencies
                    'scripts/plugins/jquery.min.js',
                    'scripts/plugins/jquery.easing.1.3.min.js',
                    'scripts/plugins/jquery.cycle2.min.js',
                    'scripts/plugins/jquery.cycle2.swipe.min.js',
                    'scripts/plugins/jquery.validationEngine-en.js',
                    'scripts/plugins/jquery.validationEngine.js',
                    'scripts/plugins/jquery.waypoints.min.js',
                    'scripts/browser.js',
                    'scripts/plugins/jPushMenu.js',
                    'scripts/plugins/jquery.uniform.min.js',
                    'scripts/plugins/video.min.js',
                    'scripts/plugins/youtube.js',
                    'scripts/plugins/skrollr.min.js',
                    'scripts/plugins/jquery.vide.min.js',
                    'scripts/plugins/wow.min.js',
                    'scripts/utilities.js',
                    'scripts/querystring.js',
                    'scripts/alert.js',
                    'scripts/uniform.js',
                    'scripts/modal-window.js',
                    'scripts/main.js',
                    'scripts/locale.js'
                ],

                dest: 'scripts/package.js'
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'styles/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'styles/',
                    ext: '.min.css'
                }]
            }
        },

        //Minify javascript
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'scripts',
                    ext: '.min.js',
                    src: ['*.js', '!*.min.js'],
                    dest: 'scripts'
                }]
            }
        }
    });
    // Project configuration End

    // Load the plugin that provides the task.
    //grunt.loadNpmTasks('node-spritesheet');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', [
        'less',
        'concat',
        'cssmin',
        //'copy',
        'uglify'
    ]);
};
