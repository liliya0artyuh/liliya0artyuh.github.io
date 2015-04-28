	/* file name: sliderCSS.cs,  author: liliya artyukh, Nikolaj Dam Larsen, Portfolio Mobile website, 5 pages mobile web app
 file contains javaScript code for the Portfolio Mobile website and slider */



  	/*Sider Settings*/
	$(function () {
	    $("#slider").excoloSlider({
	        autoPlay: true,
	        prevnextNav: true,
	        prevnextAutoHide: true,
	        pagerNav: true,
	        touchNav: true,
	        mouseNav: true,
	        hoverPause: true,
	        delay: 0,
	        interval: 5000
	    });
});


/*change type of transition between pages*/
	function doChange(newPage) {
      $("body").pagecontainer("change", newPage, {transition: "slide"});
  	}