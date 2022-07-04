"use strict";

const hit = document.getElementById('dead');
const miss = document.getElementById('lost');

function reloadGame() {
    hit.textContent = 0;
    miss.textContent = 0;
}

const getHole = index => document.getElementById(`hole${index}`)

for (let i = 1; i < 10; i++) {
    const hole = getHole(i);
    hole.onclick = function() {
        hole.className.includes('hole_has-mole') ? hit.textContent++ : miss.textContent++;

        if (hit.textContent == 10) {
            window.alert('Вы победили');
            reloadGame();
        }

        if (miss.textContent == 5) {
            window.alert('Вы проиграли');
            reloadGame()
        }
    }
}