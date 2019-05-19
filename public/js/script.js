var starsCount = 0;
$(document).ready(function(){

	$('[data-toggle="tooltip"]').tooltip()
	$(".topnav li:first-child").click(function(){
		$(".topnav").addClass("responsive");
	});

	$(".result").hide();

	$("#oimdb").click(function(){
		var term = $(".searchit");
		term = term.eq(term.length-1).val();
		$(".form-search").fadeOut(1000);

		$(".result").fadeIn(3000);
		// http://www.omdbapi.com/?t=Guardians+of+the+galaxy+2&apikey=481577de

		term = term.replace(/ /g, "+");
		console.log(term);


		var movieURL = "https://www.omdbapi.com/?t="+term+"&apikey=481577de";
		var movieName = $('#search').val();
		var movieOptions = {
			s: "",

		};

		function displayMovies(data) {
			$(".ititle").html(data.Title);
			$(".iyear").html(data.Year);
			$(".iposter").attr("src", data.Poster);
			$(".irating").html(data.Ratings[0].Value);
		}
		$.getJSON(movieURL, movieOptions, displayMovies);

	});

	$(".fa-star:nth-of-type(1)").hover(function(){
		 $(".fa-star").removeClass("checked"); $(".fa-star:nth-of-type(1)").addClass("checked");
	});

	$(".fa-star:nth-of-type(2)").hover(function(){
		 $(".fa-star").removeClass("checked");
		 $(".fa-star:nth-of-type(1)").addClass("checked");
		$(".fa-star:nth-of-type(2)").addClass("checked");
	});

	$(".fa-star:nth-of-type(3)").hover(function(){
		 $(".fa-star").removeClass("checked");
			$(".fa-star:nth-of-type(1)").addClass("checked");
			$(".fa-star:nth-of-type(2)").addClass("checked");
			$(".fa-star:nth-of-type(3)").addClass("checked");
	});

	$(".fa-star:nth-of-type(4)").hover(function(){
		 $(".fa-star").removeClass("checked");
		 	 $(".fa-star:nth-of-type(1)").addClass("checked");
			 $(".fa-star:nth-of-type(2)").addClass("checked");
			 $(".fa-star:nth-of-type(3)").addClass("checked");
			 $(".fa-star:nth-of-type(4)").addClass("checked");
	});

	$(".fa-star:nth-of-type(5)").hover(function(){
	 	$(".fa-star").removeClass("checked");
	 		$(".fa-star").addClass("checked");
	});

});
