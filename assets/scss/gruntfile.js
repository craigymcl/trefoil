module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'../css/style.css': 'screen.scss'
				}
			}
		},
		autoprefixer: {
			dist: {
				files: {
					'../css/style.css': '../css/style.css'
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.css', '!*.min.css'],
					dest: '../css',
					ext: '.min.css'
				}]
			}
		},
		
		imagemin: {
			png: {
				options: {
					optimizationLevel: 7
				},
				files: [{
					// Set to true to enable the following options…
					expand: true,
					// cwd is 'current working directory'
					cwd: '../images/',
					src: ['**/*.png'],
					// Could also match cwd line above. i.e. project-directory/img/
					dest: '../images/compressed/',
					ext: '.png'
				}]
			},
			jpg: {
				options: {
					progressive: true
				},
				files: [{
					// Set to true to enable the following options…
					expand: true,
					// cwd is 'current working directory'
					cwd: '../images/',
					src: ['**/*.jpg'],
					// Could also match cwd. i.e. project-directory/img/
					dest: '../images/compressed/',
					ext: '.jpg'
				}]
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'autoprefixer', 'cssmin', 'imagemin']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('imageminn', ['imagemin']);
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
	
}