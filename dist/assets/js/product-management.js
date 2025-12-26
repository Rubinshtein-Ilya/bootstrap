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
  <td data-column="status" class="text-start hidden-overflow-cell">
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
          <li class="dumping-dropdow-item dropdown-item">Управление остатками</li>
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
        <input class="form-check-input" style="border: 1px solid #80808073;" type="checkbox" value="" id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault"></label>
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
          <li class="dumping-dropdow-item dropdown-item">Управление остатками</li>
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

    // Удаляем все строки товаров (все tr кроме заголовка и пагинации)
    $tpagination.prevAll("tr").remove();
    $tmobilepagination.prevAll(".w-100.d-flex.gap-3.p-3.border-bottom").remove();

    // Добавляем отсортированные товары
    sortedProducts.forEach((product) => {
      $tpagination.before(createDesktopProduct(product));
      $tmobilepagination.before(createProductMobile(product));
    });

    // Переинициализируем обработчики для новых элементов
    $(".auto-resize").each(autoResizeTextarea);
    updateButtonsState();
  }

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
