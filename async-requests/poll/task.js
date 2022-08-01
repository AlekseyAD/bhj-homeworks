const pollTitle = document.querySelector(".poll__title");
const pollAnswers = document.querySelector(".poll__answers");
const loadRequest = new XMLHttpRequest();
loadRequest.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
loadRequest.send();

loadRequest.addEventListener("readystatechange", () => {
  if (
    loadRequest.readyState === loadRequest.DONE &&
    loadRequest.status == 200
  ) {
    const dataLoad = JSON.parse(loadRequest.responseText);

    pollTitle.innerText = dataLoad.data.title;
    for (let key in dataLoad.data.answers) {
      const btnElm = document.createElement("button");
      btnElm.className = "poll__answer";
      btnElm.innerText = dataLoad.data.answers[key];

      btnElm.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
      pollAnswers.appendChild(btnElm);
    }
  }
});
