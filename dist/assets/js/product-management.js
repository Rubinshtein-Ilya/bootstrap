$(document).ready(function () {
  // Открытие модального окна при клике на кнопку
  $("#leftovers").click(function () {
    console.log("Before remove:", $(".product-management-grey-btn").attr("class"));
    // Убираем активный класс со всех кнопок
    $(".product-management-grey-btn").removeClass("products-active-btn");
    console.log("After remove:", $(".product-management-grey-btn").attr("class"));
    // Добавляем активный класс к текущей кнопке
    $(this).addClass("products-active-btn");
    console.log("After add to this:", $(this).attr("class"));
    // Открываем модальное окно
    $("#dumping-modal-box").addClass("modal-active-profi");
  });

  // Закрытие модального окна при клике на оверлей
  $(".modal-overlay").click(function () {
    console.log("Overlay click - removing class");
    $(".product-management-grey-btn").removeClass("products-active-btn");
    $("#dumping-modal-box").removeClass("modal-active-profi");
  });

  // Закрытие модального окна при клике на кнопку закрытия
  $(".btn-close").click(function () {
    console.log("Close button click - removing class");
    $(".product-management-grey-btn").removeClass("products-active-btn");
    $("#dumping-modal-box").removeClass("modal-active-profi");
  });
});
