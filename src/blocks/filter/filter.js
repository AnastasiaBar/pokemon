import ready from "../../js/utils/documentReady";
import { pokemonData, pokemonTypes } from "../../js/pocketBase/pocketBase";
import { loading } from "../../js/pocketBase/loading";
import { activeClass } from "../../js/pocketBase/activeClass";

ready(async function () {
  try {
    const data = await pokemonTypes();
    const filter = document.querySelector(".filter");
    filter.innerHTML = null;

    // преобразуем данные для фильтра и выводим результат
    totalPokemon(data);
    data.forEach((item) => {
      filter.innerHTML += templateFilter(item);
    });
    document.querySelector(".filter__item").classList.add("filter__item--active");
  } catch (err) {
    console.log(err);
  }

  // если пользователь кликнул по списку в фильтре
  document.addEventListener("click", async function (e) {
    if (e.target.className.includes("filter__item")) {
      activeClass(".filter__item", "filter__item--active", e.target);

      try {
        const newDataPokemon = await pokemonData(
          1,
          document.querySelector(".per-page__item.button--active").textContent,
          e.target.querySelector(".filter__name").textContent,
        );
        loading(newDataPokemon, 1);
      } catch (err) {
        console.log(err);
      }
    }
  });
});

// шаблон фильтра
function templateFilter(data) {
  return `<div class="filter__item">
                        <div class="filter__left">
                          <div class="icon"><svg class="filter__icon">
                              <use xlink:href="img/svgSprite.svg#icon__${data.name.english.toLowerCase()}"></use>
                            </svg></div>
                          <div class="filter__name">${data.name.english}</div>
                        </div>
                        <div class="filter__right"><span class="filter__number">${
                          data.amount
                        }</span></div>
                      </div>`;
}

//функция для нахождения кол-ва всех покемонов
function totalPokemon(data) {
  const total = data.reduce((currentValue, item) => currentValue + item.amount, 0);
  const totalObject = {
    amount: total,
    collectionId: "2mbw52f4pspc6bt",
    collectionName: "types",
    id: "g4rpwdbni5w8hrf",
    name: {
      english: "All",
    },
  };
  data.unshift(totalObject);
  return data;
}
