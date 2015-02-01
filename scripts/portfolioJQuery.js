///  portfolioJQuery.js ; Liliya Artyukh ;  page that provides interactive functionality for user using jQuery            -->

/// <reference path="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" >

function main(){
    $("#javaEx").on("mouseover", function(){
		   $("#javaDetails").css('display', 'inline-block');
 $("#javaDetails").css('position', 'absolute');

	console.log("animated");
   });
         $("#javaEx").on("mouseout", function(){
				   $("#javaDetails").css('display', 'none');

			console.log("animated");
        });


       $("#dataEx").on("mouseover", function(){
		   $("#dataDetails").css('display', 'inline-block');
 $("#dataDetails").css('position', 'absolute');
	console.log("animated");
   });
         $("#dataEx").on("mouseout", function(){
				   $("#dataDetails").css('display', 'none');

			console.log("animated");
        });

        $("#testEx").on("mouseover", function(){
				   $("#testDetails").css('display', 'inline-block');
		 $("#testDetails").css('position', 'absolute');
			console.log("animated");
		   });
		         $("#testEx").on("mouseout", function(){
						   $("#testDetails").css('display', 'none');

					console.log("animated");
        });

        $("#webEx").on("mouseover", function(){
				   $("#webDetails").css('display', 'inline-block');
		 $("#webDetails").css('position', 'absolute');
			console.log("animated");
		   });
		         $("#webEx").on("mouseout", function(){
						   $("#webDetails").css('display', 'none');

					console.log("animated");
        });

        $("#docEx").on("mouseover", function(){
				   $("#docDetails").css('display', 'inline-block');
		 $("#docDetails").css('position', 'absolute');
			console.log("animated");
		   });
		         $("#docEx").on("mouseout", function(){
						   $("#docDetails").css('display', 'none');

					console.log("animated");
        });

        $("#csharpEx").on("mouseover", function(){
				   $("#csharpDetails").css('display', 'inline-block');
		 $("#csharpDetails").css('position', 'absolute');
			console.log("animated");
		   });
		         $("#csharpEx").on("mouseout", function(){
						   $("#csharpDetails").css('display', 'none');

					console.log("animated");
        });

























    };