$(document).ready(function () {
  const iconSearch  = $('.search-icon');
  const blockSearch  = $('.search-block'); 
  const bClose = $('.close'); 
  let width = $(window).width(); 

  iconSearch.on("click", function() {
    if(width <= 576) {
      iconSearch.removeClass('search-visible');
      blockSearch.show();
    }
    else {
      iconSearch.removeClass('search-visible');
      blockSearch.toggleClass('search-visible');
    }

  });
  bClose.on("click", function() {
    if(width <= 576) {
      iconSearch.toggleClass('search-visible');
      blockSearch.hide();
    }
    else {
      iconSearch.toggleClass('search-visible');
      blockSearch.removeClass('search-visible');
    }

  });
}); 