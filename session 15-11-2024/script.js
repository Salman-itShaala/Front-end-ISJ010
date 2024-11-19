// to select an element with given id

// create a function which will change innerHTML of selected heading
const selectedH1 = document.getElementById("my-h1");

function changeh1() {
  const randomColor = Math.floor(Math.random() * 255);
  const randomColor1 = Math.floor(Math.random() * 255);
  const randomColor2 = Math.floor(Math.random() * 255);

  selectedH1.innerHTML = `rgb(${randomColor}, ${randomColor1}, ${randomColor2})`;

  selectedH1.style.color = `rgb(${randomColor}, ${randomColor1}, ${randomColor2})`;
}

function hideShow() {
  selectedH1.style.display == "block"
    ? (selectedH1.style.display = "none")
    : (selectedH1.style.display = "block");

    
  // optional logic
  //   if (selectedH1.style.display == "block") {
  //     selectedH1.style.display = "none";
  //   } else {
  //     selectedH1.style.display = "block";
  //   }
}

// to select elements using class - htmlCollection (is not an array it's array like object)
const headings = document.getElementsByClassName("heading");

console.log(headings[0]);

// todo - tagName

// querySelector

const heading2 = document.querySelector("#my-h1");

// console.log(heading2);

const obj = {
  innerHtml: "Dom",
};

obj.innerHtml;
