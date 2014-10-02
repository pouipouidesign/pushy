/*! Heavily Refactored Pushy - v0.9.3 - 2014-10-02
* Pushy is a responsive off-canvas navigation menu using CSS transitions.
* https://github.com/christophery/pushy/
* by Christopher Yee - Marie Alhomme */

;(function($){

	$.fn.pushy = function(options){

		/**
		 * Default options
		 */

		var defaults = {
			pushySide			: 'left',
			pushyActiveClass	: 'pushy-active',
			containerId			: 'container',
			overlayId			: 'site-overlay',
			pushyBtn			: '<button type="button" class="menu-btn"><i class="icon-menu"></i> <span class="visuallyhidden"></span></button>',
			menuSpeed			: 200,
			init				: true,
			destroy				: false
		};

		var opts = $.extend( {}, defaults, options );

		var pushyNav = this,
			pushySide = opts.pushySide,
			pushySideClass = 'pushy-'+pushySide,
			pushyActiveClass = opts.pushyActiveClass,
			menuWidth = pushyNav.width() + 'px';

		//checks if transitions are supported
		var cssTransitions = (function csstransitions(){
			var el = document.createElement('div');

		    var transEndEventNames = {
		      WebkitTransition : 'webkitTransitionEnd',
		      MozTransition    : 'transitionend',
		      OTransition      : 'oTransitionEnd otransitionend',
		      transition       : 'transitionend'
		    };

		    for (var name in transEndEventNames) {
		      if (el.style[name] !== undefined) {
		        return true;
		      }
		    }

		    return false; // explicit for ie8 (  ._.)
		})();

		/**
		 * Start Navigation functions
		 */

		return this.each(function() {

			function openPushyFallback(){
				$('body,html').addClass(pushyActiveClass);
				pushyNav.animate({pushySide: "0px"}, opts.menuSpeed);
				$('#container').animate({pushySide: menuWidth}, opts.menuSpeed);
			}

			function closePushyFallback(){
				$('body,html').removeClass(pushyActiveClass);
				pushyNav.animate({pushySide: "-" + menuWidth}, opts.menuSpeed);
				$('#container').animate({pushySide: "0px"}, opts.menuSpeed);
			}

			function initPushy() {
				$('body').addClass(pushySideClass);
				$('#container').before(pushyNav);
				if ( $('.menu-btn').size() === 0 ) {
					$('#header').prepend(opts.pushyBtn);
				}
				$('#wrapper').prepend('<div id="'+opts.overlayId+'" />');
				if (cssTransitions) {
					alert('transitions');
					$('.menu-btn, #'+opts.overlayId).on('click', function(e) {
						e.preventDefault();
						$('body,html').toggleClass(pushyActiveClass);
					});
				} else {
					alert('no transitions');
					//jQuery fallback
					pushyNav.css({pushySide: "-" + menuWidth}); //hide menu by default
					$('#container').css({"overflow-x": "hidden"}); //fixes IE scrollbar issue

					//keep track of menu state (open/close)
					var state = true;

					$('.menu-btn, #'+opts.overlayId).on('click', function(e) {
						e.preventDefault();
						if (state) {
							openPushyFallback();
							state = false;
						} else {
							closePushyFallback();
							state = true;
						}
					});
				}
			}

			function destroyPushy() {
				if(!cssTransitions){
					pushyNav.css({left: "auto"}); //hide menu by default
					$('#container').css({"overflow-x": "auto"}); //fixes IE scrollbar issue
				}
				$('.menu-btn').remove();
				$('body, html').removeClass(pushySideClass).removeClass(pushyActiveClass);
				$('#'+opts.overlayId).remove();
				$('#header').append(pushyNav);
			}

			if(opts.init){
				initPushy();
				return;
			}

			if(opts.destroy){
				destroyPushy();
				return;
			}

		});

	};

})(jQuery);