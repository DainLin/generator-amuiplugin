'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var AMUIPluginGenerator = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();

    this.log(yosay('You\'re using the fantasti ' + chalk.red('AMUIPlugin') + ' generator.'));

    var prompts = [
      {
        name: 'pluginName',
        message: 'What plugin name do you want?'
      },
      {
        name: 'version',
        message: 'Plugin version?',
        default: '0.0.1'
      },
      {
        name: 'authorName',
        message: 'Author name?'
      },
      {
        name: 'authorEmail',
        message: 'Author email?'
      },
      {
        name: "description",
        message: "Plugin description?",
        default: '插件描述'
      }
    ];

    this.prompt(prompts, function(answers) {
      this.pluginName = answers.pluginName;
      this.version = answers.version;
      this.authorName = answers.authorName;
      this.authorEmail = answers.authorEmail;
      this.description = answers.description;
      done();
    }.bind(this));
  },

  app: function() {
    var pluginName = this.pluginName;

    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('eslintrc', '.eslintrc');
    this.copy('npmignore', '.npmignore');
    this.copy('LICENSE', 'LICENSE');
    this.copy('gulpfile.js', 'gulpfile.js');

    this.template('README.md');
    this.template('_package.json', 'package.json');

    this.template('lib/amazeui.plugin.js', 'lib/amazeui.' + pluginName + '.js');
    this.template('less/amazeui.plugin.less', 'less/amazeui.' + pluginName + '.less');

    this.template('docs/api.md');
    this.template('docs/demo.md');

    console.log('Directories initialization done!');
  },

  install: function() {
    this.npmInstall();
  }
});

module.exports = AMUIPluginGenerator;
