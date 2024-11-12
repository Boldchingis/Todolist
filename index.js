const STATUS = "TODO" || "DONE";

let todos = [];

// Todo add
function addOne(newTodo) {
  todos.push(newTodo);
}

// Status update: Func
function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
  render(); // re-render after status change
}

// Name update: Func
function editName(index, name) {
  let item = todos[index];
  item.name = name;
  render(); // re-render after name change
}

// Todo delete one item
function deleteOne(index) {
  let arr = [];
  for (let i = 0; i < todos.length; i++) {
    if (i !== index) {
      arr.push(todos[i]);
    }
  }
  todos = arr;
  render(); // re-render after delete
}

// Todo delete all
function deleteAll() {
  todos = [];
  render(); // re-render after delete all
}

// Count DONE
function countDone() {
  let count = 0;
  for (let i = 0; i < todos.length; i++) {
    let item = todos[i];
    if (item.status === "DONE") {
      count++;
    }
  }
  return count;
}

// RUNNING APPLICATION
function render() {
  const todoList = document.querySelector("#tasks");
  todoList.innerHTML = ""; // Clear current tasks

  // Iterate over todos array to create task items
  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];

    // Create task item container
    const element = document.createElement("div");
    element.classList.add("todo-item");

    // Create task name element
    const titleEl = document.createElement("p");
    titleEl.innerText = item.name;

    // Create edit button
    const editBtnEl = document.createElement("i");
    editBtnEl.classList.add("fa-solid", "fa-pen");
    editBtnEl.onclick = function () {
      const newName = prompt("Enter new name");
      editName(i, newName);
    };

    // Create delete button
    const deleteBtnEl = document.createElement("i");
    deleteBtnEl.classList.add("fa-trash", "fa-solid");
    deleteBtnEl.onclick = function () {
      deleteOne(i);
    };

    // Checkbox to mark DONE/UNDO
    const checkBtnEl = document.createElement("input");
    checkBtnEl.type = "checkbox";
    checkBtnEl.classList.add("todo-checkbox");
    checkBtnEl.checked = item.status === "DONE";
    checkBtnEl.onclick = function () {
      const newStatus = checkBtnEl.checked ? "DONE" : "TODO";
      editStatus(i, newStatus);
    };

    // append child
    element.appendChild(checkBtnEl);
    element.appendChild(titleEl);
    element.appendChild(editBtnEl);
    element.appendChild(deleteBtnEl); //
    todoList.appendChild(element);
  }
}

// Add new task
function addTask() {
  const input = prompt("Enter todo name");
  addOne({ name: input, status: "TODO" });
  render();
}
