jQuery(function($){

	// insert the correct pages
	$('.page-holder').each(function(){
		var pageId = $(this).attr('data-page-id');
		$(this).load(pageId+".html #"+pageId+"-view", function(){
			// set the correct targets for the next/prev arrows
			var nextHash = $(this).next().attr('data-page-id');
			var prevHash = $(this).prev().attr('data-page-id');
			$('.next-link', this).attr('href', '#'+nextHash);
			$('.prev-link', this).attr('href', '#'+prevHash);
			
			// NB. It's important that we call localScroll AFTER we've assigned the href attributes
			// otherwise localScroll won't pick up the arrow icons as links.
			//*** Local scroll ****//
			$.localScroll({
				queue:true,
				duration:1000,
				hash:true
			});
			// Scroll initially if there's a hash (#something) in the url 
			$.localScroll.hash({
				queue:true,
				duration:1000
			});
                        
                        if(pageId === 'media'){
                            
                            $('.rs-slider').refineSlide({
                                    maxWidth: 1000, // set to native image width (px)
                                    transition: 'fade'
                        });
                        
                            $(".gallery").on('click', function(e){
                              var clicked = this;
                              var slides = $('.slides');
//                              var galleries = $(".gallery");
                              e.preventDefault();
                              $(clicked).fadeOut('slow', function(){
                                  slides.fadeIn('slow', function(){
                                        var hide = $('.hide-gallery');
                                        hide.on('click', function(f){
                                        f.preventDefault();
                                        slides.fadeOut('slow', function(){
                                            $(clicked).fadeIn('slow');
                                        });
                                    });
                                  });
                              });
                            });
                        }
                        
		});
                
	});
        
//        setActive();
//        
//        $(".navmenu a").on('click', function(){
//            setActive();
//        });
        
        // scrollspy
//        $("body").scrollspy();
		
});