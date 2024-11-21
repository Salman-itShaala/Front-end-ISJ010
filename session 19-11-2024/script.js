const inputBox = document.getElementById("my-imput");
const parentOl = document.getElementById("my-ol");
let todos = 0;

// products = []
// let todos = ["sdigslidfj", "asdasfd", "sdfsfsdff"] => ["asdasfd", "sdfsfsdff"]
//

function addLi() {
  const newLi = document.createElement("li");

  if (!inputBox.value) {
    alert("Enter todo");
    return;
  }
  newLi.id = todos;

  newLi.innerHTML = `${inputBox.value}
                    <button class="delete-btn" onclick="removeTodo(${todos})">Delete me!</button>`;

  todos++;

  parentOl.appendChild(newLi);

  inputBox.value = "";
}

function removeTodo(todo) {
  const liToRemove = document.getElementById(todo);
  parentOl.removeChild(liToRemove);
}
