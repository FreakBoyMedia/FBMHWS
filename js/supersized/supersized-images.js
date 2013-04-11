jQuery(function($){
				
				$.supersized({
				
					// Functionality
					slideshow               :   1,			// Slideshow on/off
					autoplay			:	1,			// Slideshow starts playing automatically
					start_slide             :   1,			// Start slide (0 is random)
					stop_loop			:	0,			// Pauses slideshow on last slide
					random			: 	0,			// Randomize slide order (Ignores start slide)
					slide_interval          :   3000,		// Length between transitions
					transition              :   6, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	1000,		// Speed of transition
					new_window			:	1,			// Image links open in new window/tab
					pause_hover             :   0,			// Pause slideshow on hover
					keyboard_nav            :   1,			// Keyboard navigation on/off
					performance			:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
					image_protect		:	1,			// Disables image dragging and right click with Javascript
															   
					// Size & Position						   
					min_width		       :   0,			// Min width allowed (in pixels)
					min_height		       :   0,			// Min height allowed (in pixels)
					vertical_center         :   1,			// Vertically center background
					horizontal_center       :   1,			// Horizontally center background
					fit_always			:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
					fit_portrait         	:   1,			// Portrait images will not exceed browser height
					fit_landscape		:   0,			// Landscape images will not exceed browser width
															   
					// Components							
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					thumb_links				:	1,			// Individual thumb links for each slide
					thumbnail_navigation    :   0,			// Thumbnail navigation
					slides 					:  	[			// Slideshow Images
														{image : 'image/slider/1.jpg', title : '<div style="text-shadow: 0px 5px 6px rgba(151, 150, 150, 1);text-shadow: 5px 0px 6px rgba(151, 150, 150, 1);text-shadow: 0px -5px 6px rgba(151, 150, 150, 1);text-shadow: -5px 0px 6px rgba(151, 150, 150, 1);">FREAKBOY MEDIAHOUSE<div class="slidedescription">We Make Things Out Of Pixels</div></div>', thumb : '', url : 'image/slider/1.jpg'},
														{image : 'image/slider/2.jpg', title : '<div style="text-shadow: 0px 5px 6px rgba(151, 150, 150, 1);text-shadow: 5px 0px 6px rgba(151, 150, 150, 1);text-shadow: 0px -5px 6px rgba(151, 150, 150, 1);text-shadow: -5px 0px 6px rgba(151, 150, 150, 1);">We Design<div class="slidedescription">With The User In Mind</div></div>', thumb : '', url : 'image/slider/2.jpg'},
														{image : 'image/slider/3.jpg', title : '<div style="text-shadow: 0px 5px 6px rgba(151, 150, 150, 1);text-shadow: 5px 0px 6px rgba(151, 150, 150, 1);text-shadow: 0px -5px 6px rgba(151, 150, 150, 1);text-shadow: -5px 0px 6px rgba(151, 150, 150, 1);">We Develop<div class="slidedescription">Using Best Practice</div></div>', thumb : '', url : 'image/slider/3.jpg'},
														{image : 'image/slider/4.jpg', title : '<div style="text-shadow: 0px 5px 6px rgba(151, 150, 150, 1);text-shadow: 5px 0px 6px rgba(151, 150, 150, 1);text-shadow: 0px -5px 6px rgba(151, 150, 150, 1);text-shadow: -5px 0px 6px rgba(151, 150, 150, 1);">We Create<div class="slidedescription">With Your Goals In Focus</div></div>', thumb : '', url : 'image/slider/4.jpg'},
														{image : 'image/slider/5.jpg', title : '<div style="text-shadow: 00px 5px 6px rgba(151, 150, 150, 1);text-shadow: 5px 0px 6px rgba(151, 150, 150, 1);text-shadow: 0px -5px 6px rgba(151, 150, 150, 1);text-shadow: -5px 0px 6px rgba(151, 150, 150, 1);">We Market<div class="slidedescription">By Targeting Who Matters</div></div>', thumb : '', url : 'image/slider/5.jpg'}
												],
												
					// Theme Options			   
					progress_bar			:	1,			// Timer for each slide							
					mouse_scrub				:	0
					
				});
		    });