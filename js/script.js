$(document).ready(function() {
  $('.gallery--link').addClass('js-gallery-closed');

  $('body').on('click', '.js-gallery-closed', function(e) {
    e.preventDefault();

    $this = $(this);
    var fullImageSource = $this.attr('href');
    var thumbnail = this.children[0];

    $this.unbind(e);

    $('<img/>')
      .attr('src', fullImageSource)
      .addClass('js-hide')
      .on('load', function() {
        $this.removeClass('js-gallery-closed').addClass('js-gallery-open')
        $(this).removeClass('js-hide').addClass('js-show');
        $(thumbnail).addClass('js-hide');
      })
      .appendTo($this);

    return false;
  });

  $('body').on('click', '.js-gallery-open', function(e) {
    e.preventDefault();

    $(this).find('.js-show').remove();
    $(this).find('.js-hide').removeClass('js-hide');
    $(this).addClass('js-gallery-closed').removeClass('js-gallery-open')

    return false;
  });
});
