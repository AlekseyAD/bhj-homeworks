const progress = document.getElementById("progress");
const form = document.getElementById("form");
let loadRequest = new XMLHttpRequest();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  loadRequest.open(
    "POST",
    "https://netology-slow-rest.herokuapp.com/upload.php"
  );

  loadRequest.upload.onprogress = function (element) {
    progress.value = element.loaded / element.total;
    
  };
  loadRequest.send(formData);
  loadRequest.upload.onload = function () {
    alert(`Данные успешно отправлены.`);
  };
});