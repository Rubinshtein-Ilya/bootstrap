const products = [
  {
    warehouse: "PP1",
    article: "123456789",
    code: "123456789",
    title: "Детский Велик",
    price: "10 000 ₸",
    remainder: "34",
    preorder: "34",
    dumping: "Не настроен",
    status: "warning",
    stock: "34",
    min: "34",
    total: "34",
    avr_sales: "34",
    days_since_last_sale: "34",
    last_sale: "16.10.2025",
    last_price: "34",
    parent: "34",
    present: "34",
  },
  {
    warehouse: "PP1",
    article: "123456789",
    code: "123456789",
    title: "Детский Велик",
    price: "10 000 ₸",
    remainder: "34",
    preorder: "34",
    dumping: "Не настроен",
    status: "preorder",
    stock: "34",
    min: "34",
    total: "34",
    avr_sales: "34",
    days_since_last_sale: "34",
    last_sale: "16.10.2025",
    last_price: "34",
    parent: "34",
    present: "34",
  },
  {
    warehouse: "PP1",
    article: "123456789",
    code: "123456789",
    title: "Детский Велик",
    price: "10 000 ₸",
    remainder: "34",
    preorder: "34",
    dumping: "Не настроен",
    status: "success",
    stock: "34",
    min: "34",
    total: "34",
    avr_sales: "34",
    days_since_last_sale: "34",
    last_sale: "16.10.2025",
    last_price: "34",
    parent: "34",
    present: "34",
  },
  {
    warehouse: "PP1",
    article: "123456789",
    code: "123456789",
    title: "Детский Велик",
    price: "10 000 ₸",
    remainder: "34",
    preorder: "34",
    dumping: "Не настроен",
    status: "success",
    stock: "34",
    min: "34",
    total: "34",
    avr_sales: "34",
    days_since_last_sale: "34",
    last_sale: "16.10.2025",
    last_price: "34",
    parent: "34",
    present: "34",
  },
];

function createDesktopProduct(product) {
  return `
  <tr>
  <th scope="row">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="card" />
      <label class="form-check-label" for="card"></label>
    </div>
  </th>
  <td>
    <img src="assets/images/profibot/bike.png" alt="product image" />
  </td>
  <td>${product.warehouse}</td>
  <td class="text-primary fw-bold">${product.article}</td>
  <td class="text-primary fw-bold">${product.code}</td>
  <td>
    <input type="text" class="form-control table-input-profi" placeholder="" value="${product.title}" />
  </td>
  <td class="fw-bold">${product.price}</td>
  <td>${product.remainder}</td>
  <td>${product.preorder}</td>
  <td>
    <div class="d-flex align-items-center gap-1">
      <div class="td-profi-text">Не настроен</div>
      <img src="assets/images/profibot/edit.svg" alt="Edit icon" style="cursor: pointer" />
    </div>
  </td>
  <td class="text-start">
    <div class="d-flex align-items-center gap-1">
      <span class="badge-profi badge-profi-${product.status}">
      ${product.status === "success" ? "В наличии" : product.status === "warning" ? "Сняты с продажи" : "Предзаказ"}
      </span>

      <div class="dropdown">
        <button
          class="badge-btn-profi cursor-pointer dropdown-toggle"
          type="button"
          id="dropdownMenuButton7"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ⋮
        </button>
        <ul class="dropdown-menu h-fit" aria-labelledby="dropdownMenuButton7">
          <li><a class="dropdown-item" href="#">Списать остатки</a></li>
          <li><a class="dropdown-item" href="#">Настроить предзаказ</a></li>
          <li><a class="dropdown-item" href="#">Снять с продажи</a></li>
          <li><a class="dropdown-item" href="#">Настроить мин. остатки</a></li>
        </ul>
      </div>
    </div>
  </td>
  <td>${product.stock}</td>
  <td>${product.min}</td>
  <td>${product.total}</td>
  <td>${product.avr_sales}</td>
  <td>${product.days_since_last_sale}</td>
  <td>${product.last_sale}</td>
  <td>${product.last_price}</td>
  <td>${product.parent}</td>
  <td>${product.present}</td>
</tr>
  `;
}

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

  // Добавляем карточки товаров
  const $tpagination = $("#t-pagination");
  products.forEach((product) => {
    $tpagination.before(createDesktopProduct(product));
  });
});
