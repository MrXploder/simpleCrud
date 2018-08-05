module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    gitinfo: {},
    ngconstant: {
      options: {
        space: ' ',
        wrap: true,
        deps: ['ngRoute', 'ngStorage', 'ngResource', 'ngDialog', 'angular-local-resource', 'platanus.rut', 'angular-loading-bar', 'angularUtils.directives.dirPagination', 'ui.materialize', 'templates-main'],
        dest: "public/src/module/10index.js",
        name: 'angularApp'
      },
      dist: {
        constants: {
          'ENV': '<%= gitinfo.local.branch.current %>'
        }
      }
    },
    html2js: {
      options: {
        base: "",
        module: 'templates-main',
      },
      main: {
        src: ['public/src/**/*.html'],
        dest: 'public/src/vendor/49angular-templates.js'
      },
      dev: {
        src: ['server/dummy.html'],
        dest: 'public/src/vendor/49angular-templates.js'
      }
    },
    tags: {
      build: {
        options: {
          scriptTemplate: '<script src="{{ path }}?v=<%= gitinfo.local.branch.current.SHA %>"></script>',
          linkTemplate: '<link rel="stylesheet" href="{{ path }}?v=<%= gitinfo.local.branch.current.SHA %>"/>',
          openTag: '<!-- start template tags -->',
          closeTag: '<!-- end template tags -->'
        },
        src: [
        'public/css/*.css',
        'public/src/vendor/*.js',
        'public/src/module/*.js',
        'public/src/directive/**/*.js',
        'public/src/factory/**/*.js',
        'public/src/filter/**/*.js',
        'public/src/module/modal/**/*.js',
        'public/src/module/route/**/*.js',
        ],
        dest: 'public/index.html'
      }
    },
    watch: {
      scripts: {
        files: [
        'public/css/*.css',
        'public/src/vendor/*.js',
        'public/src/module/*.js',
        'public/src/directive/**/*.js',
        'public/src/factory/**/*.js',
        'public/src/filter/**/*.js',
        'public/src/module/modal/**/*.js',
        'public/src/module/route/**/*.js'
        ],
        tasks: ['tags'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
    },
    concat: {
      options: {
        separator: '\n',
      },
      js: {
        src: [
        'public/src/vendor/*.js',
        'public/src/module/*.js',
        'public/src/directive/**/*.js',
        'public/src/factory/**/*.js',
        'public/src/filter/**/*.js',
        'public/src/module/modal/**/*.js',
        'public/src/module/route/**/*.js'
        ],
        dest: 'dist/<%= gitinfo.local.branch.current.SHA %>.js',
      },
      css:{
        src: ['public/css/*.css'],
        dest: 'dist/<%= gitinfo.local.branch.current.SHA %>.css',
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= gitinfo.local.branch.current.SHA %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/<%= gitinfo.local.branch.current.SHA %>.min.css': ['public/css/*.css']
        }
      }
    },
    obfuscator: {
      options: {
      },
      task1: {
        options: {
        },
        files: {
          'dist/<%= gitinfo.local.branch.current.SHA %>.min.obs.js': ['dist/<%= gitinfo.local.branch.current.SHA %>.min.js']
        }
      }
    },
    clean: {
      options: {
        'no-write': false
      },
      src_folder: ['public/src/'],
      tmp_folder: ['tmp/'],
      css_folder: ['public/css/'],
      final_cleanup: ['dist/*.css', 'dist/*.js', '!dist/*.min.css', '!dist/*.min.obs.js'],
    }
  });

  grunt.loadNpmTasks('grunt-gitinfo');
  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.loadNpmTasks('grunt-script-link-tags');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-obfuscator');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['gitinfo', 'ngconstant', 'html2js:main', 'concat', 'uglify', 'cssmin', 'obfuscator', 'clean']);
  grunt.registerTask('dev', ['gitinfo', 'html2js:dev', 'ngconstant', 'tags']);
  grunt.registerTask('startwatch', ['watch']);
};