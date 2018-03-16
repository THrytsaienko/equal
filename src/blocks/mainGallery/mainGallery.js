// =============== b-mainGallery script ===============
$(function () {
	var mainGalleryInit = function (event, page) {
		if (page == undefined) page = document;
		$page = $(page);
		$grid = $page.find('.grid');
		if (!$grid.length) return;

		$grid.isotope({
			layoutMode: 'packery',
			packery: {
			}
		});

		$grid.imagesLoaded().progress(function () {
			$grid.isotope('layout');
		});
	};

	mainGalleryInit();
	$(document).on("pageInit", mainGalleryInit);
});

// =============== b-mainGallery script ===============