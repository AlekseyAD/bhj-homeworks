const chat = document.querySelector("div.chat-widget");
const chatSide = document.querySelector("div.chat-widget__side");
const form = document.querySelector("input");
const robotMessages = [
  "Добрый день!",
  "Вы не купили ни одного товара для того, чтобы так с нами разговаривать!",
  "Кто тут?",
  "Где ваша совесть?",
  "К сожалению, все операторы сейчас заняты. Не пишите нам больше.",
  "До свидания!",
];

chatSide.onclick = function () {
  chat.classList.add("chat-widget_active");
};

form.addEventListener("keyup", function (event) {
  if (event.key == "Enter" && form.value.length > 0) {
    const messages = document.querySelector(".chat-widget__messages");
    messages.innerHTML += `
          <div class="message message_client">
            <div class="message__time"></div>
            <div class="message__text"></div>
          </div>
          <div class="message">
          <div class="message__time"></div>
          <div class="message__text"></div>
        </div>
        `;

    let message = document.querySelectorAll("div.message");

    let time = new Date().toLocaleTimeString("ru", {
      hour: "2-digit",
      minute: "2-digit",
    });

    message.forEach(function (item) {
      if (item.classList.contains("message_client")) {
        if (item.children[0].textContent.length == 0) {
          item.children[0].textContent = time;
          item.children[1].textContent = form.value;
          form.value = "";
        }
      }

      if (item.classList.contains("message_client") == false) {
        if (item.children[1].textContent.length == 0) {
          item.children[0].textContent = time;
          let random = Math.floor(Math.random() * robotMessages.length);
          item.children[1].textContent = robotMessages[random];
        }
      }
    });
  }
});
