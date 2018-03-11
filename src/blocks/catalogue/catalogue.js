$(document).ready(function(){
	console.log("catalogue msg");
	// use filters in isotope
	$("#all").click(function(){
		$grid.isotope({ filter: '*' });
		console.log("all");
	});
	
	$("#sea").click(function(){
		$grid.isotope({ filter: '.sea' });
		console.log("sea");
	});

	$("#cars").click(function(){
		$grid.isotope({ filter: '.cars' });
		console.log("cars");
	});

	$("#restaurants").click(function(){
		$grid.isotope({ filter: '.restaurants' });
		console.log("restaurants");
	});

	$("#business").click(function(){
		$grid.isotope({ filter: '.business' });
		console.log("business");
	});

	$("#wedding").click(function(){
		$grid.isotope({ filter: '.wedding' });
		console.log("wedding");
	});

	$("#cities").click(function(){
		$grid.isotope({ filter: '.cities' });
		console.log("cities");
	});

})