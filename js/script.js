$(document).ready(function() {
  $('.gallery--link').addClass('js-gallery js-gallery-closed');

  $('body').on('click', '.js-gallery', function(e) {
    e.preventDefault();

    $this = $(this);

    if($this.hasClass('js-gallery-closed')) {
      $('.js-gallery-open').find('.js-show').remove();
      $('.js-gallery-open').find('.js-hide').removeClass('js-hide');
      $('.js-gallery-open').addClass('js-gallery-closed').removeClass('js-gallery-open');

      var fullImageSource = $this.attr('href');
      var thumbnail = this.children[0];

      $('<img/>')
        .attr('src', fullImageSource)
        .addClass('gallery--thumbnail js-hide')
        .on('load', function() {
          $this.removeClass('js-gallery-closed').addClass('js-gallery-open')
          $(this).removeClass('js-hide').addClass('js-show');
          $(thumbnail).addClass('js-hide');
        })
        .appendTo($this);
    } else {
      $this.find('.js-show').remove();
      $this.find('.js-hide').removeClass('js-hide');
      $this.addClass('js-gallery-closed').removeClass('js-gallery-open');
    }

    return false;
  });
});
