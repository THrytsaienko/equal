// =============== b-catalogue script ===============
$(document).ready(function(){
	// console.log("catalogue msg");

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