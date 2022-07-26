const controlDec = document.querySelectorAll(
  "div.product__quantity-control.product__quantity-control_dec"
);
const controlInc = document.querySelectorAll(
  "div.product__quantity-control.product__quantity-control_inc"
);
const quantityValue = document.querySelectorAll("div.product__quantity-value");

controlDec.forEach(function (item, index) {
  item.onclick = function () {
    if (Number(quantityValue[index].textContent > 1)) {
      quantityValue[index].textContent--;
    }
  };
});

controlInc.forEach(function (item, index) {
  item.onclick = function () {
    quantityValue[index].textContent++;
  };
});

let productAdd = Array.from(document.querySelectorAll(".product__add"));
let cartProducts = document.querySelector(`.cart__products`);

productAdd.forEach((element) => {
  element.addEventListener(`click`, () => {
    const id = element.closest(`.product`).dataset.id;
    const cartProduct = Array.from(document.querySelectorAll(`.cart__product`));
    const img = element
      .closest(`.product`)
      .querySelector(`.product__image`).src;
    const value = element
      .closest(`.product`)
      .querySelector(`.product__quantity-value`);

    const inCart = cartProduct.find((elem) => id == elem.dataset.id);
    if (inCart == undefined) {
      cartProducts.insertAdjacentHTML(
        "beforeend",
        `
        <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src ="${img}">
            <div class="cart__product-count">${value.innerHTML}</div>
        </div>
        `
      );
    } else {
      const addedValue = inCart.lastElementChild;
      addedValue.innerHTML =
        Number(addedValue.innerHTML) + Number(value.innerHTML);
    }
  });
});
