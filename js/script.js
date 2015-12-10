$(document).ready(function() {
  $('.gallery--link').addClass('js-gallery js-gallery-closed');

  $('body').on('click', '.js-gallery', function(e) {
    e.preventDefault();

    $this = $(this);

    if($this.hasClass('js-gallery-closed')) {
      var $openThumbnail = $('.js-gallery-open');
      $openThumbnail.find('.js-show')
        .addClass('gallery--thumbnail', {
          duration: 1500,
          complete: function() {
            $openThumbnail.find('.js-hide').removeClass('js-hide');
            $(this).remove();
            $openThumbnail.addClass('js-gallery-closed').removeClass('js-gallery-open');
          }
        });

      var fullImageSource = $this.attr('href');
      var thumbnail = this.children[0];

      $('<img/>')
        .attr('src', fullImageSource)
        .addClass('gallery--thumbnail js-hide')
        .on('load', function() {
          $this.removeClass('js-gallery-closed').addClass('js-gallery-open');
          $(thumbnail).addClass('js-hide');
          $(this)
            .removeClass('js-hide')
            .addClass('js-show')
            .removeClass('gallery--thumbnail', {
              duration: 1500,
              complete: function() {
                $('html, body').animate({
                  scrollTop: $(this).offset().top
                });
              }
            });
        })
        .appendTo($this);
    } else {
      $this.find('.js-show')
        .addClass('gallery--thumbnail', {
          duration: 1500,
          complete: function() {
            $this.find('.js-hide').removeClass('js-hide');
            $(this).remove();
            $this.addClass('js-gallery-closed').removeClass('js-gallery-open');
          }
        });
    }

    return false;
  });
});
