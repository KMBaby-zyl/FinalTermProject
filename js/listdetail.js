// 所有模块都通过 define 来定义
define(function(require, exports, module) {

  // 通过 require 引入依赖
  var $ = require('jquery');
  $(".pricePic").live("click",function(){
  	if($(this).closest(".listItem").find("#canvasP")[0]){
  		$("#canvasP").remove();
  		return;
  	}

  	if($("#canvasP")[0]){
  		$("#canvasP").remove();
  	}
  	var canvas = '<canvas id="canvasP" height="450" width="600"></canvas>';
  	$(this).closest(".listItem").append($(canvas));
  	var lineChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [65,59,90,81,56,55,40]
				},
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [28,48,40,19,96,27,100]
				}
			]
			
		}

	var myLine = new Chart(document.getElementById("canvasP").getContext("2d")).Line(lineChartData);
  });
  // 通过 exports 对外提供接口
  // exports.doSomething = ...

  // 或者通过 module.exports 提供整个接口
  // module.exports = ...

});