module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            build: {
                files: {
                    'public/dist/css/app.css': ['src/css/bootstrap.min.css', 'src/css/app.css']
                }
            }
        },
        jshint: {
            all: ['src/js/app.js']
        },
        imagemin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    dest: 'public/dist/img',
                    src: ['*.{jpeg,jpg,gif,png,svg}']
                }]
            }
        },
        phpcs: {
            application: {
                src: ['app/**/*.php']
            },
            options: {
                bin: 'phpcs',
                standard: 'PSR12',
            }
        },
        sass: {
            build: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'src/css/app.css': 'src/scss/app.scss'
                }
            }
        },
        uglify: {
            options: {
                // maintain framework name
                // mangle: false,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'public/dist/js/app.js': ['src/js/jquery-3.3.1.js', 'src/js/bootstrap.min.js', 'src/js/app.js']
                },
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['uglify'],
                // tasks: ['jshint', 'uglify],
                options: {
                    spawn: false,
                },
            },
            styles: {
                files: ['src/**/*.scss'],
                tasks: ['sass', 'cssmin', 'imagemin'],
                options: {
                    spawn: false,
                },
            },
        }
    });

    // Load the plugin that provides the all task.
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['phpcs', 'sass', 'cssmin', 'imagemin', 'jshint', 'uglify']);
}