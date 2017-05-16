$(document).ready(function() {
  var manorIndex = 0;
  changePhoto();
  //var manor_name.length;

  //$('.manor__nav__btn--top').click(function(e) {
      //e.preventDefault();
      //manorIndex++;
      //limitIndex();
      //changePhoto();
  //});
//
  //$('.manor__nav__btn--bottom').click(function(e) {
      //e.preventDefault();
      //manorIndex--;
      //limitIndex();
      //changePhoto();
  //});

  function limitIndex() {
    if(manorIndex>=manor_name.length) {
      manorIndex = 0;
    }
    if(manorIndex<0) {
      manorIndex = manor_name.length-1;
    }
    //console.log(manorIndex);
  }


  function changePhoto(newname, newtitle, newphoto, newtext) {
    //$('.manor__title h3').html(manor_title[manorIndex]);
    $('.manor__nav__right').html('<p>'+manor_name[manorIndex]+'</p>');
    $('.manor').css('background-image', 'url("' + URL_BASE + 'assets/img/cms-fullsize/'+manor_photo[manorIndex]+'")');
  }

});

