const cases = document.querySelectorAll(".rotator .rotator__case");

function changeCase(count) {
  cases[count].style.color = cases[count].dataset.color;

  timer = setInterval(() => {
    cases[count].classList.remove("rotator__case_active");

    count = count >= cases.length - 1 ? 0 : ++count;

    cases[count].classList.add("rotator__case_active");

    clearInterval(timer);
    changeCase(count);
  }, cases[count].dataset.speed);
}
changeCase(0);
