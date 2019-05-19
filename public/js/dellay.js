const pageable = new Pageable("main", {
	animation: 400,
	freeScroll: true,
	delay: 300,
	pips: false,
	orientate: "horizontal",
	onBeforeStart: function() {
		this.pages.forEach((page, i) => {
			page.classList.remove("pg-active");

		});
	},
	onFinish: function(data) {
		this.orientate(data.index % 2 == 0 ? "horizontal" : "horizontal");
		$(".anchors ul li a").each(function(event){
			$(this).removeClass("active");
			var href = $(this).attr("href");
			var index = $(".pg-active").attr("id");
			if(href == "#"+index){
				$(this).addClass("active");
			}
		});
		$(".pg-wrapper").css("overflow", "hidden");
	},

});
