const navbar = document.querySelector(".navbar");
const mMenuToggle = document.querySelector(".navbar-menu-toggle");
const menu = document.querySelector(".navbar-mobile");
const modalDialog = document.querySelector(".modal.dialog");
const openMenu = (event) => {
  // Стрелочная функция открывания меню
  menu.classList.add("is-open"); // Добавляем класс к меню
  mMenuToggle.classList.add("close-menu"); // Добавляем класс к кнопке меню
  document.body.style.overflow = "hidden"; // Когда меню открыто, страница не двигается
};
const closeMenu = (event) => {
  // Функция закрытия меню
  menu.classList.remove("is-open"); // Удаляем класс с меню
  mMenuToggle.classList.remove("close-menu"); // Удаляем класс с кнопки меню
  document.body.style.overflow = ""; // Страница двигается
};
mMenuToggle.addEventListener("click", (event) => {
  // Функция при клике на кнопку меню
  event.preventDefault(); // Отключаем переход по ссылке для кнопки меню
  menu.classList.contains("is-open") ? closeMenu() : openMenu(); // если меню содержит класс is-open, выполняется функция закрытия меню, в противном случае меню открывается.
});
