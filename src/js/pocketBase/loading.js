import { creatingPokemonCard } from "../../blocks/container-cards/container-cards";
import { createPagination } from "../../blocks/pagination/pagination";

export { loading };

// функция для вывода прелоадера в контейнере с карточками
function loading(dataPokemon, dataPagination) {
  const containerCard = document.querySelector(".container-cards__inner");
  const loader = document.querySelector(".container-cards .loader");
  containerCard.innerHTML = null;
  document.querySelector(".container-cards .loader").classList.add("loader--active");
  window.scroll(0, 0);
  createPagination(dataPokemon.totalPages, dataPagination);
  setTimeout(() => {
    loader.classList.remove("loader--active");
    creatingPokemonCard(dataPokemon);
  }, 2000);
}
