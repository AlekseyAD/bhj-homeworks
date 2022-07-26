let taskList = document.querySelector(".tasks__list");
let taskAdd = document.querySelector(".tasks__add");
let tasksInput = document.querySelector(".tasks__input");
let tasks;

!localStorage.tasks
  ? (tasks = [])
  : (tasks = JSON.parse(localStorage.getItem("tasks")));

function Task(des) {
  this.des = des;
}

const createTempTask = (task, index) => {
  return `<div class="task">
          <div class="task__title">
          ${task.des}
          </div>
          <a onclick="taskDel(${index})" class="task__remove">
          &times;
          </a>
        </div>`;
};

taskAdd.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(tasksInput.value);
  if (tasksInput.value !== "") {
    tasks.push(new Task(tasksInput.value));
    updateLocalStorage();
    addHtml();
    tasksInput.value = "";
  }
});

let taskDel = (index) => {
  console.log(index);
  tasks.splice(index, 1);
  updateLocalStorage();
  addHtml();
};

const addHtml = () => {
  taskList.innerHTML = "";
  if (tasks.length > 0) {
    tasks.forEach((item, index) => {
      taskList.innerHTML += createTempTask(item, index);
    });
  }
};

addHtml();

const updateLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
