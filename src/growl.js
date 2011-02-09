/**
 * Mac-like Growl
 * version 0.2
 *
 * MIT License
 *
 * Ashit Vora (a.k.vora@gmail.com)
 * Tested on jQuery 1.5
 *
 * Usage
 *
 *  $.growl.show({ 
 *    msg: "Message to display", 
 *    sticky: if TRUE, don't auto hide. else hide after 10 seconds
 *  });
 *
 */


(function($, undefined){
    var growl = $("<div class='growl'><a class='growl-close-icon' href='javascript:void(0);'>x</a><p class='growl-content'></p></div>"),
        growlContainer = $("<div class='growl-container'></div>"),
        timeOut = 10000;
	
	$.growl = function(){};
	
	$.growl.init = function(){
	    growlContainer.appendTo("body");

	    growl.find("a.growl-close-icon").bind("click", function(){
			$(this).closest("div.growl").fadeOut().remove();
		});
	};
	
	
		
	//show the growl
	$.growl.show = function(config) {
			
		var msg    = config.msg !== "undefined" ? $.trim(config.msg) : "",
			sticky = config.sticky !== "undefined" && config.sticky === true;
		
		if( msg.length > 0 ){
			
			//clone it and append it to the body
			var newGrowl = growl.clone(true);
			
			newGrowl.appendTo(growlContainer);
			newGrowl.find('.growl-content').html(msg);
			
			if(! sticky){	
				setTimeout(function(){
					newGrowl.hide();
				}, timeOut);
			}
			
		}
	};



	//Hide the growl
	$.growl.hide = function(){
		this.fadeOut(function(){
			this.remove();
		});
	};
	
	
	
	$(document).ready(function(){
        $.growl.init();     
    });
})(jQuery);