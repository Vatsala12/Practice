$(document).ready(function() {

  var filters = ["Leadership", "Strategy", "Design", "Production", "Social", "Logistics"];

  var currentFilter = filters[0];
  var currentPerson = 1;
  var numItems = 0;

  assignIds();
  changeFilters();
  changeCounter();

  //$('.ourpeople__bottombar ul .'+currentFilter+'.id'+currentPerson+' a').click();
  cyclePerson();

	$('.tabnav a').click(function(e) {
      e.preventDefault();
      $('.tabnav a').removeClass('sel');
      $(this).addClass('sel');
      //setFilters($(this).find('div').html());
      setFilters($(this).attr('data-filter'));
      changeFilters();
      changeCounter();
  });

  $('.ourpeople__bottombar li a').click(function(e) {
      e.preventDefault();
      $('.ourpeople__bottombar li a').removeClass('sel');
      $(this).addClass('sel');
      var newname = $(this).html();
      var newtitle = $(this).parent().data('title');
      var newphoto = $(this).parent().data('photo');
      var newtext = $(this).parent().data('text');
      var newslug = $(this).attr('href');
      changePeople(newname, newtitle, newphoto, newtext, newslug);
      currentPerson = $(this).data('id');
      changeCounter();
  });

  $('.ourpeople__biotitle__nav--top').click(function(e) {
      e.preventDefault();
      if(currentPerson>1) {
        currentPerson--;
        } else {
            currentPerson = numItems;
        }
        cyclePerson();
  });

  $('.ourpeople__biotitle__nav--bottom').click(function(e) {
      e.preventDefault();
      if(currentPerson<numItems) {
        currentPerson++;
      } else {
        currentPerson = 1;
      }
      cyclePerson();
  });


  function cyclePerson() {
    // if(currentPerson==numItems) {
    //   $('.ourpeople__biotitle__nav--bottom').addClass('noArrow');
    // } else {
    //   $('.ourpeople__biotitle__nav--bottom').removeClass('noArrow');
    // }

    // if(currentPerson==1) {
    //   $('.ourpeople__biotitle__nav--top').addClass('noArrow');
    // } else {
    //   $('.ourpeople__biotitle__nav--top').removeClass('noArrow');
    // }

    //if(currentPerson>numItems) {
      //currentPerson = 1;
    //}
    //if(currentPerson<1) {
      //currentPerson = numItems;
    //}
    $('.ourpeople__bottombar ul .'+currentFilter+'.id'+currentPerson+' a').click();
  }

  function changeFilters() {
    currentPerson = 1;
    $('.ourpeople__bottombar ul li').hide();
    $('.ourpeople__bottombar ul .'+currentFilter).fadeIn();
    $('.ourpeople__bottombar ul .'+currentFilter+'.id'+currentPerson+' a').click();

    $('.ourpeople__biomobile .ourpeople__biotext').hide();
    $('.ourpeople__biomobile .ourpeople__photo').hide();
    $('.ourpeople__biomobile .'+currentFilter).show();

    // $('.ourpeople__biotitle__nav--bottom').removeClass('noArrow');
    // $('.ourpeople__biotitle__nav--top').addClass('noArrow');

  }

  function setFilters(getText) {
    //var temp = getText.split('<span></span>');
    //currentFilter = temp[0];
    currentFilter = getText;
    numItems = $('.ourpeople__bottombar .'+currentFilter).length;
  }

  function changePeople(newname, newtitle, newphoto, newtext, newslug) {
    $('.ourpeople__biodesktop .ourpeople__biotitle h3').html(newname);
    $('.ourpeople__biodesktop .ourpeople__biotitle p').html(newtitle);
    $('.ourpeople__biodesktop .ourpeople__biotext .inner-page__gray').html(newtext);
    $('.ourpeople__biodesktop .ourpeople__photo').css('background-image', 'url("'+newphoto+'")');

    $('.ourpeople__biodesktop .ourpeople__photo h3').hide();
    $('.ourpeople__biodesktop .ourpeople__photo p').hide();
    $('.ourpeople__biodesktop .ourpeople__biotext .inner-page__gray').hide();

    $('.ourpeople__biodesktop .ourpeople__photo h3').fadeIn();
    $('.ourpeople__biodesktop .ourpeople__photo p').fadeIn();
    $('.ourpeople__biodesktop .ourpeople__photo__fader').show();
    $('.ourpeople__biodesktop .ourpeople__photo__fader').fadeOut();
    $('.ourpeople__biodesktop .ourpeople__biotext .inner-page__gray').fadeIn();
    window.location.hash = newslug;
  }

  function changeCounter() {
    numItems = $('.ourpeople__bottombar .'+currentFilter).length;
    $('.ourpeople__biotitle span').html(currentPerson+' / ' + numItems);
  }

  function assignIds() {
    numType = $('.ourpeople__bottombar .'+filters[0]).length;
    for (var i = 0; i < filters.length; i++) {
      for (var ii = 0; ii <= numType+1; ii++) {
        $('.ourpeople__bottombar .'+filters[i]).eq(ii).addClass('id'+(ii+1));
        $('.ourpeople__bottombar .'+filters[i]).eq(ii).find('a').data('id', ii+1);
      }
    }
  }

  // $('.ourpeople__bottombar li a').eq(0).click();

  var hasSelectedPerson = false;
  if (window.location.hash != '') {
    var selectedPerson = $('.ourpeople__bottombar li a[href="' + window.location.hash + '"]');
    if (selectedPerson.size() > 0) {
        $('html,body').animate({
            scrollTop: $('.ourpeople').offset().top - 54
        });
        $('.tabnav a[data-filter="' + selectedPerson.parent().data('filter') + '"]').click();
        selectedPerson.click();
        hasSelectedPerson = true;
    }
  }

  if (!hasSelectedPerson)
    $('.ourpeople__bottombar li a').eq(0).click();

});

