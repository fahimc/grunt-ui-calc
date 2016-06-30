/*
 * grunt-ui-calc
 * https://github.com/fahim/grunt-ui-calc
 *
 * Copyright (c) 2016 Fahim Chowdhury
 * Licensed under the MIT license.
 */

'use strict';
var replace = require('replace-in-file');
var math = require('mathjs');
module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var UICalc = {
    PREFIX: '-ui-calc',
    onFile: function(filepath) {
      if (!grunt.file.exists(filepath)) {
        return false;
      }
      this.checkContent(filepath);
    },
    checkContent: function (filepath) {
      var content = grunt.file.read(filepath);
     // this.replaceContent(filepath, content);
      var newContent = content.replace(/-ui-calc\((.*?)\)-/ig, this.replaceItem);
      if(newContent !== content){
        grunt.file.write(filepath,newContent);
      }
    },
    replaceItem: function (match,p1) {
      return math.eval(p1);
    }
  };

  grunt.registerMultiTask('ui-calc', 'Does math calculations like calc in css', function() {
    this.filesSrc.forEach(function(filepath) {
      UICalc.onFile(filepath);
    });
  });

};
