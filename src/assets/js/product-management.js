$(document).ready(function () {
  // Открытие модального окна при клике на кнопку
  $("#leftovers").click(function () {
    // Убираем активный класс со всех кнопок
    $(".product-management-grey-btn").removeClass("products-active-btn");

    // Добавляем активный класс к текущей кнопке
    $(this).addClass("products-active-btn");

    // Открываем модальное окно
    $("#dumping-modal-box").addClass("modal-active-profi");
  });

  // Закрытие модального окна при клике на оверлей
  $(".modal-overlay").click(function () {
    $(".product-management-grey-btn").removeClass("products-active-btn");
    $("#dumping-modal-box").removeClass("modal-active-profi");
  });

  // Закрытие модального окна при клике на кнопку закрытия
  $(".btn-close").click(function () {
    $(".product-management-grey-btn").removeClass("products-active-btn");
    $("#dumping-modal-box").removeClass("modal-active-profi");
  });
});
