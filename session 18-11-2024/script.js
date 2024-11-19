// link1
// link2

const imagesArray = [
  "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg",
  "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
];

const box = document.getElementById("box");

console.log(box.id);

// 0 , 1
function showImage(imageNumber) {
  const image = document.getElementById("my-img2");

  box.style.display = "block";

  image.setAttribute("src", imagesArray[imageNumber]);
}

function closeBox() {
  box.style.display = "none";
}

function changeClass() {
  const parentEl = document.getElementById("parent-id");
  //   parentEl.classList.add("parent-2");
  //   parentEl.classList.remove("parent");
  parentEl.classList.toggle("parent-2");
}
