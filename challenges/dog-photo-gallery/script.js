const ctaBtn = document.querySelector("button");
const ImgContainer = document.querySelector("ul");

ctaBtn.addEventListener("click", (e) => {
  e.preventDefault();

  displayDog();
});

function displayDog() {
  const DOG_API = "https://dog.ceo/api/breeds/image/random";

  fetch(DOG_API)
    .then((res) => {
      return res.json();
    })
    .then((disPlayJson) => {
      const newImgList = document.createElement("li");
      const newImg = document.createElement("img");
      newImg.src = disPlayJson.message;

      ImgContainer.appendChild(newImgList);

      newImgList.appendChild(newImg);
    })

    // If something goes wrong
    .catch((error) => console.log(error));
}