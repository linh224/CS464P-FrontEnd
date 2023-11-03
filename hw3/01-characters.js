// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

const app = document.querySelector(".characters");

const addToDom = (item) => {
  let card = document.createElement("div");
  card.classList.add("card-class");
  card.classList.add("figure");
  card.style.verticalAlign = "top";

  let image = document.createElement("img");
  image.classList.add("image-class");
  image.setAttribute("src", item.imageUrl);
  image.setAttribute("alt", "");
  card.appendChild(image);

  let fullName = document.createElement("h2");
  fullName.classList.add("name-class");
  fullName.textContent = item.fullName;
  card.appendChild(fullName);

  let title = document.createElement("p");
  title.classList.add("title-class");
  title.textContent = item.title;

  card.appendChild(title);
  app.appendChild(card);
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((result) => {
        addToDom(result);
      });
    })
    .catch((error) => {
      console.log(error);
      let element = document.createElement("div");
      element.textContent = "An error occured. Please try again.";
      app.append(element);
    })
    .finally(() => {});
};

fetchData(url);
