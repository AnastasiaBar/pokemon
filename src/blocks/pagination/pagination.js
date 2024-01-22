import ready from "../../js/utils/documentReady";
import { pokemonData } from "../../js/pocketBase/pocketBase";
import { loading } from "../../js/pocketBase/loading";
export { createPagination };

ready(async function () {
  document.addEventListener("click", async function (e) {
    if (e.target.className.includes("pagination__button")) {
      try {
        const newDataPokemon = await pokemonData(
          Number(e.target.id),
          document.querySelector(".per-page__item.button--active").textContent,
          document.querySelector(".filter__item--active .filter__name").textContent,
        );
        loading(newDataPokemon, Number(e.target.id));
      } catch (err) {
        console.log(err);
      }
    }
  });
});

// функция для создания пагинатора
function createPagination(totalPages, page) {
  const pagination = document.querySelector(".pagination");
  let paginatorButton = "";
  let beforePage = page > 2 ? page - 2 : page - 1;
  let afterPage = page > 4 ? page + 2 : page + 1;

  if (page > 3 && totalPages > 5) {
    paginatorButton += `<div class="pagination__button pagination__button--first" id="1">first</div>
              <div class="pagination__button pagination__button--text">...</div>`;
  }

  switch (page) {
    case 1:
      afterPage += 3;
      break;
    case 2:
      afterPage += 2;
      break;
    case 3:
      afterPage += 1;
      break;
    case 4:
      totalPages === 5 ? (beforePage -= 1) : (afterPage += 1);
      break;
    case totalPages:
      beforePage -= 2;
      break;
    case totalPages - 1:
      beforePage -= 1;
      break;
  }

  for (let i = beforePage; i <= afterPage; i++) {
    if (i > 0 && i <= totalPages) {
      const active = page === i ? "pagination__button--active" : "";
      paginatorButton += `<div class="pagination__button ${active}" id="${i}">${i}</div>`;
    }
  }

  if (page < totalPages - 2 && totalPages > 5) {
    paginatorButton += `<div class="pagination__button pagination__button--text">...</div>
            <div class="pagination__button pagination__button--last" id="${totalPages}">last</div>`;
  }

  pagination.innerHTML = paginatorButton;
}
