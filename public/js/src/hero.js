!function($) {
	function HeroImg( $elt, nav ) {
		this.$hero = $elt;
		this.$nav = $( nav );
		this.$win = $( window );
		this.$heroImg = this.$hero.find( '.hero-img-stretch' );
		this.$heroDown = this.$hero.find( 'a.fa-link' );
		this.$underHero = this.$hero.next();

		this.navHeight = this.$nav.height();

		this.tabletBreak = 768;
		this.resizeTimer;
	}

	HeroImg.prototype = {
		init: function() {
			this.bind();
			this.resizeImage();
		},

		bind: function() {
			var that = this;

			this.$heroDown.on( 'click', function() {
				that.scrollDown();
			});

			this.$win.resize(function(){
				clearTimeout( that.resizeTimer );
				that.resizeTimer = setTimeout( function(){
					that.resizeImage();
				}, 50 )
			});
		},

		resizeImage: function() {
			var imgHeight = this.$heroImg.height(),
				windowHeight = this.$win.height(),
				imgNavHeight = this.navHeight + imgHeight,
				newImgHeight;

			if ( imgNavHeight > windowHeight || imgHeight === 0 || ( imgNavHeight >= windowHeight && this.$win.width() > this.tabletBreak )) {
				newImgHeight = windowHeight - this.navHeight;
				this.$heroImg.css('height', newImgHeight + 'px');
			} else {
				this.$heroImg.css('height', '100%');
			}
		},

		scrollDown: function() {
			var offset = this.$underHero.offset();
			$( 'html, body' ).animate({
				scrollTop: offset.top
			}, 400);
		}
	}

	$.fn.heroImg = function( nav ) {
		var hero = new HeroImg( this, nav );
		hero.init();
	}
}(window.jQuery);	
