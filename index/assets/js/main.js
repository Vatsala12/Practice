$(document).ready(function() {

	var menu_toggle = $('.header__navexpand');
  var connect_toggle = $('.footer__btnconnect');
  var saveScroll;

  $(menu_toggle).click(function(){
    $(menu_toggle).toggleClass('active');
    $('body').toggleClass('active');
    return false;
  });

  var
  $footerInquiry = $('.footer__inquiry');

  $(connect_toggle).click(function(e) {
    e.preventDefault();

    $('.footer__inquiry').slideToggle("slow", initMaps);
    $('html,body').animate({
      scrollTop: $footerInquiry.offset().top
    }, 'slow');


    // var heightBefore;
    // var heightAfter;
    // var heghtDiff;
    // var curScroll;

    // heightBefore = $(document).height();
    // curScroll = $(window).scrollTop();

    // //console.log("height before: " +$(document).height());

    // //$('.footer__map').slideToggle("slow");

    // saveScroll = $(document).scrollTop();

    // $('.footer__map').animate({height:"toggle"},{step:step});
    // $('.footer__inquiry').slideToggle("slow", function () {

    //   //heightAfter = $(document).height();
    //   //heghtDiff = heightBefore + heightAfter;

    //   //$('html, body').animate({
    //     //scrollTop: heghtDiff
    //   //}, 2000);


    // });

    // function step() {

    //   //console.log($('.footer__map').height());
    //   //$('html, body').scrollTop();
    //   //var newscroll = $(document).scrollTop() + $('.footer__map').outerHeight();
    //   var newscroll = saveScroll + $('.footer__map').outerHeight() + $('.footer__inquiry').outerHeight() + 500;
    //   $('html, body').scrollTop(newscroll);
    //   //scrollTop: 200;
    // }



    //var footerMap = $('.footer__map').height();
    //var footerInquiry = $('.footer__inquiry').height();

    //footerMap = parseInt(footerMap, 10);
    //footerInquiry = parseInt(footerInquiry, 10);

    //$('.footer__map').toggleClass('show');
    //$('.footer__inquiry').toggleClass('show');
  });


  if ($(window).width() < 560 ) {
    $('.imagegrid--mobile-carousel > .clearfix').slick({
        arrows: false,
        dots: true,
        infinite       : true,
        slidesToShow   : 1,
        slidesToScroll : 1
    });
  }

  var
  $header = $('.header');
  $(window).scroll(function(e) {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 10) {
        $header.addClass('header--small');
    } else {
        $header.removeClass('header--small');
    }
  });
});

$(function() {

    var
    $hero            = $('.hero');
    if ($hero.size() < 1 || Modernizr.touch)
        return;

    var
    $w               = $(window),
    windowHeight     = $w.height(),
    elementOffsetTop = $hero.offset().top,
    elementHeight    = $hero.height(),

    $heroText              = $hero.find('p'),

    heroTextTopStart     = 0,
    heroTextTopEnd       = Math.floor((750/1400)*windowHeight),
    heroTextTopIncrement = (heroTextTopEnd - heroTextTopStart) / 100;

    $w.on('scroll', function() {
        var scroll = $w.scrollTop();
        if (scroll > (elementOffsetTop - elementHeight) && scroll < (elementOffsetTop + elementHeight)) {

            var visiblePercentage = ((scroll - elementOffsetTop) / windowHeight) * 100;

            $heroText.css('margin-top', heroTextTopStart + (heroTextTopIncrement * visiblePercentage));
            // $heroText.css('margin-top', elementOffsetTop + scroll);

        }
    }).on('resize', function() {
        windowHeight     = $w.height();
        elementOffsetTop = $hero.offset().top;
        elementHeight    = $hero.height();
        heroTextTopEnd   = Math.floor((750/1400)*windowHeight);
        $w.trigger('scroll');
    }).trigger('scroll');


});

$(function() {
  var
  $connectForm = $('.footer__inquiry form');
  $connectForm.submit(function(e) {
    e.preventDefault();
    $.post('/ajax/send-connect-form', $(this).serialize(), function(data) {
      if (data.errors.length > 0) {
        alert(data.errors.join("\n"));
      } else {
        $('.footer__inquiry__right').html('<p>Stay tuned you’ll hear from us soon.</p>')
        // alert("Thanks for your message. We'll be in touch shortly.");
        $connectForm.get(0).reset();
      }
    }, 'json');
  });
});

$(function() {
    var headerHeight = 54;
    if (window.location.hash != '') {
        var anchor = $('a[name="' + window.location.hash.replace('#', '') + '"]');
        if (anchor.size() > 0) {
            window.scrollTo(0, anchor.offset().top - headerHeight);
        }
    }

    $('a[href^="#"]').click(function(e) {
        if ($(this).attr('href') == '')
            return true;

        e.preventDefault();
        var anchor = $('a[name="' + $(this).attr('href').replace('#', '') + '"]');
        if (anchor.size() > 0) {
            $('html,body').animate({
                scrollTop: anchor.offset().top - headerHeight
            }, 200);
        }
    });

    if (window.location.hash != '') {
        var anchor = $('a[name="' + window.location.hash.replace('#', '') + '"]');
        if (anchor.size() > 0) {
            setTimeout(function() {
                $('html,body').animate({
                    scrollTop: anchor.offset().top - headerHeight
                }, 500);
            }, 500);
        }
    }
});

google.maps.event.addDomListener(window, 'load', initMaps);
function initMaps() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(32.7123258, -117.159006),
        disableDefaultUI: true,
        scrollwheel: false,
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    };
    $('.map:visible').each(function() {
        var mapElement = $(this).get(0); //document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(32.7123258, -117.159006),
            map: map,
            icon: URL_BASE + 'assets/img/map_marker.png',
        });

        google.maps.event.addListener(marker, 'click', function() {
            window.open('https://www.google.com/maps/place/655+G+St,+San+Diego,+CA+92101/@32.7123258,-117.159006,17z/data=!3m1!4b1!4m2!3m1!1s0x80d95359aa2cdfc7:0xb15deab1706210bd');
        });
    });
}
