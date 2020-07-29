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
  const bAddProductInList = $('.add-product-button');
  const bRegistrAddForm = $('.registr-button-registration');
  const bSignInAddForm = $('.registr-button-sign-in-up');
  const bDeleteIngredientInAddRecipe = $('.delete-ingredient-in-add-recipe-button');
  const bAddIngredientInAddRecipe = $('.add-ingredient-in-add-recipe-button');
  const bCloseModalAddIngredientInAddRecipe = $('.modal-close-add-ingredients-in-add-recipe');
  const bDeleteImageRecipe = $('.delete-image-in-add-recipe-button'); 
  const bAddCategory = $('.manage-link-add-category');
  const bCloseModalAddCategory = $('.modal-close-add-category');
  const bViewCategory = $('.my-category');
  const bCloseModalViewCategory = $('.modal-close-view-category');

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

  randomHelpTextInAddCategory();

  bAddCategory.on("click", function () {
    $('.modal-add-category').toggleClass('is-open-modal');
  });
  bCloseModalAddCategory.on("click", function () {
    $('.modal-add-category').toggleClass('is-open-modal');
  });
  bViewCategory.on("click", function () {
    $('.modal-view-category').toggleClass('is-open-modal');
    $('body').toggleClass('no-scroll');
  });
  bCloseModalViewCategory.on("click", function () {
    $('.modal-view-category').toggleClass('is-open-modal');
    $('body').toggleClass('no-scroll');
  });

  // Скрываем меню при нажатии на любую ссылку в версиях шириной <=768 ВОЗМОЖЕН РЕФАКТОРИНГ
  if (width <=768) {
    $('.navigation-link').on("click", function () {
      $('.main-header').toggleClass('is-open-mobile-menu');
    });
  }
  // Скрываем меню при нажатии на любую ссылку в версиях шириной <=768

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
    $('.modal-clear-list-products').toggleClass('is-open-modal');
  });
  $('.clear-list-products-button-no').on("click", function () {
    $('.modal-clear-list-products').toggleClass('is-open-modal');
  });
  $('.clear-list-products-button-yes').on("click", function () {
    $('.list-products-block').text('');
    $('.modal-clear-list-products').toggleClass('is-open-modal');
  }); 
  // Завтра начать с кнопки "Добавить", реализовать добавление продукта "Название" "Количество"
  bAddProductInList.on("click", function () {
    let textProduct = $('.add-product-input').val();
    let textQuantity = $('.add-product-input-quantity').val();
    if (textProduct === '' || (textProduct === '' && textQuantity === '')) {
      return false;
    }
    else {
      let htmlNameProduct = "<span class='name-product'>" + textProduct + " - <span class='name-product-quantity'>" + textQuantity + "</span><span>;</span></span>";
      $('.list-products-block').append(htmlNameProduct);
      $('.add-product-input').val('');
      $('.add-product-input-quantity').val('');
    }
  }); 

  bRegistrAddForm.on("click", function () {
    $('.registr-row-text-display-none').toggleClass('registr-row-text-display-flex');
    $('.registr-row-text').toggleClass('registr-row-text-display-none');
    $('.registr-button-sign-in').toggleClass('registr-row-text-display-none');
    $('.registr-button-registration').toggleClass('registr-row-text-display-none');
  });
  bSignInAddForm.on("click", function () {
    $('.registr-row-text-display-none').removeClass('registr-row-text-display-none');
    $('.registr-row-text-display-flex').toggleClass('registr-row-text-display-none');
    $('.registr-row-text-display-none').toggleClass('registr-row-text-display-flex');
  });
  bDeleteIngredientInAddRecipe.on("click", function () {
    $('.delete-ingredient-in-add-recipe').toggleClass('is-visible-delete-ingredient-in-recalculation-row-text');
  });
  $('.list-ingredients-text').delegate('.delete-ingredient-in-add-recipe', 'click', function () {
    $(this).parent('.list-ingredients-text').hide();
  });
  bAddIngredientInAddRecipe.on("click", function () {
    $('.modal-add-ingredients-in-add-recipe').toggleClass('is-open-modal');
  });
  bCloseModalAddIngredientInAddRecipe.on("click", function () {
    $('.modal-add-ingredients-in-add-recipe').toggleClass('is-open-modal');
  });
  bDeleteImageRecipe.on("click", function () {
    $('.modal-delete-recipe').toggleClass('is-open-modal');
  });
  $('.pre-description-row').delegate('.add-product-in-list-shop', 'click', function () {
    $(this).text('Готово');
    $(this).toggleClass('add-product-in-list-shop-success');
    $('.row-dynamics-ingredients-text').toggleClass('row-dynamics-ingredients-text-pre-add-in-shop-list');
    // Меняем кнопку на "Готово"
  });

  $('.pre-description-row').delegate('.add-product-in-list-shop-success', 'click', function () {
    $(this).removeClass('cross-out-success-product-button');
    $(this).text('Добавить в список покупок');
    $('.row-dynamics-ingredients-text').removeClass('row-dynamics-ingredients-text-pre-add-in-shop-list');
    $('.row-dynamics-ingredients-text').removeClass('row-dynamics-ingredients-text-active-add-in-shop-list');
    // Меняем кнопку на "Добавить в список покупок"
  });
  $('.pre-description-row').delegate('.row-dynamics-ingredients-text-pre-add-in-shop-list', 'click', function () {
    $(this).toggleClass('row-dynamics-ingredients-text-active-add-in-shop-list');
  });

  function randomHelpTextInAddCategory() {
    let listWords = ['Выпечка', 'Гарниры', 'Жаркое', 'Десерты', 'Овощное', 'Завтрак'];
    let word = listWords[getRandomInt(0, 6)];
    $('.add-category-help-text').text(word);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
});