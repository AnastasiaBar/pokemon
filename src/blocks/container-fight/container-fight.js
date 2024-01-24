import ready from "../../js/utils/documentReady";
export { creatingPokemonFightCard };

let arrChoosePokemon = [];

ready(async function () {
  const activeButton = document.querySelector(".container-fight__button");

  activeButton.addEventListener("click", function () {
    const pokemon1 = arrChoosePokemon[0].type.filter((value) =>
      arrChoosePokemon[1].weakness.some((value2) => value2.includes(value)),
    );
    const pokemon2 = arrChoosePokemon[1].type.filter((value) =>
      arrChoosePokemon[0].weakness.some((value2) => value2.includes(value)),
    );

    const resultContainer = document.querySelector(".container-fight__result");
    resultContainer.classList.remove("container-fight__result--disabled");

    if (pokemon1.length > pokemon2.length) {
      resultContainer.classList.add("container-fight__result--red");
      resultContainer.innerHTML = `${arrChoosePokemon[0].name.english} is the winner!`;
      document.querySelectorAll(".card-fight")[0].classList.add("card-fight--winner");
    } else if (pokemon1.length < pokemon2.length) {
      resultContainer.classList.add("container-fight__result--red");
      resultContainer.innerHTML = `${arrChoosePokemon[1].name.english} is the winner!`;
      document.querySelectorAll(".card-fight")[1].classList.add("card-fight--winner");
    } else {
      resultContainer.classList.add("container-fight__result--yellow");
      resultContainer.innerHTML = "Round draw!";
    }
  });
});

function creatingPokemonFightCard(data, container) {
  const heroEmpty = container.querySelector(".container-fight__hero-empty");
  const cardFight = container.querySelector(".container-fight__card-fight");
  const button = document.querySelector(".container-fight__button");

  heroEmpty.classList.add("container-fight__hero-empty--disabled");
  data.forEach((item) => {
    arrChoosePokemon = addAndReplaceAtIndex(arrChoosePokemon, container.id, item);
    cardFight.classList.remove("container-fight__card-fight--disabled");
    cardFight.innerHTML = templateFightCard(item);
  });

  if (document.querySelectorAll(".container-fight__card-fight .card-fight").length === 2) {
    button.classList.remove("button--disabled");
    button.classList.add("button--default");
  }
}

function addAndReplaceAtIndex(array, index, value) {
  if (index < array.length) {
    array.splice(index, 1, value);
  } else {
    array[index] = value;
  }
  return array;
}

// шаблон карточки покемона
function templateFightCard(data) {
  let typePokemon = "",
    weakness = "",
    abilities = "";

  data.type.forEach((item) => {
    typePokemon += `<div class="icon">
      <svg class="card-fight__type-icon">
        <use xlink:href="img/svgSprite.svg#icon__${item.toLowerCase()}"></use>
      </svg>
  </div>`;
  });

  data.weakness.forEach((item) => {
    weakness += `<div class="icon">
                    <svg class="card-fight__icon">
                      <use xlink:href="img/svgSprite.svg#icon__${item.toLowerCase()}"></use>
                    </svg>
                  </div>`;
  });

  data.abilities.forEach((item) => {
    abilities += `<span class="card-fight__statistics-number--text">${item}</span>, `;
  });

  return `<div class="card-fight">
                      <div class="card-fight__left">
                        <div class="card-fight__number">${data.id.slice(-3)}</div>
                        <div class="card-fight__container-photo"><img class="card-fight__photo" src="http://127.0.0.1:8090/api/files/${
                          data.collectionId
                        }/${data.id}/${data.image}" alt=""></div>
                        <div class="card-fight__container-info">
                          <h2 class="card-fight__name">${data.name.english}</h2>
                          <div class="card-fight__type">
                            ${typePokemon}
                          </div>
                        </div>
                      </div>
                      <div class="card-fight__right">
                        <div class="card-fight__statistics-info">
                          <div class="card-fight__container-icon">
                            <div class="icon"><svg class="card-fight__icon">
                                <use xlink:href="img/svgSprite.svg#icon__health"></use>
                              </svg></div>
                          </div>
                          <div class="card-fight__statistics-number">${data.base.HP}</div>
                        </div>
                        <div class="card-fight__statistics-info">
                          <div class="card-fight__container-icon">
                            <div class="icon"><svg class="card-fight__icon">
                                <use xlink:href="img/svgSprite.svg#icon__attack"></use>
                              </svg></div>
                          </div>
                          <div class="card-fight__statistics-number">${
                            data.base["Sp. Attack"]
                          }</div>
                        </div>
                        <div class="card-fight__statistics-info">
                          <div class="card-fight__container-icon">
                            <div class="icon"><svg class="card-fight__icon">
                                <use xlink:href="img/svgSprite.svg#icon__speed"></use>
                              </svg></div>
                          </div>
                          <div class="card-fight__statistics-number">${data.base.Speed}</div>
                        </div>
                        <div class="card-fight__statistics-info">
                          <div class="card-fight__container-icon">
                            <div class="icon"><svg class="card-fight__icon">
                                <use xlink:href="img/svgSprite.svg#icon__defence"></use>
                              </svg></div>
                          </div>
                          <div class="card-fight__statistics-number">${
                            data.base["Sp. Defense"]
                          }</div>
                        </div>
                        <div class="card-fight__statistics-info">
                          <div class="card-fight__container-icon">
                            <div class="icon"><svg class="card-fight__icon">
                                <use xlink:href="img/svgSprite.svg#icon__weight"></use>
                              </svg></div>
                          </div>
                          <div class="card-fight__statistics-number">${data.weight}</div>
                        </div>
                        <div class="card-fight__statistics-info">
                          <div class="card-fight__container-icon">
                            <div class="icon"><svg class="card-fight__icon">
                                <use xlink:href="img/svgSprite.svg#icon__height"></use>
                              </svg></div>
                          </div>
                          <div class="card-fight__statistics-number">${data.height}</div>
                        </div>
                        <div class="card-fight__statistics-info card-fight__statistics-info--one-cell">
                          <div class="card-fight__container-icon">
                            <div class="icon"><svg class="card-fight__icon">
                                <use xlink:href="img/svgSprite.svg#icon__weakness"></use>
                              </svg></div>
                          </div>
                          <div class="card-fight__weakness-icons">
                            ${weakness}
                          </div>
                        </div>
                        <div class="card-fight__statistics-info card-fight__statistics-info--one-cell">
                          <div class="card-fight__container-icon">
                            <div class="icon"><svg class="card-fight__icon">
                                <use xlink:href="img/svgSprite.svg#icon__abilitie"></use>
                              </svg></div>
                          </div>
                          <div class="card-fight__statistics-number">${abilities.slice(0, -2)}</div>
                        </div>
                      </div>
                    </div>`;
}
