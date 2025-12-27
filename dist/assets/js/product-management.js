const products = [
  {
    id: 1,
    warehouse: "PP1",
    article: "987654321",
    code: "KZ001234",
    title: "Детский Велосипед",
    price: "45 000 ₸",
    remainder: "12",
    preorder: "5",
    dumping: "Не настроен",
    status: "warning",
    stock: "15",
    min: "10",
    total: "120",
    avr_sales: "25",
    days_since_last_sale: "5",
    last_sale: "20.12.2024",
    last_price: "43 000 ₸",
    parent: "Велосипеды",
    present: "2",
    withDumping: true,
  },
  {
    id: 2,
    warehouse: "PP2",
    article: "123456789",
    code: "KZ005678",
    title: "Самокат взрослый",
    price: "25 000 ₸",
    remainder: "8",
    preorder: "15",
    dumping: "Настроен",
    status: "preorder",
    stock: "7",
    min: "5",
    total: "85",
    avr_sales: "18",
    days_since_last_sale: "12",
    last_sale: "14.12.2024",
    last_price: "24 500 ₸",
    parent: "Самокаты",
    present: "5",
    withDumping: false,
  },
  {
    id: 3,
    warehouse: "PP1",
    article: "555666777",
    code: "KZ009012",
    title: "Электросамокат",
    price: "120 000 ₸",
    remainder: "3",
    preorder: "0",
    dumping: "Не настроен",
    status: "success",
    stock: "30",
    min: "2",
    total: "45",
    avr_sales: "8",
    days_since_last_sale: "2",
    last_sale: "24.12.2024",
    last_price: "115 000 ₸",
    parent: "Электротранспорт",
    present: "1",
    withDumping: false,
  },
  {
    id: 4,
    warehouse: "PP3",
    article: "111222333",
    code: "KZ003456",
    title: "Ролики детские",
    price: "18 500 ₸",
    remainder: "25",
    preorder: "10",
    dumping: "Настроен",
    status: "success",
    stock: "45",
    min: "15",
    total: "200",
    avr_sales: "42",
    days_since_last_sale: "1",
    last_sale: "25.12.2024",
    last_price: "18 000 ₸",
    parent: "Ролики",
    present: "8",
    withDumping: true,
  },
  {
    id: 5,
    warehouse: "PP2",
    article: "444555666",
    code: "KZ007890",
    title: "Скейтборд профессиональный",
    price: "35 000 ₸",
    remainder: "6",
    preorder: "3",
    dumping: "Не настроен",
    status: "warning",
    stock: "10",
    min: "4",
    total: "65",
    avr_sales: "12",
    days_since_last_sale: "8",
    last_sale: "18.12.2024",
    last_price: "34 500 ₸",
    parent: "Скейтборды",
    present: "3",
    withDumping: false,
  },
  {
    id: 6,
    warehouse: "PP1",
    article: "777888999",
    code: "KZ002345",
    title: "Гироскутер",
    price: "85 000 ₸",
    remainder: "15",
    preorder: "7",
    dumping: "Настроен",
    status: "success",
    stock: "20",
    min: "8",
    total: "95",
    avr_sales: "20",
    days_since_last_sale: "3",
    last_sale: "23.12.2024",
    last_price: "82 000 ₸",
    parent: "Электротранспорт",
    present: "4",
    withDumping: true,
  },
  {
    id: 7,
    warehouse: "PP3",
    article: "222333444",
    code: "KZ006789",
    title: "Беговел для малышей",
    price: "15 000 ₸",
    remainder: "30",
    preorder: "12",
    dumping: "Не настроен",
    status: "success",
    stock: "60",
    min: "20",
    total: "310",
    avr_sales: "55",
    days_since_last_sale: "0",
    last_sale: "26.12.2024",
    last_price: "14 800 ₸",
    parent: "Беговелы",
    present: "10",
    withDumping: false,
  },
  {
    id: 8,
    warehouse: "PP2",
    article: "666777888",
    code: "KZ004567",
    title: "Трюковой самокат",
    price: "32 000 ₸",
    remainder: "4",
    preorder: "8",
    dumping: "Настроен",
    status: "preorder",
    stock: "12",
    min: "6",
    total: "72",
    avr_sales: "15",
    days_since_last_sale: "15",
    last_sale: "11.12.2024",
    last_price: "31 500 ₸",
    parent: "Самокаты",
    present: "6",
    withDumping: true,
  },
];

function createDesktopProduct(product) {
  return `
  <tr>
  <th scope="row" data-column="checkbox">
    <div class="form-check">
      <input class="form-check-input" style="border: 1px solid #80808073;" type="checkbox" value="" id=${
        "card-" + product.id
      } />
      <label class="form-check-label " for="card"></label>
    </div>
  </th>
  <td data-column="image" class='hidden-overflow-cell'>
    <img src="assets/images/profibot/bike.png" alt="product image" />
  </td>
  <td data-column="warehouse" class="hidden-overflow-cell">${product.warehouse}</td>
  <td data-column="article" class="text-primary fw-bold hidden-overflow-cell">${product.article}</td>
  <td data-column="code" class="text-primary fw-bold hidden-overflow-cell">${product.code}</td>
   <td data-column="title" class="hidden-overflow-cell">
    <textarea class="form-control table-input-profi auto-resize" rows="1">${product.title}</textarea>
  </td>
  <td data-column="price" class="fw-bold hidden-overflow-cell">
    <textarea class="form-control table-input-profi auto-resize fw-bold price-textarea" rows="1">${
      product.price
    }</textarea>
  </td>
  <td data-column="remainder" class="hidden-overflow-cell">${product.remainder}</td>
  <td data-column="preorder" class="hidden-overflow-cell">${product.preorder}</td>
  <td data-column="dumping" class="hidden-overflow-cell">
    ${
      product.withDumping
        ? `<div class="d-flex align-items-center">
          <div class="d-flex align-items-center gap-1">
            <div class="form-check form-switch">
              <input
                class="form-check-input form-check-input-profi"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexSwitchCheckChecked"></label>
            </div>
            <div class="d-flex flex-column align-items-start">
              <div class="td-profi-text">7-10 поз.</div>
              <div class="td-profi-text">750 мин. цена</div>
            </div>
            <img src="assets/images/profibot/edit.svg" alt="Edit icon" style="cursor: pointer" class="dumping-btn" />
          </div>
        </div>`
        : `<div class="d-flex align-items-center gap-1">
          <div class="td-profi-text">Не настроен</div>
          <img src="assets/images/profibot/edit.svg" alt="Edit icon" style="cursor: pointer" class="dumping-btn" />
        </div>`
    }
  </td>
  <td data-column="status" class="text-start ">
    <div class="d-flex align-items-center gap-1">
      <span class="badge-profi badge-profi-${product.status}">
      ${product.status === "success" ? "В наличии" : product.status === "warning" ? "Сняты с продажи" : "Предзаказ"}
      </span>

      <div class="dropstart">
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
         <li class="remove-overs-dropdow-item dropdown-item">Списать остатки</li>
     
          <li class="preorder-dropdow-item dropdown-item">Настроить предзаказ</li>
          <li class="remove-from-sale-dropdow-item dropdown-item">Снять с продажи</li>
          <li class="balances-dropdow-item dropdown-item">Настроить мин. остатки</li>
        </ul>
      </div>
    </div>
  </td>
  <td data-column="stock" class="hidden-overflow-cell">${product.stock}</td>
  <td data-column="min" class="hidden-overflow-cell">${product.min}</td>
  <td data-column="total" class="hidden-overflow-cell">${product.total}</td>
  <td data-column="avr_sales" class="hidden-overflow-cell">${product.avr_sales}</td>
  <td data-column="days_since_last_sale" class="hidden-overflow-cell">${product.days_since_last_sale}</td>
  <td data-column="last_sale" class="hidden-overflow-cell">${product.last_sale}</td>
  <td data-column="last_price" class="hidden-overflow-cell">${product.last_price}</td>
  <td data-column="parent" class="hidden-overflow-cell">${product.parent}</td>
  <td data-column="present" class="hidden-overflow-cell">${product.present}</td>
</tr>
  `;
}

function createProductMobile(product) {
  return `
  <div class="w-100 d-flex gap-3 p-3 border-bottom">
    <div>
      <div class="form-check">
        <input class="form-check-input" style="border: 1px solid #80808073;" type="checkbox" value="" id="${
          "mobile-card-" + product.id
        }" />
        <label class="form-check-label" for="${"mobile-card-" + product.id}"></label>
      </div>
    </div>
    <div class="w-100 d-flex flex-column gap-12">
      <div class="d-flex w-100% gap-2 align-items-center mobile-card-table-row">
        <div>
          <img src="assets/images/profibot/bike.png" alt="product image" width="42" height="42" />
        </div>
        <textarea class="form-control table-input-profi auto-resize" rows="1">${product.title}</textarea>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Склад</div>
        <div>${product.warehouse}</div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Артикул</div>
        <div class="text-primary fw-bold">${product.article}</div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Код каспи</div>
        <div class="text-primary fw-bold">${product.code}</div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Цена</div>
         <textarea class="form-control table-input-profi-mobile auto-resize fw-bold price-textarea" rows="1">${
           product.price
         }</textarea>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Остаток</div>
        <div>${product.remainder}</div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Предзаказ</div>
        <div>${product.preorder}</div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Статус</div>
        <div><span class="badge-profi-mobile badge-profi-${product.status}">
        ${product.status === "success" ? "В наличии" : product.status === "warning" ? "Сняты с продажи" : "Предзаказ"}
        </span></div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Демпинг</div>
         ${
           product.withDumping
             ? `<div class="d-flex align-items-center">
          <div class="d-flex align-items-center gap-1">
            <div class="form-check form-switch">
              <input
                class="form-check-input form-check-input-profi"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexSwitchCheckChecked"></label>
            </div>
            <div class="d-flex flex-column align-items-start">
              <div class="td-profi-text">7-10 поз.</div>
              <div class="td-profi-text">750 мин. цена</div>
            </div>
            <img src="assets/images/profibot/edit.svg" alt="Edit icon" style="cursor: pointer" class="dumping-btn" />
          </div>
        </div>`
             : `<div class="d-flex align-items-center gap-1">
          <div class="td-profi-text">Не настроен</div>
          <img src="assets/images/profibot/edit.svg" alt="Edit icon" style="cursor: pointer" class="dumping-btn" />
        </div>`
         }
       
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Действия</div>
       <div class="dropup">
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
           <li class="remove-overs-dropdow-item dropdown-item">Списать остатки</li>
        
          <li class="preorder-dropdow-item dropdown-item">Настроить предзаказ</li>
          <li class="remove-from-sale-dropdow-item dropdown-item">Снять с продажи</li>
          <li class="balances-dropdow-item dropdown-item">Настроить мин. остатки</li>
        </ul>
      </div>
      </div>
    </div>
  </div>
  `;
}

$(document).ready(function () {
  // Открытие модального окна при клике на кнопку "Управление остатками"
  $("#leftovers").click(function () {
    $("#dumping-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  // Открытие модального окна при клике на кнопку "Настроить предзаказ"
  $("#pre-order").click(function () {
    $("#preorder-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  // Открытие модального окна при клике на кнопку "Настроить мин. остатки"
  $("#set-up-balances").click(function () {
    $("#balances-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  // Открытие модального окна при клике на кнопку "Снять с продажи"
  $("#remove-from-sale").click(function () {
    $("#remove-from-sale-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  $("#remove-overs").click(function () {
    $("#remove-overs-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  // Открытие модальных окон при клике на элементы dropdown
  $(document).on("click", ".remove-overs-dropdow-item", function () {
    $("#remove-overs-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });
  $(document).on("click", ".dumping-dropdow-item", function () {
    $("#dumping-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  $(document).on("click", ".preorder-dropdow-item", function () {
    $("#preorder-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  $(document).on("click", ".remove-from-sale-dropdow-item", function () {
    $("#remove-from-sale-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  $(document).on("click", ".balances-dropdow-item", function () {
    $("#balances-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  // Открытие модального окна при клике на иконку в графе "Дэмпинг"
  $(document).on("click", ".dumping-btn", function () {
    $("#dumping-modal-box").addClass("modal-active-profi");
    $("body").addClass("no-scroll");
  });

  // Закрытие модального окна при клике на оверлей (используем делегирование)
  $(document).on("click", ".modal-overlay", function () {
    $("#dumping-modal-box").removeClass("modal-active-profi");
    $("#preorder-modal-box").removeClass("modal-active-profi");
    $("#balances-modal-box").removeClass("modal-active-profi");
    $("#remove-from-sale-modal-box").removeClass("modal-active-profi");
    $("#remove-overs-modal-box").removeClass("modal-active-profi");
    $("body").removeClass("no-scroll");
  });

  // Закрытие модального окна при клике на кнопку закрытия (используем делегирование)
  $(document).on("click", ".btn-close", function () {
    $("#dumping-modal-box").removeClass("modal-active-profi");
    $("#preorder-modal-box").removeClass("modal-active-profi");
    $("#balances-modal-box").removeClass("modal-active-profi");
    $("#remove-from-sale-modal-box").removeClass("modal-active-profi");
    $("#remove-overs-modal-box").removeClass("modal-active-profi");
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

  // Обработчик для мобильного главного чекбокса (используем делегирование)
  $(document).on("click", "#mainCheckboxMobile", function () {
    $(".form-check-input").not(".form-switch .form-check-input").prop("checked", this.checked);
  });
  // Добавляем карточки товаров
  const $tpagination = $("#t-pagination");
  const $tmobilepagination = $("#mobile-pagination");
  products.forEach((product) => {
    $tpagination.before(createDesktopProduct(product));
    $tmobilepagination.before(createProductMobile(product));
  });

  // Автоматическое изменение высоты textarea
  function autoResizeTextarea() {
    $(this).css("height", "auto");
    $(this).css("height", this.scrollHeight + "px");
  }

  // Функция проверки состояния чекбоксов и управления кнопками
  function updateButtonsState() {
    // Проверяем, есть ли хоть один выбранный чекбокс (кроме mainCheckbox и form-switch)
    const hasChecked =
      $(".form-check-input").not("#mainCheckbox").not(".form-switch .form-check-input").filter(":checked").length > 0;

    if (hasChecked) {
      // Если есть выбранные - активируем кнопки
      $(".product-management-grey-btn").prop("disabled", false).addClass("products-active-btn");
    } else {
      // Если нет выбранных - деактивируем кнопки
      $(".product-management-grey-btn").prop("disabled", true).removeClass("products-active-btn");
    }
  }

  // Отслеживаем изменения всех чекбоксов
  $(document).on("change", ".form-check-input", function () {
    updateButtonsState();
  });

  // Применяем к существующим textarea
  $(".auto-resize").each(autoResizeTextarea);

  // Применяем при вводе текста
  $(document).on("input", ".auto-resize", autoResizeTextarea);

  // Изменения ширины колонок таблицы (после добавления товаров)
  document.querySelectorAll(".resizer").forEach((resizer) => {
    let startX, startWidth, columnName;

    resizer.addEventListener("mousedown", (e) => {
      e.preventDefault();
      startX = e.pageX;

      // Получаем th элемент (родитель resizer)
      const th = resizer.parentElement;
      startWidth = th.offsetWidth;

      // Получаем имя колонки из data-column атрибута
      columnName = th.getAttribute("data-column");

      resizer.classList.add("active");

      document.onmousemove = (e) => {
        const newWidth = startWidth + (e.pageX - startX);

        // Применяем ширину к заголовку
        th.style.width = newWidth + "px";
        th.style.minWidth = newWidth + "px";
        th.style.maxWidth = newWidth + "px";

        // Применяем ширину ко всем ячейкам с таким же data-column
        if (columnName) {
          document.querySelectorAll(`td[data-column="${columnName}"]`).forEach((td) => {
            td.style.width = newWidth + "px";
            td.style.minWidth = newWidth + "px";
            td.style.maxWidth = newWidth + "px";
          });
        }
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        resizer.classList.remove("active");
      };
    });
  });

  // Обновление времени при клике на "Загрузить товары с Kaspi"
  $("#load-products-btn").click(function () {
    $(".last-time-string").addClass("d-none");
    $("#load-products-time-progress").removeClass("d-none");
  });

  // Обновление времени при клике на "Загрузить прайс в Kaspi"
  $("#load-price-btn").click(function () {
    $(".last-price-str").addClass("d-none");
    $("#load-price-time-progress").removeClass("d-none");
  });

  // Сортировка таблицы
  let sortStates = {}; // Хранит состояние сортировки для каждой колонки: null, 'desc', 'asc'
  const originalProducts = [...products]; // Сохраняем изначальный порядок товаров
  const defaultSortIcon = "assets/images/profibot/sorter.svg";

  // Функция для извлечения числового значения из строки (например, "10 000 ₸" -> 10000)
  function parseNumericValue(value) {
    if (typeof value !== "string") return value;
    // Убираем все пробелы и символы валюты, оставляем только цифры и точки
    const numericString = value.replace(/[^\d.]/g, "");
    const parsed = parseFloat(numericString);
    return isNaN(parsed) ? value : parsed;
  }

  // Функция для парсинга даты в формате DD.MM.YYYY
  function parseDate(dateString) {
    if (typeof dateString !== "string") return null;
    const parts = dateString.split(".");
    if (parts.length !== 3) return null;
    // Создаем дату в формате YYYY-MM-DD для корректного парсинга
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }

  // Функция сравнения значений с учетом типа данных
  function compareValues(a, b, column) {
    // Для дат
    if (column === "last_sale") {
      const dateA = parseDate(a);
      const dateB = parseDate(b);
      if (dateA && dateB) {
        return dateA - dateB;
      }
    }

    // Для числовых значений
    const numA = parseNumericValue(a);
    const numB = parseNumericValue(b);

    if (typeof numA === "number" && typeof numB === "number") {
      return numA - numB;
    }

    // Для строковых значений
    if (typeof a === "string" && typeof b === "string") {
      return a.localeCompare(b, "ru");
    }

    return 0;
  }

  // Функция для перерисовки таблицы
  function renderProducts(sortedProducts) {
    const $tpagination = $("#t-pagination");
    const $tmobilepagination = $("#mobile-pagination");

    // Сохраняем текущие ширины колонок перед удалением
    const columnWidths = {};
    $("thead th[data-column]").each(function () {
      const columnName = $(this).attr("data-column");
      const width = $(this).css("width");
      if (width && width !== "auto") {
        columnWidths[columnName] = width;
      }
    });

    // Удаляем все строки товаров (все tr кроме заголовка и пагинации)
    $tpagination.prevAll("tr").remove();
    $tmobilepagination.prevAll(".w-100.d-flex.gap-3.p-3.border-bottom").remove();

    // Добавляем отсортированные товары
    sortedProducts.forEach((product) => {
      $tpagination.before(createDesktopProduct(product));
      $tmobilepagination.before(createProductMobile(product));
    });

    // Восстанавливаем ширины колонок
    Object.keys(columnWidths).forEach((columnName) => {
      const width = columnWidths[columnName];
      // Применяем к заголовку
      $(`thead th[data-column="${columnName}"]`).css({
        width: width,
        minWidth: width,
        maxWidth: width,
      });
      // Применяем ко всем ячейкам с таким же data-column
      $(`td[data-column="${columnName}"]`).css({
        width: width,
        minWidth: width,
        maxWidth: width,
      });
    });

    // Переинициализируем обработчики для новых элементов
    $(".auto-resize").each(autoResizeTextarea);
    updateButtonsState();

    // Сбрасываем главный чекбокс и клонированный после сортировки
    $("#mainCheckbox").prop("checked", false);
    $("#mainCheckbox-clone").prop("checked", false);
  }

  // stiky

  const renderStiky = (sortedProducts) => {
    const tbody = $("#stiky-tbody");
    sortedProducts.forEach((product) => {
      tbody.append(createDesktopProduct(product));
    });
  };

  renderStiky(products);

  // Функция для обновления иконки сортировки
  function updateSortIcon($icon, state) {
    if (state === "desc") {
      // Стрелка вниз (убывание)
      $icon.css("transform", "rotate(180deg)");
      $icon.css("opacity", "1");
    } else if (state === "asc") {
      // Стрелка вверх (возрастание)
      $icon.css("transform", "rotate(0deg)");
      $icon.css("opacity", "1");
    } else {
      // Дефолтная иконка
      $icon.css("transform", "rotate(0deg)");
      $icon.css("opacity", "0.5");
    }
  }

  // Обработчик клика на иконку сортировки
  $(document).on("click", ".sort-icon", function () {
    const column = $(this).data("column");
    const $clickedIcon = $(this);

    // Определяем новое состояние сортировки (цикл: null -> desc -> asc -> null)
    if (!sortStates[column]) {
      sortStates[column] = "desc"; // Первый клик - по убыванию
    } else if (sortStates[column] === "desc") {
      sortStates[column] = "asc"; // Второй клик - по возрастанию
    } else {
      sortStates[column] = null; // Третий клик - возврат к изначальному
    }

    // Сбрасываем состояние других колонок
    Object.keys(sortStates).forEach((key) => {
      if (key !== column) {
        sortStates[key] = null;
      }
    });

    let sortedProducts;

    if (sortStates[column] === null) {
      // Возвращаем изначальный порядок
      sortedProducts = [...originalProducts];
    } else {
      // Сортируем массив products
      sortedProducts = [...originalProducts].sort((a, b) => {
        const comparison = compareValues(a[column], b[column], column);
        return sortStates[column] === "asc" ? comparison : -comparison;
      });
    }

    // Перерисовываем таблицу
    renderProducts(sortedProducts);

    // Обновляем иконки всех колонок
    $(".sort-icon").each(function () {
      const col = $(this).data("column");
      updateSortIcon($(this), sortStates[col] || null);
    });
  });
});

// Sticky header при скролле
$(window).on("scroll", function () {
  const $thead = $("#table-header");
  const $table = $thead.closest("table");
  const $tableWrapper = $table.closest(".table-wrapper");

  if ($table.length === 0) return;

  // Не создаем sticky header на мобильных устройствах (< 576px)
  const windowWidth = $(window).width();
  if (windowWidth < 576) {
    // Удаляем sticky header если он был создан
    if ($(".sticky-header-clone").length > 0) {
      $(".sticky-header-wrapper").remove();
      $tableWrapper.off("scroll.stickyHeader");
    }
    return;
  }

  const tableOffset = $table.offset().top;
  const scrollTop = $(window).scrollTop();
  const stickyPoint = 70; // Расстояние от верха экрана

  if (scrollTop + stickyPoint >= tableOffset) {
    // Создаем sticky header если его еще нет
    if ($(".sticky-header-clone").length === 0) {
      // Клонируем thead
      const $theadClone = $thead.clone();
      $theadClone.attr("id", "table-header-clone");
      $theadClone.addClass("sticky-header-clone");

      // Создаем таблицу для клона
      const $stickyTable = $("<table></table>");
      $stickyTable.addClass("table resizable-table mb-0 sticky-table");
      $stickyTable.append($theadClone);

      // Получаем размеры
      const tableWidth = $table.outerWidth();
      const wrapperWidth = $tableWrapper.outerWidth();
      const wrapperLeft = $tableWrapper.offset().left;

      // Устанавливаем ширину sticky таблицы
      $stickyTable.css({
        width: tableWidth + "px",
        "table-layout": "fixed",
      });
      // Копируем ширины и высоты всех ячеек
      $thead.find("th").each(function (index) {
        const $originalTh = $(this);
        const $cloneTh = $theadClone.find("th").eq(index);

        const width = $originalTh.outerWidth();
        const height = $originalTh.outerHeight();

        $cloneTh.css({
          width: width + "px",
          "min-width": width + "px",
          "max-width": width + "px",
          height: height + "px",
          "box-sizing": "border-box",
        });
      });

      // Создаем wrapper для sticky header
      const $stickyWrapper = $('<div class="sticky-header-wrapper"></div>');
      $stickyWrapper.css({
        position: "fixed",
        top: "70px",
        "z-index": "1000",
        "overflow-x": "auto",
        "overflow-y": "hidden",
        width: wrapperWidth + "px",
        left: wrapperLeft + "px",
        background: "#fff",
        "overflow-x": "hidden",
      });

      $stickyWrapper.append($stickyTable);
      $("body").append($stickyWrapper);

      // Синхронизируем начальную позицию скролла
      const currentScrollLeft = $tableWrapper.scrollLeft();
      $stickyWrapper.scrollLeft(currentScrollLeft);
      // Синхронизация чекбокса между оригиналом и клоном
      const $originalCheckbox = $thead.find("#mainCheckbox");
      const $cloneCheckbox = $theadClone.find("#mainCheckbox");

      // Меняем ID у клонированного чекбокса чтобы не было конфликтов
      $cloneCheckbox.attr("id", "mainCheckbox-clone");
      $theadClone.find('label[for="mainCheckbox"]').attr("for", "mainCheckbox-clone");

      // Клик на клоне выполняет ту же логику что и оригинальный обработчик
      $cloneCheckbox.on("click", function (e) {
        const isChecked = $(this).prop("checked");

        // Обновляем оригинальный чекбокс
        $originalCheckbox.prop("checked", isChecked);

        // Выполняем ту же логику что и в оригинальном обработчике
        // Выбираем все чекбоксы кроме form-switch
        $(".form-check-input").not(".form-switch .form-check-input").prop("checked", isChecked);
      });

      // Синхронизация состояния обратно (если кликнули на оригинал)
      $originalCheckbox.on("change", function () {
        $cloneCheckbox.prop("checked", $(this).prop("checked"));
      });
      // Восстанавливаем функционал resize для клонированного header
      $theadClone.find(".resizer").each(function () {
        const $resizer = $(this);
        const $th = $resizer.closest("th");
        const columnName = $th.attr("data-column");

        // Находим соответствующий th в оригинале по data-column, а не по индексу
        const $originalTh = $thead.find(`th[data-column="${columnName}"]`);

        $resizer.on("mousedown", function (e) {
          e.preventDefault();

          const startX = e.pageX;
          const startWidth = $th.outerWidth();
          const startOriginalWidth = $originalTh.outerWidth();

          let lastUpdate = 0;
          const throttleDelay = 50; // мс

          $(document).on("mousemove.resize", function (e) {
            const diff = e.pageX - startX;
            const newWidth = startWidth + diff;
            const newOriginalWidth = startOriginalWidth + diff;

            if (newWidth > 50) {
              // Обновляем ширину в клоне
              $th.css({
                width: newWidth + "px",
                "min-width": newWidth + "px",
                "max-width": newWidth + "px",
              });

              // Обновляем ширину в оригинальном header
              $originalTh.css({
                width: newOriginalWidth + "px",
                "min-width": newOriginalWidth + "px",
                "max-width": newOriginalWidth + "px",
              });

              // Обновляем ширину всех ячеек с таким же data-column
              if (columnName) {
                $(`td[data-column="${columnName}"]`).css({
                  width: newOriginalWidth + "px",
                  "min-width": newOriginalWidth + "px",
                  "max-width": newOriginalWidth + "px",
                });
              }

              // Throttled синхронизация всей таблицы и всех колонок
              const now = Date.now();
              if (now - lastUpdate > throttleDelay) {
                lastUpdate = now;

                // Обновляем ширину sticky таблицы
                const currentTableWidth = $table.outerWidth();
                $stickyTable.css("width", currentTableWidth + "px");

                // Синхронизируем все остальные колонки
                $thead.find("th").each(function () {
                  const $origTh = $(this);
                  const colName = $origTh.attr("data-column");
                  if (colName && colName !== columnName) {
                    const $cloneTh = $theadClone.find(`th[data-column="${colName}"]`);
                    const actualWidth = $origTh.outerWidth();
                    $cloneTh.css({
                      width: actualWidth + "px",
                      "min-width": actualWidth + "px",
                      "max-width": actualWidth + "px",
                    });
                  }
                });
              }
            }
          });
          $(document).on("mouseup.resize", function () {
            $(document).off("mousemove.resize mouseup.resize");

            // Обновляем ширину sticky таблицы чтобы она соответствовала основной
            const newTableWidth = $table.outerWidth();
            $stickyTable.css("width", newTableWidth + "px");

            // После окончания resize синхронизируем ВСЕ колонки
            // потому что основная таблица (table-layout: auto) могла перераспределить ширину
            $thead.find("th").each(function () {
              const $originalTh = $(this);
              const colName = $originalTh.attr("data-column");
              if (colName) {
                const $cloneTh = $theadClone.find(`th[data-column="${colName}"]`);
                const actualWidth = $originalTh.outerWidth();

                $cloneTh.css({
                  width: actualWidth + "px",
                  "min-width": actualWidth + "px",
                  "max-width": actualWidth + "px",
                });
              }
            });
          });
        });
      });
      // Синхронизация скролла
      $tableWrapper.off("scroll.stickyHeader").on("scroll.stickyHeader", function () {
        $stickyWrapper.scrollLeft($(this).scrollLeft());
      });
    }
  } else {
    // Удаляем sticky header
    if ($(".sticky-header-clone").length > 0) {
      $(".sticky-header-wrapper").remove();
      $tableWrapper.off("scroll.stickyHeader");
    }
  }
});

// Удаляем sticky header при изменении размера окна до мобильного
$(window).on("resize", function () {
  const windowWidth = $(window).width();
  if (windowWidth < 576) {
    if ($(".sticky-header-clone").length > 0) {
      $(".sticky-header-wrapper").remove();
      const $tableWrapper = $(".table-wrapper");
      $tableWrapper.off("scroll.stickyHeader");
    }
  }
});
