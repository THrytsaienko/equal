// =============== b-catalogue script ===============
$(function () {
	var catalogueInit = function (event, page) {
		if (page == undefined) page = document;
		$page = $(page);
		$grid = $page.find('.grid');
		if (!$grid.length) return;
		// ========== init isotope ==========
		$grid.isotope({
			// options...
			layoutMode: 'packery',
			// percentPosition: true,
			packery: {}
		});

		// layout Isotope after each image loads
		$grid.imagesLoaded().progress(function () {
			$grid.isotope('layout');
		});

		// ========== use filters in isotope ==========
		function filter(id) {
			let stuffToFilter = {
				filter: '.' + id
			};

			if (id == "all") {
				$grid.isotope({
					filter: '*'
				});
			} else {
				$grid.isotope(stuffToFilter);
			}
		};

		$(".menu__link").click(function () {
			filter(this.id);
		});
		// ========== use filters in isotope ==========

		// =============== b-catalogue script ===============
	};

	catalogueInit();
	$(document).on("pageInit", catalogueInit);
});