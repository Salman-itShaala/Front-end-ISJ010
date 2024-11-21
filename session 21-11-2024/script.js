const boxes = document.getElementsByClassName("child");
const colorInput = document.getElementById("color-input");
const eraseBtn = document.getElementById("erase-btn");
// boxes = []

let color = "blue";
let isMouseClicked = false;

document.onmousedown = () => {
  isMouseClicked = true;
};

document.onmouseup = () => {
  isMouseClicked = false;
};

eraseBtn.onclick = () => {
  color = "white";
};

// colorInput.onchange = () => {
//   color = colorInput.value;
// };

colorInput.addEventListener("change", (event) => {
  console.log(event.target.value);
  color = colorInput.value;
});

for (let i = 0; i < boxes.length; i++) {
  boxes[i].onmouseenter = () => {
    if (isMouseClicked) {
      boxes[i].style.backgroundColor = color;
    }
    return;
  };
}
