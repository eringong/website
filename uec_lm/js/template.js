/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins 
 */

(function($){
	$(document).ready(function(){

		// $(".btn-default").click(function(){
		// 	$(".well:not(.tagA)").slideToggle()
		// })

		$(".btn-default").click(function(){
		  // $(".well").slideToggle()
		  //If we were ON before...
		  if( filter==$(this).data("filter-name")) {
		  	  //No filter
		      filter = null;
		      //All labels fully visible
		      // $(".btn-default", $(this).parent()).css({opacity:1});
		      //Show all boxes (as masonry)
		      //!!!Fix the masonry bit to your preferred classes
		      $(".well")
		        .hide();
		        // .addClass("model-masonry-box");
		  } else {
		  	  //If we were OFF before
		  	  //Set the filter to the filter-name
		      filter = $(this).data("filter-name");
		      //Hide all the other (acutally all) labels
		      $(".btn-default", $(this).parent()).css({opacity:.4});
		      //Hide all boxes
		      $(".well")
		        .hide();
		        // .removeClass("model-masonry-box");

		      //But show the matching ones
		      $("#well-"+filter).parent()
		        .show();
		        // .addClass("model-masonry-box");
		  }
		  //Show this label
		  $(this).css({opacity:1.0})
		  

		// <span id="projects-pill" class="label label-info" data-filter-name="project" style="opacity: 1;">technical projects</span>
		// <div class="proj-box proj-about-me"><img src="img/me.JPG" class="flip-horizontal" style="width:100%"></div>

		  // $('#mason').masonry({
		  //   columnWidth: '.model-masonry-box',
		  //   itemSelector: '.masonry-box:visible',
		  // });
		});



	}); // End document ready
})(this.jQuery);