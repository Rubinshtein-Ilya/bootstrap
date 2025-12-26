let products=[{id:1,warehouse:"PP1",article:"987654321",code:"KZ001234",title:"Детский Велосипед",price:"45 000 ₸",remainder:"12",preorder:"5",dumping:"Не настроен",status:"warning",stock:"15",min:"10",total:"120",avr_sales:"25",days_since_last_sale:"5",last_sale:"20.12.2024",last_price:"43 000 ₸",parent:"Велосипеды",present:"2",withDumping:!0},{id:2,warehouse:"PP2",article:"123456789",code:"KZ005678",title:"Самокат взрослый",price:"25 000 ₸",remainder:"8",preorder:"15",dumping:"Настроен",status:"preorder",stock:"7",min:"5",total:"85",avr_sales:"18",days_since_last_sale:"12",last_sale:"14.12.2024",last_price:"24 500 ₸",parent:"Самокаты",present:"5",withDumping:!1},{id:3,warehouse:"PP1",article:"555666777",code:"KZ009012",title:"Электросамокат",price:"120 000 ₸",remainder:"3",preorder:"0",dumping:"Не настроен",status:"success",stock:"30",min:"2",total:"45",avr_sales:"8",days_since_last_sale:"2",last_sale:"24.12.2024",last_price:"115 000 ₸",parent:"Электротранспорт",present:"1",withDumping:!1},{id:4,warehouse:"PP3",article:"111222333",code:"KZ003456",title:"Ролики детские",price:"18 500 ₸",remainder:"25",preorder:"10",dumping:"Настроен",status:"success",stock:"45",min:"15",total:"200",avr_sales:"42",days_since_last_sale:"1",last_sale:"25.12.2024",last_price:"18 000 ₸",parent:"Ролики",present:"8",withDumping:!0},{id:5,warehouse:"PP2",article:"444555666",code:"KZ007890",title:"Скейтборд профессиональный",price:"35 000 ₸",remainder:"6",preorder:"3",dumping:"Не настроен",status:"warning",stock:"10",min:"4",total:"65",avr_sales:"12",days_since_last_sale:"8",last_sale:"18.12.2024",last_price:"34 500 ₸",parent:"Скейтборды",present:"3",withDumping:!1},{id:6,warehouse:"PP1",article:"777888999",code:"KZ002345",title:"Гироскутер",price:"85 000 ₸",remainder:"15",preorder:"7",dumping:"Настроен",status:"success",stock:"20",min:"8",total:"95",avr_sales:"20",days_since_last_sale:"3",last_sale:"23.12.2024",last_price:"82 000 ₸",parent:"Электротранспорт",present:"4",withDumping:!0},{id:7,warehouse:"PP3",article:"222333444",code:"KZ006789",title:"Беговел для малышей",price:"15 000 ₸",remainder:"30",preorder:"12",dumping:"Не настроен",status:"success",stock:"60",min:"20",total:"310",avr_sales:"55",days_since_last_sale:"0",last_sale:"26.12.2024",last_price:"14 800 ₸",parent:"Беговелы",present:"10",withDumping:!1},{id:8,warehouse:"PP2",article:"666777888",code:"KZ004567",title:"Трюковой самокат",price:"32 000 ₸",remainder:"4",preorder:"8",dumping:"Настроен",status:"preorder",stock:"12",min:"6",total:"72",avr_sales:"15",days_since_last_sale:"15",last_sale:"11.12.2024",last_price:"31 500 ₸",parent:"Самокаты",present:"6",withDumping:!0}];function createDesktopProduct(e){return`
  <tr>
  <th scope="row">
    <div class="form-check">
      <input class="form-check-input" style="border: 1px solid #80808073;" type="checkbox" value="" id=${"card-"+e.id} />
      <label class="form-check-label " for="card"></label>
    </div>
  </th>
  <td>
    <img src="assets/images/profibot/bike.png" alt="product image" />
  </td>
  <td>${e.warehouse}</td>
  <td class="text-primary fw-bold">${e.article}</td>
  <td class="text-primary fw-bold">${e.code}</td>
   <td>
    <textarea class="form-control table-input-profi auto-resize" rows="1">${e.title}</textarea>
  </td>
  <td class="fw-bold">
    <textarea class="form-control table-input-profi auto-resize fw-bold price-textarea" rows="1">${e.price}</textarea>
  </td>
  <td>${e.remainder}</td>
  <td>${e.preorder}</td>
  <td>
    ${e.withDumping?`<div class="d-flex align-items-center">
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
        </div>`:`<div class="d-flex align-items-center gap-1">
          <div class="td-profi-text">Не настроен</div>
          <img src="assets/images/profibot/edit.svg" alt="Edit icon" style="cursor: pointer" class="dumping-btn" />
        </div>`}
  </td>
  <td class="text-start">
    <div class="d-flex align-items-center gap-1">
      <span class="badge-profi badge-profi-${e.status}">
      ${"success"===e.status?"В наличии":"warning"===e.status?"Сняты с продажи":"Предзаказ"}
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
          <li class="dumping-dropdow-item dropdown-item">Списать остатки</li>
          <li class="preorder-dropdow-item dropdown-item">Настроить предзаказ</li>
          <li class="remove-from-sale-dropdow-item dropdown-item">Снять с продажи</li>
          <li class="balances-dropdow-item dropdown-item">Настроить мин. остатки</li>
        </ul>
      </div>
    </div>
  </td>
  <td>${e.stock}</td>
  <td>${e.min}</td>
  <td>${e.total}</td>
  <td>${e.avr_sales}</td>
  <td>${e.days_since_last_sale}</td>
  <td>${e.last_sale}</td>
  <td>${e.last_price}</td>
  <td>${e.parent}</td>
  <td>${e.present}</td>
</tr>
  `}function createProductMobile(e){return`
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
        <div>${e.title}</div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Склад</div>
        <div>${e.warehouse}</div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Артикул</div>
        <div class="text-primary fw-bold">${e.article}</div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Код каспи</div>
        <div class="text-primary fw-bold">${e.code}</div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Цена</div>
        <div class="fw-bold">${e.price}</div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Остаток</div>
        <div>${e.remainder}</div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Предзаказ</div>
        <div>${e.preorder}</div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Статус</div>
        <div><span class="badge-profi-mobile badge-profi-${e.status}">
        ${"success"===e.status?"В наличии":"warning"===e.status?"Сняты с продажи":"Предзаказ"}
        </span></div>
      </div>
      <div class="d-flex w-100% justify-content-between align-items-center mobile-card-table-row">
        <div>Демпинг</div>
         ${e.withDumping?`<div class="d-flex align-items-center">
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
        </div>`:`<div class="d-flex align-items-center gap-1">
          <div class="td-profi-text">Не настроен</div>
          <img src="assets/images/profibot/edit.svg" alt="Edit icon" style="cursor: pointer" class="dumping-btn" />
        </div>`}
       
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
          <li class="dumping-dropdow-item dropdown-item">Списать остатки</li>
          <li class="preorder-dropdow-item dropdown-item">Настроить предзаказ</li>
          <li class="remove-from-sale-dropdow-item dropdown-item">Снять с продажи</li>
          <li class="balances-dropdow-item dropdown-item">Настроить мин. остатки</li>
        </ul>
      </div>
      </div>
    </div>
  </div>
  `}$(document).ready(function(){$("#leftovers").click(function(){$("#dumping-modal-box").addClass("modal-active-profi"),$("body").addClass("no-scroll")}),$("#pre-order").click(function(){$("#preorder-modal-box").addClass("modal-active-profi"),$("body").addClass("no-scroll")}),$("#set-up-balances").click(function(){$("#balances-modal-box").addClass("modal-active-profi"),$("body").addClass("no-scroll")}),$("#remove-from-sale").click(function(){$("#remove-from-sale-modal-box").addClass("modal-active-profi"),$("body").addClass("no-scroll")}),$(document).on("click",".dumping-dropdow-item",function(){$("#dumping-modal-box").addClass("modal-active-profi"),$("body").addClass("no-scroll")}),$(document).on("click",".preorder-dropdow-item",function(){$("#preorder-modal-box").addClass("modal-active-profi"),$("body").addClass("no-scroll")}),$(document).on("click",".remove-from-sale-dropdow-item",function(){$("#remove-from-sale-modal-box").addClass("modal-active-profi"),$("body").addClass("no-scroll")}),$(document).on("click",".balances-dropdow-item",function(){$("#balances-modal-box").addClass("modal-active-profi"),$("body").addClass("no-scroll")}),$(document).on("click",".dumping-btn",function(){$("#dumping-modal-box").addClass("modal-active-profi"),$("body").addClass("no-scroll")}),$(document).on("click",".modal-overlay",function(){$("#dumping-modal-box").removeClass("modal-active-profi"),$("#preorder-modal-box").removeClass("modal-active-profi"),$("#balances-modal-box").removeClass("modal-active-profi"),$("#remove-from-sale-modal-box").removeClass("modal-active-profi"),$("body").removeClass("no-scroll")}),$(document).on("click",".btn-close",function(){$("#dumping-modal-box").removeClass("modal-active-profi"),$("#preorder-modal-box").removeClass("modal-active-profi"),$("#balances-modal-box").removeClass("modal-active-profi"),$("#remove-from-sale-modal-box").removeClass("modal-active-profi"),$("body").removeClass("no-scroll")}),$(".product-btn-profi").click(function(){$(".product-btn-profi").removeClass("active-filter"),$(this).addClass("active-filter")}),$("#mainCheckbox").click(function(){$(".form-check-input").not(".form-switch .form-check-input").prop("checked",this.checked)});let t=$("#t-pagination"),i=$("#mobile-pagination");function s(){$(this).css("height","auto"),$(this).css("height",this.scrollHeight+"px")}function o(){0<$(".form-check-input").not("#mainCheckbox").not(".form-switch .form-check-input").filter(":checked").length?$(".product-management-grey-btn").prop("disabled",!1).addClass("products-active-btn"):$(".product-management-grey-btn").prop("disabled",!0).removeClass("products-active-btn")}products.forEach(e=>{t.before(createDesktopProduct(e)),i.before(createProductMobile(e))}),$(document).on("change",".form-check-input",function(){o()}),$(".auto-resize").each(s),$(document).on("input",".auto-resize",s),document.querySelectorAll(".resizer").forEach(t=>{let i,s;t.addEventListener("mousedown",e=>{i=e.pageX,s=t.parentElement.offsetWidth,t.classList.add("active"),document.onmousemove=e=>{t.parentElement.style.width=s+(e.pageX-i)+"px"},document.onmouseup=()=>{document.onmousemove=null,t.classList.remove("active")}})}),$("#load-products-btn").click(function(){$(".last-time-string").addClass("d-none"),$("#load-products-time-progress").removeClass("d-none")}),$("#load-price-btn").click(function(){$(".last-price-str").addClass("d-none"),$("#load-price-time-progress").removeClass("d-none")});let a={};function d(e){var t;return"string"!=typeof e||(t=e.replace(/[^\d.]/g,""),t=parseFloat(t),isNaN(t))?e:t}function r(e){return"string"!=typeof e||3!==(e=e.split(".")).length?null:new Date(e[2],e[1]-1,e[0])}$(document).on("click",".sort-icon",function(){let i=$(this).data("column");a[i]&&"desc"!==a[i]?a[i]="desc":a[i]="asc",Object.keys(a).forEach(e=>{e!==i&&(a[e]=null)});var e=[...products].sort((e,t)=>{e=((e,t,i)=>{if("last_sale"===i){var i=r(e),s=r(t);if(i&&s)return i-s}return i=d(e),s=d(t),"number"==typeof i&&"number"==typeof s?i-s:"string"==typeof e&&"string"==typeof t?e.localeCompare(t,"ru"):0})(e[i],t[i],i);return"asc"===a[i]?e:-e});{let t=$("#t-pagination"),i=$("#mobile-pagination");t.prevAll("tr").remove(),i.prevAll(".w-100.d-flex.gap-3.p-3.border-bottom").remove(),e.forEach(e=>{t.before(createDesktopProduct(e)),i.before(createProductMobile(e))}),$(".auto-resize").each(s),o()}$(".sort-icon").css("opacity","0.5"),$(this).css("opacity","1")})});