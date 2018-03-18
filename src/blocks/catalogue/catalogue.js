// =============== b-catalogue script ===============
$(document).ready(function(){
	// console.log("catalogue msg");
	setGrideSize();
	// init isotope
	var $grid = $('.grid').isotope({
	  // options...
	  layoutMode: 'packery',
	  // percentPosition: true,
	  packery: {
	  }
	});
	// layout Isotope after each image loads
	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});
	// use filters in isotope
	function filter(id){
		let stuffToFilter = { filter: '.' + id};

		if (id == "all") {
			$grid.isotope({ filter: '*' });
		} else {
			$grid.isotope(stuffToFilter);			
		}
	};

	$(".menu__link").click(function(){
		filter(this.id);		
	});
})

$(window).resize(function(){
	setGrideSize();
});
function setGrideSize(){
	let screenW = $(window).width(),
		allPics = $(".catalogue__picture");
	if(screenW>480 && screenW<=768){
		sizeImg("sm", 1.5, 1);
		sizeImg("md", 1.5, 2);
	} else if(screenW>768){
		sizeImg("sm", 1, 1);
		sizeImg("md", 1, 2);
	} else {
		allPics.css("width", screenW);
	}
}

function sizeImg(size, numW, numH){
	let	container = $(".grid"),
		containerW = parseInt(container.css("width")),
		gridSize = containerW/3;
	$(".catalogue__picture_" + size)
		.css("width", gridSize * numW)
		.css("height", gridSize * numH)
}
// =============== b-catalogue script ===============