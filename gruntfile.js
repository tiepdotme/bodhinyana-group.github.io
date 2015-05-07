module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'dev/assets/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/'
                }]
            }
        },



        clean: {
            images: ['assets'],
            scripts: ['scripts/compiled.js', 'scripts/dev-compiled.js']
        },



        concat:{

                options: {
                    //banner: "---\n---\n", uncomment if Liquid ever needed
                    separator: '\n',
                    stripBanners: true,
                },
                dist: {
                        src: ['scripts/**/*.js'],
                        dest: 'scripts/dev-compiled.js',
                },

        },



        uglify:{
            my_target:{
                files: {
                    'scripts/compiled.js': ['scripts/dev-compiled.js']
                }
            }
        }


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-contrib-clean');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('images', ['clean:images', 'imagemin']);
    grunt.registerTask('javascript', ['clean:scripts', 'concat', 'jshint', 'uglify']);
    grunt.registerTask('jsdev', ['clean:scripts', 'concat', 'jshint']);
};
