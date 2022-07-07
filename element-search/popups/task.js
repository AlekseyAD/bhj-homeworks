"use strict";
// В момент запуска скрипта, покажите окно #modal_main
const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");

// Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
const closeButton = document.querySelectorAll(".modal__close");
closeButton[0].onclick = () => modalMain.classList.remove("modal_active");

// По нажатию на элемент с классом show-success покажите окно #modal_success
const modalSuccess = document.getElementById("modal_success");
const successButton = document.querySelector(".show-success");
successButton.onclick = () => {
  modalSuccess.classList.add("modal_active");
  modalMain.classList.remove("modal_active");
};

// Кнопка закрытия на втором окне
closeButton[2].onclick = () => modalSuccess.classList.remove("modal_active");
