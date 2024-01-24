import ready from "../../js/utils/documentReady";
import { pokemonData } from "../../js/pocketBase/pocketBase";
import { createPagination } from "../pagination/pagination";
export { templateCard, creatingPokemonCard };

ready(async function () {
  try {
    const data = await pokemonData(
      1,
      document.querySelector(".per-page__item.button--active").textContent,
    );
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
  data.items.forEach((item) => {
    containerCard.innerHTML += templateCard(item);
  });
}

// шаблон карточки покемона
function templateCard(data) {
  let typePokemon = "";

  data.type.forEach((item) => {
    typePokemon += `<div class="icon">
                      <svg class="card-fight__type-icon">
                        <use xlink:href="img/svgSprite.svg#icon__${item.toLowerCase()}"></use>
                      </svg>
                    </div>`;
  });

  return `<div class="card">
          <div class="card__number">${data.id.slice(-3)}</div>
          <div class="card__container-photo"><img class="card__photo" src="http://127.0.0.1:8090/api/files/${
            data.collectionId
          }/${data.id}/${data.image}" alt=""></div>
          <div class="card__info">
            <h2 class="card__name">${data.name.english}</h2>
            <div class="card__type">
              ${typePokemon}
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
