import ready from "../../js/utils/documentReady.js";
import { pokemonAllList, pokemonFind } from "../../js/pocketBase/pocketBase";
import { creatingPokemonFightCard } from "../container-fight/container-fight";

let activePokemon = {
  photo: "",
  name: "",
};

ready(function () {
  const inputs = document.querySelectorAll(".search-panel__input");
  let input;

  inputs.forEach((input) => {
    let container = input.closest(".search-panel__search");
    let photo = container.querySelector(".search-panel__photo-input");

    input.onblur = function () {
      setTimeout(() => {
        activePokemon.name === ""
          ? photo.removeAttribute("src")
          : photo.classList.add("search-panel__photo-input--active");
        photo.src = activePokemon.photo;
        input.value = activePokemon.name;
        inputState(input, false);
      }, 300);
    };

    input.onfocus = function () {
      activePokemon = {
        photo: photo.src,
        name: input.value,
      };
      input.value = "";
      photo.classList.remove("search-panel__photo-input--active");
    };

    // Обработчик ввода в поле поиска
    input.addEventListener("input", async function () {
      const searchValue = this.value.toLowerCase();
      if (this.value.length > 2) {
        const containerResult = inputState(input, true);
        const list = await pokemonAllList(searchValue);
        containerResult.innerHTML = null;
        containerResult.innerHTML = loader();
        setTimeout(() => {
          containerResult.innerHTML = null;
          list.length > 0
            ? (containerResult.innerHTML = list.map((item) => templateList(item)).join(""))
            : (containerResult.innerHTML = "Pokemon not found");
        }, 2000);
      }
    });
  });

  // Обработчик выбора элемента списка
  document.addEventListener("click", async function (e) {
    if (e.target.className.includes("search-panel__input")) {
      input = e.target;
    }
    if (e.target.className.includes("search-panel__item")) {
      const container = input.closest(".search-panel__search");
      const photo = container.querySelector(".search-panel__photo-input");
      const data = await pokemonFind(e.target.id);
      const resultContainer = document.querySelector(".container-fight__result");

      resultContainer.classList.add("container-fight__result--disabled");

      activePokemon = {
        photo: e.target.querySelector("img").src,
        name: e.target.textContent.trim(),
      };

      document.querySelectorAll(".card-fight").forEach((item) => {
        item.classList.remove("card-fight--winner");
      });

      photo.classList.add("search-panel__photo-input--active");
      photo.src = activePokemon.photo;
      input.value = activePokemon.name;
      inputState(input, false);
      creatingPokemonFightCard(data, e.target.closest(".container-fight__hero"), 1);
    }
  });
});

// шаблон для заполнения выпадающего списка в инпуте
function templateList(data) {
  return `<div class="search-panel__item" id="${data.id}">
            <img class="search-panel__photo" src="http://127.0.0.1:8090/api/files/${
              data.collectionId
            }/${data.id}/${data.image}" alt="">
            <p class="search-panel__text"><span>${data.id.slice(-3)}</span> — <span>${
    data.name.english
  }</span></p>
          </div>`;
}

// функция для открытия выпадающего списка
function inputState(input, state) {
  const containerResult = input.closest(".search-panel").querySelector(".search-panel__result");
  //containerResult.innerHTML = null;
  state
    ? containerResult.classList.add("search-panel__result--visible")
    : containerResult.classList.remove("search-panel__result--visible");
  return containerResult;
}

function loader() {
  return `<div class="loader loader--active">
            <div class="loader__inner">
              <div class="loader__item">
                <div class="loader__dot"></div>
              </div>
              <div class="loader__item">
                <div class="loader__dot"></div>
              </div>
              <div class="loader__item">
                <div class="loader__dot"></div>
              </div>
            </div>
          </div>`;
}
