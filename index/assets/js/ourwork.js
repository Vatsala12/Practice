$(window).load(function() {
  var $container = $('.imagegrid');

  $container.isotope({
    itemSelector: '.imagegrid__case',
    layoutMode: 'fitRows'
  });

  var
  $ourWorkText      = $('.ourwork__text'),
  $ourWorkContainer = $ourWorkText.parent(),
  $ourWorkTextInner = $('.ourwork__text__inner'),
  $tabnavLinks = $('.tabnav a');

  $ourWorkContainer.hide();

  $tabnavLinks.click(function(e) {
      e.preventDefault();
      var current = $(this).hasClass('sel');
      $('.tabnav a.sel').removeClass('sel');

      if (History.enabled) {
        History.pushState(null, null, $(this).attr('href'));
      }

      if (current) {
        $container.isotope({ filter: '*' });
        $ourWorkContainer.slideUp();
        // $ourWorkTextInner.hide().filter('.ourwork__text__inner--default').fadeIn();
      } else {
        $(this).addClass('sel');
        var id = $(this).data('id');
        $container.isotope({ filter: '.discipline-'+id });
        if ($ourWorkContainer.is(':visible')) {
            $ourWorkTextInner.hide().filter('.ourwork__text__inner--'+id).fadeIn();
        } else {
            $ourWorkTextInner.hide().filter('.ourwork__text__inner--'+id).show();
            $ourWorkContainer.slideDown();
        }
        // $ourWorkTextInner.hide().filter('.ourwork__text__inner--'+id).fadeIn();
      }
  });

  var selected = $tabnavLinks.filter('.sel');
  if (selected.size() > 0) {
      var id = selected.data('id');
      if (id) {
        $container.isotope({ filter: '.discipline-'+id });

        if ($ourWorkContainer.is(':visible')) {
            $ourWorkTextInner.hide().filter('.ourwork__text__inner--'+id).fadeIn();
        } else {
            $ourWorkTextInner.hide().filter('.ourwork__text__inner--'+id).show();
            $ourWorkContainer.slideDown();
        }

        $('html,body').animate({
            scrollTop: $('.tabnav').offset().top
        }, 200);
    }
  }

  if ($(window).width() <= 800) {

    $('.other-partners__list').slick({
        arrows         : false,
        dots           : false,
        infinite       : false,
        slidesToShow   : 1,
        slidesToScroll : 1,
    });

  }

  // var $video = $('.Loop video');
  // if ($video.size() > 0) {
  //   $('.hero').click(function() {
  //     console.log('click');
  //     $video.get(0).play();
  //   });
  // }

});

