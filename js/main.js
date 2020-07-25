$(document).ready(function () {
  const iconSearch = $('.search-icon');
  const blockSearch = $('.search-block');
  const bClose = $('.close');
  const filterButton = $('.submit-filter');
  const bCloseModal = $('.modal-close');
  const bChooseIngredients = $('.button-choose-ingredients');
  const bCloseModalChooseIngredients = $('.modal-close-choose-ingredients');
  const bMobileMenu = $('.m-menu-button');
  const bHideMenu = $('.mobile-hide');
  const bAddRecipe = $('.plus');
  const bMinusIngredient = $('.minus');
  const bCloseModalAddIngredients = $('.modal-close-add-ingredients');
  // const bAddIngredient = $('.add-ingredient-image');
  const htmlAddIngredientBlock = "<div class='add-ingredients-inputs animate__animated animate__fadeInDown'> <input type='text' class='add-ingredients-input' placeholder='Название'> <input type='text' class='add-ingredients-input' placeholder='Масса'> <img src='img/add-ingredint.svg' alt='Добавить ингредиент' class='add-ingredient-image'></div>";
  const bDeleteRecipe = $('.delete');
  const bCloseModalDeleteRecipe = $('.delete-recipe-button-no');
  const bClearListProducts = $('.clear-product-button');
  let width = $(window).width();

  iconSearch.on("click", function () {
    if (width <= 576) {
      iconSearch.removeClass('search-visible');
      blockSearch.show();
    } else {
      iconSearch.removeClass('search-visible');
      blockSearch.toggleClass('search-visible');
    }

  });
  bClose.on("click", function () {
    if (width <= 576) {
      iconSearch.toggleClass('search-visible');
      blockSearch.hide();
    } else {
      iconSearch.toggleClass('search-visible');
      blockSearch.removeClass('search-visible');
    }
  });
  filterButton.on("click", function () {
    $('.modal').toggleClass('is-open-modal');
  });
  bCloseModal.on("click", function () {
    $('.modal').toggleClass('is-open-modal');
  });
  bChooseIngredients.on("click", function () {
    $('.modal-choose-ingredients').toggleClass('is-open-modal');
  });
  bCloseModalChooseIngredients.on("click", function () {
    $('.modal-choose-ingredients').toggleClass('is-open-modal');
    $('.modal').toggleClass('is-open-modal');
  });
  bMobileMenu.on("click", function () {
    $('.main-header').toggleClass('is-open-mobile-menu');
    $('body').toggleClass('no-scroll');
  });
  bHideMenu.on("click", function () {
    $('.main-header').toggleClass('animate__lightSpeedOutRight');
    setTimeout(function () {
      $('.main-header').toggleClass('animate__lightSpeedOutRight');
      $('.main-header').toggleClass('is-open-mobile-menu');
      $('body').toggleClass('no-scroll');
    }, 1000);
  });
  bAddRecipe.on("click", function () {
    $('.modal-add-ingredients').toggleClass('is-open-modal');
  });
  bCloseModalAddIngredients.on("click", function () {
    $('.modal-add-ingredients').toggleClass('is-open-modal');
  });
  // Блок с добавлением ингредиентов РЕФАКТОРИНГ
  $('.add-ingredient-input-content').delegate('.add-ingredient-image', 'click', function () {
    $(this).removeClass('add-ingredient-image');
    $(this).toggleClass('add-ingredient-image-hide');
    $('.add-ingredient-input-content').append(htmlAddIngredientBlock);
  });
  
  $('.add-ingredient-input-content').delegate('.add-ingredient-image-hide', 'click', function () {
    $(this).parent('.add-ingredients-inputs').toggleClass('add-ingredient-input-hide');
  });
  // Блок с добавлением ингредиентов РЕФАКТОРИНГ

  bDeleteRecipe.on("click", function () {
    $('.modal-delete-recipe').toggleClass('is-open-modal');
  });
  bCloseModalDeleteRecipe.on("click", function () {
    $('.modal-delete-recipe').toggleClass('is-open-modal');
  });
  bMinusIngredient.on("click", function () {
    $('.delete-ingredient-in-recalculation-row-text').toggleClass('is-visible-delete-ingredient-in-recalculation-row-text');
  });
  $('.recalculation-row').delegate('.delete-ingredient-in-recalculation-row-text', 'click', function () {
    $(this).parent('.recalculation-row').hide();
  });
  $('.list-products-function').delegate('.cross-out-product-button', 'click', function () {
    $(this).removeClass('cross-out-product-button');
    $(this).text('Готово');      
    $(this).toggleClass('cross-out-success-product-button');                                                  
    // $(this).parent('.recalculation-row').hide();
    $('.hint-cross-out-product').toggleClass('is-open-list-products');
    $('.name-product').toggleClass('pre-cross-out-product');
    // Меняем кнопку на "Готово"
  });

  $('.list-products-function').delegate('.cross-out-success-product-button', 'click', function () {
    $(this).removeClass('cross-out-success-product-button');
    $(this).text('Зачеркнуть');      
    $(this).toggleClass('cross-out-product-button');                                                  
    $('.hint-cross-out-product').toggleClass('is-open-list-products');
    $('.name-product').toggleClass('pre-cross-out-product');
    // Меняем кнопку на "Зачеркивание"
  });

  $('.list-products-block').delegate('.pre-cross-out-product', 'click', function () {
    $(this).toggleClass('cross-out-product');     
  });
  bClearListProducts.on("click", function () {
    $('.list-products-block').text('');
  });

});