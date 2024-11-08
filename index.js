const todos = [];
// Todo add
function addOne(newTodo) {
  todos.push(newTodo);
}
// Status urchluh : Func
function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
}

// Ner uurchluh : Func
function editName(index, name) {
  let item = todos[index];
  item.name = name;
}

// Todo delete one item

function deleteOne(index) {
  todos.splice(index, 1);
}

//RUNNING APPLICATION

addOne({ name: "JS sudlah", status: "TODO" });
addOne({ name: "Hool hiih", status: "TODO" });
addOne({ name: "math hiih", status: "TODO" });
addOne({ name: "ayga ugaah", status: "TODO" });
editStatus(1, "DONE");
editName(1, "Nom unshih");
deleteOne(1);
console.log(todos);
