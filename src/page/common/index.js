
"use strict"

require('./layout.css');
//require('../css/style.css')
//
/***url define**/
var host="http://hijikotest.com";

var commonJs={
	init: function(){
		var _this=this;
		_this.changeUrl();
	},
	changeUrl: function(){
		var liLength=$(".headerWrap ul.rightBar").children('li').length;
		var $li,newHref;
		for(var i=0;i<liLength;i++){
			$li=$($(".headerWrap ul.rightBar").children('li')[i]);
			if(!$li.hasClass('active')){
				console.log($li.children('a').attr('href'));
				newHref=host+$li.children('a').attr('href');
				$li.children('a').attr('href',newHref);
			};
		}
	}
};

$(function(){
	commonJs.init();
});


