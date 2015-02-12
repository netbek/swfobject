/**
 * swfobject
 *
 * @author Hein Bekker <hein@netbek.co.za>
 * @copyright (c) 2015 Hein Bekker
 * @license http://www.gnu.org/licenses/agpl-3.0.txt AGPLv3
 */

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: ['/*',
				' * <%= pkg.name %>',
				' * <%= pkg.homepage %>',
				' *',
				' * @author <%= pkg.author.name %>',
				' * @copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>',
				' * @license <%= pkg.license.url %> <%= pkg.license.type %>',
				' */\n'].join('\n')
		},
		jshint: {
			all: ['Gruntfile.js', 'tasks/**/*.js', 'tests/tests/*.js']
		},
		concat: {
			dist: {
				src: ['swfobject/src/swfobject.js'],
				dest: 'swfobject/swfobject.js'
			}
		},
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				src: ['swfobject/swfobject.js'],
				dest: 'swfobject/swfobject.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', [
		'jshint',
		'concat',
		'uglify'
	]);

};