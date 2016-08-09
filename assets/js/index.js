(function ($, undefined) {
  "use strict";

	var $document = $(document);
  $document.ready(function () {

		// Masonry layout
		var $container = $('.grid');
		$container.imagesLoaded(function() {

		  $container.masonry({
		    itemSelector: '.card'
		  });
		});

    // Infinite Scroll
    $container.infinitescroll({

  		// selector for the paged navigation (it will be hidden)
  		navSelector  : ".full-post",
  		// selector for the NEXT link (to page 2)
  		nextSelector : ".full-post a",
  		// selector for all items you'll retrieve
  		itemSelector : ".card",

      animate      : true,

  		// finished message
  		loading: {
        img: 'data:image/gif;base64,R0lGODlhGAAYANU/AI2eqtne4tLZ3bK9xf39/ZGhreXp687V2+jr7q65wvL09uvu8MHK0b7HzqWyvN7j58fP1eHl6PHz9LXAyO3w8tDX3LjCyp6st/v7/Nzh5fn6+6CuuMTM06m1v8vS2PP19pyqtdTa38jQ1pmns/b3+JalsYubqJmos4iZpomap+Lm6fj5+aSxu8zT2fj5+t3i5tvg5IucqOPn6vf4+Yqbp6Owuvr7+/v8/KezvZOjrpuptLrEzPDy87/Iz9/k5////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzA4MjZFQkEyRUExMUUzQjE2OUQwNUQ1MzZBQ0M2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNzA4MjZFQ0EyRUExMUUzQjE2OUQwNUQ1MzZBQ0M2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI3MDgyNkU5QTJFQTExRTNCMTY5RDA1RDUzNkFDQzY3IiBzdFJl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',
  			finishedMsg: 'No more pages to load.'
      }
		},

		// Trigger Masonry as a callback
		function( newElements ) {
			// hide new items while they are loading
			var $newElems = $( newElements ).css({ opacity: 0 });
			// ensure that images load before adding to masonry layout
			$newElems.imagesLoaded(function(){
				// show elems now they're ready
				$newElems.animate({ opacity: 1 });
				$container.masonry( 'appended', $newElems, true );
			});
	  });

  	/**
  	 * OPTIONAL!
  	 * Load new pages by clicking a link
  	 */

  	// Pause Infinite Scroll
  	$(window).unbind('.infscr');

  	// Resume Infinite Scroll
  	$('.full-post a').click(function(){
  		$container.infinitescroll('retrieve');
      $(".full-post").show();
  		return false;
  	});

		// Carousel
		$(".owl-carousel").owlCarousel({
			items: 1,
      loop: true
		});

		var owl = $('.owl-carousel');

		$('.carousel-next').click(function() {
	    owl.trigger('next.owl.carousel', [600]);
		});
		// Go to the previous item
		$('.carousel-prev').click(function() {
	    owl.trigger('prev.owl.carousel', [600]);
		});

		// Search
		$(".search-results").addClass("results-hide");
		$("#search-field").ghostHunter({
		    results: "#search-results",
		    onKeyUp: true,
		    displaySearchInfo: false,
		    result_template : "<a href='{{link}}'><li class='list-group-item'>{{title}}<span>{{pubDate}}</span></li></a>",
				before: function() {
					$(".search-results").removeClass("results-hide");
				}
		});

    // Responsive video
    $(".post-content").fitVids();
    
	});

	var mainHeader = $('.lp-auto-hide-header'),
		secondaryNavigation = $('.lp-secondary-nav'),
		//this applies only if secondary nav is below intro section
		belowNavHeroContent = $('.sub-nav-hero'),
		headerHeight = mainHeader.height();

	//set scrolling variables
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 150;

	mainHeader.on('click', '.nav-trigger', function(event){
		// open primary navigation on mobile
		event.preventDefault();
		mainHeader.toggleClass('nav-open');
	});

	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 )
			? checkStickyNavigation(currentTop) // secondary navigation below intro
			: checkSimpleNavigation(currentTop);

	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
		//there's no secondary nav or secondary nav is below primary nav
    if (previousTop - currentTop > scrollDelta) {
    	//if scrolling up...
    	mainHeader.removeClass('is-hidden');
    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
    	//if scrolling down...
    	mainHeader.addClass('is-hidden');
    }
	}
})(jQuery);
