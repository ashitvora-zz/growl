/*
 * Javascript Growl
 * version 0.1
 *
 * MIT License
 *
 * Ashit Vora (a.k.vora@gmail.com)
 * 06/17/2010
 *
 * Displays Growl like notification
 *
 * Depends on jQuery 1.4.2 or higher
 *
 * Usage: 
 *
 * $.growl.show({ msg: "Message to display", timeOut: "some value after which growl will disappear. leave it blank to keep it always visible" });
 *
 */


(function($, undefined){
	
	$.growl = {
		
		init : function(){
			
			//add the basic container to the body
			$growl = $("<div>");

			//beautify it
			$growl.css({
				"cursor" : "pointer",
				"right":0,
				"float" : "right",
				"clear" : "both",
				"width":"300px",
				"zIndex": "999999",
				"fontSize" : "13px",
				"fontFamily": "'Lucida Grande', 'Tahoma', 'verdana', Arial",
				"backgroundColor":"#222",
				"color":"#fff",
				"margin":"10px",
				"padding":"15px",
				"borderRadius":"10px",
				"-webkitBorderRadius":"10px",
				"-mozBorderRadius":"10px",
				"opacity":"0.95"
			});
			
		},
		
		
		//show the growl
		show : function() {
			
			var msg = arguments[0].msg !== undefined ? $.trim(arguments[0].msg) : "",
				
				//if timeout is Passed, use it. else dont hide it
				timeOut = arguments[0].timeOut !== undefined && ! isNaN(parseInt(arguments[0].timeOut, 10)) ? arguments[0].timeOut : 0;

			
			if( msg.length > 0 ){
				
				//clone it and append it to the body
				var newGrowl = $growl.clone();
				newGrowl.html( msg ).show().appendTo("body");
				newGrowl.click(function(){
					newGrowl.hide();
				});
				
				if(timeOut > 0){
					
					setTimeout(function(){
						newGrowl.hide();
					}, timeOut);

				}
				
			}
		},


		//Hide the growl
		hide: function(){
			this.fadeOut(function(){
				this.remove();
			});
		}
	};
	

	//initialize it when document is loaded
	$("document").ready(function(){
		$.growl.init();
	});
	
	
})(jQuery);