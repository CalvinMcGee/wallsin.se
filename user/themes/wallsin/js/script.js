jQuery.extend(jQuery.colorbox.settings, {
	current: "Bild {current} av {total}",
	previous: "Föregående",
	next: "Nästa",
	close: "Stäng",
	xhrError: "Innehållet kunde inte laddas.",
	imgError: "Den här bilden kunde inte laddas.",
	slideshowStart: "Starta bildspel",
	slideshowStop: "Stoppa bildspel"
});

$(document).ready(function() {
  $('a.lightbox-link').colorbox();

  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $('.menu').toggleClass("menu--active");
  });
});
