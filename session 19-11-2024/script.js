// <li>Kabaddi</li>

// selectec input box
const inputBox = document.getElementById("my-imput");
const parentOl = document.getElementById("my-ol");
let todos = 0;

function addLi() {
  const newLi = document.createElement("li");

  if (!inputBox.value) {
    alert("Enter todo");
    return;
  }
  newLi.id = todos;

  newLi.innerHTML = `${inputBox.value}
                    <button onclick="removeTodo(${todos})">Delete me!${todos}</button>`;

  todos++;

  parentOl.appendChild(newLi);

  inputBox.value = "";
}

function removeTodo(todo) {
  const liToRemove = document.getElementById(todo);
  parentOl.removeChild(liToRemove);
}

removeTodo();
