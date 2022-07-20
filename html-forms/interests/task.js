const groups = document.querySelectorAll(".interest > ul.interests");

groups.forEach(function (item) {
  let firstCheck = item.closest("li");
  firstCheck = firstCheck.firstElementChild.querySelector("input");
  let secondChecks = item.querySelectorAll("li > label > input");

  firstCheck.onclick = function () {
    if (firstCheck.checked == true) {
      firstCheck.checked = true;
      secondChecks.forEach(function (item) {
        item.checked = true;
      });
    }

    if (firstCheck.checked == false) {
      firstCheck.checked = false;
      secondChecks.forEach(function (item) {
        item.checked = false;
      });
    }
  };
});
