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

  // Закрытие модального окна при клике на оверлей (используем делегирование)
  $(document).on("click", ".modal-overlay", function () {
    $(".product-management-grey-btn").removeClass("products-active-btn");
    $("#dumping-modal-box").removeClass("modal-active-profi");
    $("#preorder-modal-box").removeClass("modal-active-profi");
    $("#balances-modal-box").removeClass("modal-active-profi");
    $("body").removeClass("no-scroll");
  });

  // Закрытие модального окна при клике на кнопку закрытия (используем делегирование)
  $(document).on("click", ".btn-close", function () {
    $(".product-management-grey-btn").removeClass("products-active-btn");
    $("#dumping-modal-box").removeClass("modal-active-profi");
    $("#preorder-modal-box").removeClass("modal-active-profi");
    $("#balances-modal-box").removeClass("modal-active-profi");
    $("body").removeClass("no-scroll");
  });
});
