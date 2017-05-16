$(document).ready(function() {

  var
  $carousel = $('.carousel-manor');

  $carousel.slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // nextArrow: $('.manor__nav__btn--top'),
      // prevArrow: $('.manor__nav__btn--bottom')
  });

  // $carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //   changePhoto(nextSlide);
  // });

  // function changePhoto(nextSlide) {
  //   $('.manor__nav__right').html('<p>'+manor_name[nextSlide]+'</p>');
  // }


  //$('.manor__nav__btn--top').click(function(e) {
      //e.preventDefault();
  //});
//
  //$('.manor__nav__btn--bottom').click(function(e) {
      //e.preventDefault();
  //});


  //if ($(window).width() < 767 ) {
      //$carousel.slick('unslick');
  //};
//
  //$(window).resize(function() {
    //if ($(window).width() < 767 ) {
        //$carousel.slick('unslick');
    //};
  //});
});

