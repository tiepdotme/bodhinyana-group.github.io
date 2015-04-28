module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '_build/assets/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '/assets/'
                }]
            }
        }

        autoprefixer: {
            options: {
                broswers: ['>1% in UK'];
            },
            your_target: {
      // Target-specific file lists and/or options go here.
            },
        },


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
     grunt.loadNpmTasks('grunt-contrib-imagemin');
     grunt.loadNpmTasks('grunt-contrib-watch grunt-autoprefixer');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['imagemin', 'auto-prefixer']);

};
