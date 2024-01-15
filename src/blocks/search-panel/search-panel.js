import ready from "../../js/utils/documentReady.js";

ready(function () {
  const inputs = document.querySelectorAll(".search-panel__input");

  inputs.forEach((input) => {
    input.onblur = function () {
      inputState(input, false);
    };

    input.onfocus = function () {
      inputState(input, true);
    };
  });
  function inputState(input, state) {
    const containerResult = input.closest(".search-panel").querySelector(".search-panel__result");
    state
      ? containerResult.classList.add("search-panel__result--visible")
      : containerResult.classList.remove("search-panel__result--visible");
  }
});
