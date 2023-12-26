import ready from "../../js/utils/documentReady.js";

ready(function () {
  const menuTrigger = document.querySelector(".filter__burger-btn");
  menuTrigger.addEventListener("click", openNav);
});

function openNav() {
  let bodyState = document.body.getAttribute("data-state");
  const filter = document.querySelector(".overlay");
  if (bodyState === "mobile-menu") {
    document.body.dataset.state = "";
    filter.classList.remove("overlay--active");
  } else {
    document.body.dataset.state = "mobile-menu";
    filter.classList.add("overlay--active");
  }
}
