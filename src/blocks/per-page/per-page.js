import ready from "../../js/utils/documentReady";
import { pokemonData } from "../../js/pocketBase/pocketBase";
import { loading } from "../../js/pocketBase/loading";
import { activeClass } from "../../js/pocketBase/activeClass";

ready(async function () {
  const perPage = document.querySelectorAll(".per-page__item");

  perPage.forEach((item) => {
    item.addEventListener("click", async () => {
      activeClass(".per-page__item", "button--active", item);

      try {
        const newDataPokemon = await pokemonData(
          1,
          item.textContent,
          document.querySelector(".filter__item--active .filter__name").textContent,
        );
        loading(
          newDataPokemon,
          Number(document.querySelector(".pagination__button--active").textContent),
        );
      } catch (err) {
        console.log(err);
      }
    });
  });
});
