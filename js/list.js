// 所有模块都通过 define 来定义
define(function(require, exports, module) {

  // 通过 require 引入依赖
  var $ = require('jquery');
  var jqPage = require('jqPage');

  $('.pagination').jqPagination({
      paged: function(page) {
          // do something with the page variable
      }
  });
  // 通过 exports 对外提供接口
  // exports.doSomething = ...

  // 或者通过 module.exports 提供整个接口
  // module.exports = ...

});