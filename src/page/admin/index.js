/*
* @Author: Administrator
* @Date:   2017-11-10 15:15:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-17 10:48:07
*/
"use strict";

require('../common/layout.css');
require('./index.css');
require('../common/footer/index.js');
require('../common/headerhijiko/index.js');
var _mm=require('../../util/mm.js');


/**url defination**/
var goDetail='./detail.html';


var confirmPg={
	init: function (){
		var _this=this;
		_this.bindEvent()
	},
	bindEvent: function(){
		$(".admin .tbCl.id>span.id").click(function(){
			window.location.href=goDetail;
		});
	}
};

$(function(){
	confirmPg.init();
});