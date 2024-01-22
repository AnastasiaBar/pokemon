window.onload = function () {
  const pageLoader = document.querySelector(".page__loader");
  const loader = document.querySelector(".page__loader .loader");

  pageLoader.classList.add("page__loader--active");
  loader.classList.add("loader--active");

  setTimeout(function () {
    pageLoader.classList.remove("page__loader--active");
    loader.classList.remove("loader--active");
  }, 2000);
};
