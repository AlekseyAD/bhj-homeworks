const items = document.getElementById("items");
const loaderImg = document.querySelector(".loader");
const hideLoader = () => loaderImg.classList.remove("loader_active");

const loadRequest = new XMLHttpRequest();
loadRequest.open("GET", "https://netology-slow-rest.herokuapp.com");
loadRequest.send();


loadRequest.addEventListener("readystatechange", () => {
   if (loadRequest.readyState === loadRequest.DONE && loadRequest.status == 200) {
    let dataLoad = JSON.parse(loadRequest.response).response.Valute;
    hideLoader();
    for (let key in dataLoad) {
      let newItem = document.createElement("div");
      newItem.classList.add("item");

      let valuteCode = document.createElement("div");
      valuteCode.classList.add("item__code");
      valuteCode.append(dataLoad[key]["CharCode"]);
      newItem.append(valuteCode);

      let valuteValue = document.createElement("div");
      valuteValue.classList.add("item__value");
      valuteValue.append(dataLoad[key]["Value"]);
      newItem.append(valuteValue);

      let valuteCurrency = document.createElement("div");
      valuteCurrency.classList.add("item__currency");
      valuteCurrency.append("руб.");
      newItem.append(valuteCurrency);
      items.append(newItem);
    }
  } 
});
