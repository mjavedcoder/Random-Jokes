const renderJokes = document.getElementById("para");
const clickButton = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist&type=single";

const randomJokes = () => {
  renderJokes.classList.remove("fade");
  fetch(url)
    .then((response) => response.json())
    .then((items) => {
      renderJokes.textContent = `${items.joke}`;
      renderJokes.classList.add("fade");
    });
};

clickButton.addEventListener("click", randomJokes);

randomJokes();
