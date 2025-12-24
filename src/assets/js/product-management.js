$(document).ready(function () {
  // Открытие модального окна при клике на кнопку "Управление остатками"
  $("#leftovers").click(function () {
    $(".product-management-grey-btn").removeClass("products-active-btn");
    $(this).addClass("products-active-btn");
    $("#dumping-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  // Открытие модального окна при клике на кнопку "Настроить предзаказ"
  $("#pre-order").click(function () {
    $(".product-management-grey-btn").removeClass("products-active-btn");
    $(this).addClass("products-active-btn");
    $("#preorder-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  // Открытие модального окна при клике на кнопку "Настроить мин. остатки"
  $("#set-up-balances").click(function () {
    $(".product-management-grey-btn").removeClass("products-active-btn");
    $(this).addClass("products-active-btn");
    $("#balances-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  // Открытие модального окна при клике на кнопку "Снять с продажи"
  $("#remove-from-sale").click(function () {
    $(".product-management-grey-btn").removeClass("products-active-btn");
    $(this).addClass("products-active-btn");
    $("#remove-from-sale-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  // Закрытие модального окна при клике на оверлей (используем делегирование)
  $(document).on("click", ".modal-overlay", function () {
    $(".product-management-grey-btn").removeClass("products-active-btn");
    $("#dumping-modal-box").removeClass("modal-active-profi");
    $("#preorder-modal-box").removeClass("modal-active-profi");
    $("#balances-modal-box").removeClass("modal-active-profi");
    $("#remove-from-sale-modal-box").removeClass("modal-active-profi");
    $("body").removeClass("no-scroll");
  });

  // Закрытие модального окна при клике на кнопку закрытия (используем делегирование)
  $(document).on("click", ".btn-close", function () {
    $(".product-management-grey-btn").removeClass("products-active-btn");
    $("#dumping-modal-box").removeClass("modal-active-profi");
    $("#preorder-modal-box").removeClass("modal-active-profi");
    $("#balances-modal-box").removeClass("modal-active-profi");
    $("#remove-from-sale-modal-box").removeClass("modal-active-profi");
    $("body").removeClass("no-scroll");
  });

  // Переключение активного класса у кнопок фильтров
  $(".product-btn-profi").click(function () {
    $(".product-btn-profi").removeClass("active-filter");
    $(this).addClass("active-filter");
  });

  // Отключение/включение всех чекбоксов (кроме тех, что внутри form-switch)
  $("#mainCheckbox").click(function () {
    $(".form-check-input").not(".form-switch .form-check-input").prop("checked", this.checked);
  });
});
