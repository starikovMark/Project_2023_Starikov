const navbar = document.querySelector(".navbar");
const mMenuToggle = document.querySelector(".navbar-menu-toggle");
const menu = document.querySelector(".navbar-mobile");
const modalDialog = document.querySelector(".modal.dialog");
const header = document.querySelector(".header");
const mobileItem = document.querySelectorAll(".navbar-menu-link");

const applicationBtn = document.querySelector(".help-button");
const applicationModal = document.querySelector(".modal-application");

const bodyDark = document.querySelector(".body-dark");
const closeModalBtn = document.querySelector(".modal-application-button");
const modalBtn = document.querySelector(".modal-button");

const resetBtn = document.querySelector(".button-reset");
const accountCard = document.querySelector(".account-card");

const payBtn = document.querySelector(".pay-button");
const payModal = document.querySelector(".pay-modal");
const payCloseBtn = document.querySelector(".pay-close-button");
const swiperRoute = new Swiper(".swiper-route", {
  autoHeight: true,
  loop: true,
  slidesPerView: 1,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
    stretch: 80,
  },
  slideShadows: false,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    588: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    // when window width is >= 480px
    788: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
  },
});
const swiperGallery = new Swiper(".swiper-gallery", {
  autoHeight: true,
  slideShadows: false,
  slidesPerView: 3,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
  },
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".gallery-button-next",
    prevEl: ".gallery-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    280: {
      slidesPerView: 1,

      centeredSlides: true,
    },
    320: {
      slidesPerView: 2,
      rotate: 30,
    },
    576: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    788: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
const openPayModal = () => {
  payModal.classList.add("is-open");
  bodyDark.style.display = "block";
  document.body.style.overflow = "hidden"; // Когда меню открыто, страница не двигается
};
const closePayModal = () => {
  payModal.classList.remove("is-open");
  bodyDark.style.display = "none";
  document.body.style.overflow = ""; // Когда меню открыто, страница не двигается
};

const openMenu = (event) => {
  // Стрелочная функция открывания меню
  menu.classList.add("is-open"); // Добавляем класс к меню
  mMenuToggle.classList.add("close-menu"); // Добавляем класс к кнопке меню
  document.body.style.overflow = "hidden"; // Когда меню открыто, страница не двигается
  header.classList.add("is-open");
};
const closeMenu = (event) => {
  // Функция закрытия меню
  menu.classList.remove("is-open"); // Удаляем класс с меню
  mMenuToggle.classList.remove("close-menu"); // Удаляем класс с кнопки меню
  document.body.style.overflow = ""; // Страница двигается
  header.classList.remove("is-open");
};
mMenuToggle.addEventListener("click", (event) => {
  // Функция при клике на кнопку меню
  event.preventDefault(); // Отключаем переход по ссылке для кнопки меню
  menu.classList.contains("is-open") ? closeMenu() : openMenu(); // если меню содержит класс is-open, выполняется функция закрытия меню, в противном случае меню открывается.
});
const openModal = () => {
  applicationModal.classList.add("is-open");
  bodyDark.style.display = "block";
  document.body.style.overflow = "hidden"; // Когда меню открыто, страница не двигается
};
const closeModal = () => {
  applicationModal.classList.remove("is-open");
  bodyDark.style.display = "none";
  document.body.style.overflow = ""; // Когда меню открыто, страница не двигается
};
modalBtn.addEventListener("click", (event) => {
  event.preventDefault();
  closeModal();
});
closeModalBtn.addEventListener("click", (event) => {
  event.preventDefault();
  closeModal();
});
mobileItem.forEach((item) => {
  item.addEventListener("click", () => {
    closeMenu();
  });
});
if (applicationBtn) {
  applicationBtn.addEventListener("click", (event) => {
    event.preventDefault();
    openModal();
  });
}
if (payCloseBtn) {
  payCloseBtn.addEventListener("click", (event) => {
    event.preventDefault();
    closePayModal();
  });
}
if (resetBtn) {
  resetBtn.addEventListener("click", (event) => {
    event.preventDefault();
    accountCard.style.display = "none";
  });
}
if (payBtn) {
  payBtn.addEventListener("click", (event) => {
    event.preventDefault();
    openPayModal();
  });
}
