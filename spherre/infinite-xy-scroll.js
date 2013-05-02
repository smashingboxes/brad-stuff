;(function ($) {
	// Defaults
	var defaults = {
		json_path: 'data.json',
		centerX: 248,
		centerY: 248,
		elementHeight: 110, //make sure this matches css definition
		elementWidth: 110, //make sure this matches css definition
		elementMargin: 10
	};

	// Calc Variables
	var calc = {
		total: 0, 
		upper:  0, lower: 0, 	
		x: 0, y: 0,

		counter: 0, numberOfRings: 0,
		rightmost: 0, leftmost: 0, upmost: 0, downmost: 0,
		moveRight: "", moveLeft: "", moveUp: "", moveDown: "",
		bottomY: 0, topY: 0, leftX: 0, rightX: 0
	};

	function Infinite (el, options) {
		this.el = el;
		this.$el = $(el);

		// Json data once receied from server
		this.friends = [];

		// Merge defaults with user options, but keep defaults untouched
		this.options = $.extend({}, defaults, options);

		this.initAjax();
	}

	$.extend(Infinite.prototype, {
		initAjax: function () {
			var 
			self = this, 
			$jqXhr,

			// Setup
			ajax_settings = {
				type: "POST",
				dataType: 'json',
				url: self.options.json_path	
			};

			// Send
			$jqXhr = $.ajax(ajax_settings);

			// Success
			$jqXhr.done(function (data, textStatus, jqXHR) {
				self.options.friends = data.friends;
				self._setup();
				// console.log(self.options.friends);
			});

			// Error
			$jqXhr.fail(function (jqXHR, textStatus, errorThrown) {
				console.log('uh oh');
			});			
		},

		_oddSquares: function (x) {
			return Math.ceil((Math.sqrt(x)-1)/2);
		},		

		_setup: function () {
			var self = this;

			calc.total = self.options.friends.length;
			calc.numberOfRings = self._oddSquares(calc.total);
			calc.rightmost = calc.numberOfRings; 
			calc.leftmost = -calc.rightmost; 
			calc.upmost = calc.leftmost;     
			calc.downmost = calc.rightmost;  
			calc.moveDown = "+="+(self.options.elementHeight+self.options.elementMargin);
			calc.moveUp = "-="+(self.options.elementHeight+self.options.elementMargin);
			calc.moveRight = "+="+(self.options.elementWidth+self.options.elementMargin);
			calc.moveLeft = "-="+(self.options.elementWidth+self.options.elementMargin);
			calc.bottomY = self.options.centerX + calc.downmost*(self.options.elementHeight+self.options.elementMargin);
			calc.topY = self.options.centerX + calc.upmost*(self.options.elementHeight+self.options.elementMargin);
			calc.leftX = self.options.centerX + calc.rightmost*(self.options.elementWidth+self.options.elementMargin);
			calc.rightX = self.options.centerX + calc.leftmost*(self.options.elementWidth+self.options.elementMargin);
			// Take off!
			self._init();
		},

		_draw: function (row, column) {
			var self = this;
			var opts = self.options;

			//console.log(window.counter + " : row : " + row + " column : " + column);
			
			var topPosition = opts.centerY  + column*(opts.elementHeight + opts.elementMargin);
			var leftPosition = opts.centerX + row*(opts.elementWidth + opts.elementMargin);
			
			
			/* 
			 *    This is what you'll need to change to customize your boxes: 
			 */
			$('#sphereBox').append("<div class='sphereElement' style='position:absolute;top: "
				+topPosition+"px;left:"+leftPosition+"px;' data-row='"+row+"' data-column='"+column
				+"'><h2>"+opts.friends[calc.counter].title+"</h2><div><img src='"+opts.friends[calc.counter].img+"'><div class='name'>"+opts.friends[calc.counter].name+"</div></div></div>");

			calc.counter++;
		},


		_init: function () {
			var self = this;
			var arrows = "<div id='sphere-box-up'></div>"
						+"<div id='sphere-box-left'></div>"
						+"<div id='sphere-box-right'></div>"
						+"<div id='sphere-box-down'></div>"
			
			this.$el.append(arrows);
			this.$el.append("<div id='sphereBox'></div>");
			
			self._draw(calc.x, calc.y);
			calc.upper ++; //we permutate through a set of numbers that increases by two for each new complete square ring around the center
			calc.lower = calc.upper*-1; //the numbers move in opposite from each other from 0 (i.e. upper = 5 => lower = -5)

			for (var n = 0; n<calc.numberOfRings; n++){
				calc.x = calc.lower;
				calc.y = calc.lower;
				
				self._draw(calc.x, calc.y); //start in the top left corner

				while(calc.x < calc.upper){ //move to top right corner
					calc.x++
					self._draw(calc.x,calc.y);
				}
				while(calc.y < calc.upper){ //move to bottom right corner
					calc.y++;
					self._draw(calc.x,calc.y);
				}
				while(calc.x > calc.lower){ //move to bottom left corner
					calc.x--;
					self._draw(calc.x,calc.y);
				}
				while(calc.y > calc.lower+1){ //move to top left corner (almost)
					calc.y--;
					self._draw(calc.x,calc.y);
				}

				calc.upper++; //increment upper
				calc.lower--; //lower is the opposite of upper
			}

			self._bindEvents();
		},

		_bindEvents: function () {
			//Event Handlers -- Move and Shift The Extreme

			$('#sphere-box-up').on('click', function(){
				$('.sphereElement').css( "top", calc.moveDown);
				$("*[data-column='"+calc.downmost+"']").css("top", calc.topY);
				if(calc.downmost < -1*calc.numberOfRings+1){
					calc.downmost = calc.numberOfRings;
					calc.upmost = -1*calc.numberOfRings;
				}
				else{
					calc.upmost = calc.downmost;
					calc.downmost = calc.downmost - 1;
				}
			});

			$('#sphere-box-down').on('click', function(){
				$('.sphereElement').css( "top", calc.moveUp );
				$("*[data-column='"+calc.upmost+"']").css("top", calc.bottomY);
				if(calc.upmost > calc.numberOfRings-1){
					calc.upmost = -1*calc.numberOfRings;
					calc.downmost = calc.numberOfRings;
				}
				else{
					calc.downmost = calc.upmost;
					calc.upmost = calc.upmost + 1;
				}
				
			});

			$('#sphere-box-left').on('click', function(){
				$('.sphereElement').css( "left", calc.moveRight );
				$("*[data-row='"+calc.rightmost+"']").css("left", calc.rightX);
				if(calc.rightmost < -1*calc.numberOfRings+1){
					calc.rightmost = calc.numberOfRings;
					calc.leftmost = -1*calc.numberOfRings;
				}
				else{
					calc.leftmost = calc.rightmost;
					calc.rightmost = calc.rightmost - 1;
				}
			});



			$('#sphere-box-right').on('click', function(){
				$('.sphereElement').css( "left", calc.moveLeft );
				$("*[data-row='"+calc.leftmost+"']").css("left", calc.leftX);
				if(calc.leftmost > calc.numberOfRings-1){
					calc.rightmost = calc.numberOfRings;
					calc.leftmost = -1*calc.numberOfRings;
				}
				else{
					calc.rightmost = calc.leftmost;
					calc.leftmost = calc.leftmost + 1;
				}
			});

			$('.sphereElement').hover(function(){
				$(this).children().toggle();
			});
		}
	});

	// jQ Plugin
	$.fn.infiniteFriends = function (opts) {
		return this.each(function () {
			// Create & Initialize
			(new Infinite(this, opts));
		});
	};	
}(jQuery));