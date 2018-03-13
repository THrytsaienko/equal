// =============== b-catalogue script ===============
$(document).ready(function(){
	// console.log("catalogue msg");

	// ========== init isotope ==========
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
	
	// ========== use filters in isotope ==========
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
	// ========== use filters in isotope ==========

})
// =============== b-catalogue script ===============