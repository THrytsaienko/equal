// init Isotope
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