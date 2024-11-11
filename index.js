const STATUS = "TODO" || "DONE";

let todos = [];

// Todo add
function addOne(newTodo) {
  todos.push(newTodo);
}

// Status uurchluh : Func
function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
}

// Ner uurchluh : Func
function editName(index, name) {
  let item = todos[index];
  item.name = name;
  render();
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
  render();
}

// Todo delete all
function deleteAll() {
  todos = [];
  render();
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
  todoList.innerHTML = "";

  console.log(todoList);

  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];

    // Create TASK ITEM
    const element = document.createElement("div");
    element.classList.add("todo-item");

    // Create task name
    const titleEl = document.createElement("p");
    titleEl.innerText = item.name;

    // Create edit button
    const btnEl = document.createElement("button");
    btnEl.innerText = "Edit";
    btnEl.onclick = function () {
      const newName = prompt("Enter new name");
      editName(i, newName);
    };

    // DELETE
    element.appendChild(titleEl);
    element.appendChild(btnEl);
    todoList.appendChild(element);
  }
}

function addTask() {
  const input = prompt("Enter todo name");
  addOne({ name: input, status: "TODO" });
  render();
}
