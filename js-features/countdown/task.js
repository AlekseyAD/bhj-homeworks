const timeСounter = () => {
    const timerID = document.getElementById("timer");
    if (timerID.textContent > 0) {
        timerID.textContent--;
      } else {
        clearInterval(timerCount);
        alert("Вы победили в конкурсе!");
      }
}

let timerCount = setInterval(timeСounter, 1000);

// const timerID = document.getElementById("timer");

//  //console.log(timerID);

// function timeСounter() {
//   if (timerID.textContent > 0) {
//     timerID.textContent--;
//   } else {
//     clearInterval(timerCount);
//     alert("Вы победили в конкурсе!");
//   }
// }


// const timer = document.getElementById('timer');
// function timerDown() {
//   if (timer.textContent > 0) {
//     timer.textContent -= 1;
//   } else {
//     clearInterval(timeout);
//     alert('Вы победили в конкурсе');
//   }

// }

// let timeout = setInterval(timerDown, 1000);
