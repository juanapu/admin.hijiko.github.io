/*
* @Author: Administrator
* @Date:   2017-11-10 15:15:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-17 12:18:30
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
		_this.bindEvent();
		_this.pagination();
		_this.pageLogic();
	},
	bindEvent: function(){
		$(".admin .tbCl.id>span.id").click(function(){
			window.location.href=goDetail;
		});
	},
	pagination: function(){
			var _this=this;
			_this.pageLogic();/******use to divide pages*******/
			$('#pagination-demo').twbsPagination({
		        totalPages: 16,
		        visiblePages: 6,
		        next: 'Next',
		        prev: 'Prev',
		        onPageClick: function (event, page) {
		            //fetch content and render here
		            $('#page-content').text('Page ' + page) + ' content here';
		        }
		    });
	},
	pageLogic: function(){
			var cmtNum=$('.commentListWrap .cmtInner').length;
			if(!cmtNum){
				$(".tranDetailPg .formWrap").addClass('rmMxHt');
			}else{
				$(".tranDetailPg .formWrap").removeClass('rmMxHt');
			};
	}
};

$(function(){
	confirmPg.init();
});