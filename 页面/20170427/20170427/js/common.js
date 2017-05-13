/**
 * @file    公用JS
 * @authors Kevin Chen (chj@8cuo.net)
 * @date    2017-04-24 01:40:00
 * @version $Id$
 */

// 回到顶部
$(function(){ 
	//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失 

	$(window).scroll(function(){ 
		if ($(window).scrollTop()>100){ 
			$("#backToTop").fadeIn(500); 
		} else { 
			$("#backToTop").fadeOut(500); 
		} 
	}); 
	 
	//当点击跳转链接后，回到页面顶部位置 

	$("#backToTop").click(function(){ 
		$('body,html').animate({scrollTop:0},500); 
		return false; 
	}); 

}); 

// 0 - 9 数字转中文
Number.prototype.toCN = function(){
	var CNNumber = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
	return CNNumber[this];
}

$.fn.serializeObject = function()      
    {      
       var o = {};      
       var a = this.serializeArray();      
       $.each(a, function() {      
           if (o[this.name]) {      
               if (!o[this.name].push) {      
                   o[this.name] = [o[this.name]];      
               }      
               o[this.name].push(this.value || '');      
           } else {      
               o[this.name] = this.value || '';      
           }      
       });      
       return o;      
    };   