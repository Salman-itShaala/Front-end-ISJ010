// async and await => syntactic sugar

// 'https://dummyjson.com/users/1'
const myH1 = document.getElementById("my-h1");

async function handleClick() {
  try {
    const data = await fetch("https://dummyjson.com/users/1");
    const res = await data.json();

    myH1.innerHTML = res.firstName;
  } catch (error) {
    console.log(error);
  }
}

function handleClickWithThen() {
  fetch("https://dummyjson.com/users/2")
    .then((data) => data.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}

fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then(console.log);

// http://latentflip.com/loupe/?code=CmNvbnNvbGUubG9nKCJIaSEiKTsKCnNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKICAgIGNvbnNvbGUubG9nKCJDbGljayB0aGUgYnV0dG9uISIpOwp9LCAyMDAwKTsKCmxldCBzdW0gPSAwOwpmb3IobGV0IGkgPSAwOyBpIDw9IDk7IGkrKyl7CiAgICBzdW0gKz0gaTsKfQoKY29uc29sZS5sb2coc3VtKQ%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// https://excalidraw.com/
