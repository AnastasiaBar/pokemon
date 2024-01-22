import ready from "../../js/utils/documentReady";
import { pokemonData } from "../../js/pocketBase/pocketBase";
import { createPagination } from "../pagination/pagination";
export { templateCard, creatingPokemonCard };

ready(async function () {
  try {
    const data = await pokemonData(1, 12);
    creatingPokemonCard(data);
    createPagination(data.totalPages, data.page);
  } catch (err) {
    console.log(err);
  }
});

// функция для вывода карточек с покемонами
function creatingPokemonCard(data) {
  const containerCard = document.querySelector(".container-cards__inner");
  containerCard.innerHTML = null;
  let number = 1;
  data.page === 1 ? (number = 1) : (number = data.page * data.perPage - data.perPage + 1);
  data.items.forEach((item) => {
    containerCard.innerHTML += templateCard(item, number++);
  });
}

// шаблон карточки покемона
function templateCard(data, number) {
  number = String(number).padStart(3, "0");
  let typeIcons = "";
  if (data.type.length === 1) {
    typeIcons = `<div class="icon"><svg class="card__icon">
      <use xlink:href="img/svgSprite.svg#icon__${data.type[0].toLowerCase()}"></use>
    </svg></div>`;
  } else {
    typeIcons = `<div class="icon"><svg class="card__icon">
      <use xlink:href="img/svgSprite.svg#icon__${data.type[0].toLowerCase()}"></use>
    </svg></div>
    <div class="icon"><svg class="card__icon">
      <use xlink:href="img/svgSprite.svg#icon__${data.type[1]?.toLowerCase()}"></use>
    </svg></div>`;
  }
  return `<div class="card">
          <div class="card__number">${number}</div>
          <div class="card__container-photo"><img class="card__photo" src="http://127.0.0.1:8090/api/files/${data.collectionId}/${data.id}/${data.image}" alt=""></div>
          <div class="card__info">
            <h2 class="card__name">${data.name.english}</h2>
            <div class="card__type">
              ${typeIcons}
            </div>
          </div>
          <div class="card__statistics">
            <div class="card__statistics-info">
              <div class="card__container-icon">
                <div class="icon"><svg class="card__icon">
                    <use xlink:href="img/svgSprite.svg#icon__health"></use>
                  </svg></div>
              </div>
              <div class="card__statistics-number">${data.base.HP}</div>
            </div>
            <div class="card__statistics-info">
              <div class="card__container-icon">
                <div class="icon"><svg class="card__icon">
                    <use xlink:href="img/svgSprite.svg#icon__speed"></use>
                  </svg></div>
              </div>
              <div class="card__statistics-number">${data.base.Speed}</div>
            </div>
            <div class="card__statistics-info">
              <div class="card__container-icon">
                <div class="icon"><svg class="card__icon">
                    <use xlink:href="img/svgSprite.svg#icon__attack"></use>
                  </svg></div>
              </div>
              <div class="card__statistics-number">${data.base["Sp. Attack"]}</div>
            </div>
            <div class="card__statistics-info">
              <div class="card__container-icon">
                <div class="icon"><svg class="card__icon">
                    <use xlink:href="img/svgSprite.svg#icon__defence"></use>
                  </svg></div>
              </div>
              <div class="card__statistics-number">${data.base["Sp. Defense"]}</div>
            </div>
          </div>
        </div>
        </div>`;
}
