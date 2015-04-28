	/* file name: jQueryMyMobileSite.js,  author: liliya artyukh, Nikolaj Dam Larsen, Portfolio Mobile website, 5 pages mobile web app
 file contains javaScript code for the Portfolio Mobile website and slider */


function main(){
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

$("#visaImg").on("tap",function(){
  $("#visaDetailsSlider").popup("open");
});

$("#nemImg").on("tap",function(){
  $("#nemWebDetailsSlider").popup("open");
});

$("#csharpImage").on("tap",function(){
  $("#csharpDetailsSlider").popup("open");
});

$("#gameImage").on("tap",function(){
  $("#gameDetailsSlider").popup("open");
});

        $(document).on('pagecreate', function (evt) {
            $("#myContent").on("tap", function (e) {
                alert("you tapped!");
            });

            $("#myContent").on("swiperight", function (e) {
                alert("you swiped right!");
            });

            $("#myContent").on("swipeleft", function (e) {
                alert("you swiped left!");
            });
        });
}

$(document).bind('mobileinit',function(){
	$.mobile.page.prototype.options.keepNative = "select, input.foo, textarea.bar";
});