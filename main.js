$(document).ready(function () {
  const iconSearch  = $('.search-icon');
  const blockSearch  = $('.search-block'); 
  const bClose = $('.close'); 
  const filterButton = $('.submit-filter');
  const bCloseModal = $('.modal-close');
  const bChooseIngredients = $('.button-choose-ingredients');
  const bCloseModalChooseIngredients = $('.modal-close-choose-ingredients');
  const bMobileMenu = $('.m-menu-button');
  const bHideMenu = $('.mobile-hide');
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
  filterButton.on("click", function() {
    $('.modal').toggleClass('is-open-modal');
  });
  bCloseModal.on("click", function() {
    $('.modal').toggleClass('is-open-modal');
  });
  bChooseIngredients.on("click", function() {
    $('.modal-choose-ingredients').toggleClass('is-open-modal');
  });
  bCloseModalChooseIngredients.on("click", function() {
    $('.modal-choose-ingredients').toggleClass('is-open-modal');
    $('.modal').toggleClass('is-open-modal');
  });
  bMobileMenu.on("click", function() {
    $('.main-header').toggleClass('is-open-mobile-menu');
    $('body').toggleClass('no-scroll');
    blockSearch.hide();
    iconSearch.toggleClass('search-visible');
  });
  bHideMenu.on("click", function() {
    $('.main-header').toggleClass('animate__lightSpeedOutRight');
    setTimeout(function(){
      $('.main-header').toggleClass('animate__lightSpeedOutRight');
      $('.main-header').toggleClass('is-open-mobile-menu');
      $('body').toggleClass('no-scroll');
    }, 1000);
  });
  
  


}); 