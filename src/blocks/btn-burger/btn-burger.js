import ready from "../../js/utils/documentReady.js";

ready(function () {
  const overlay = document.querySelector(".overlay");
  const menuButton = document.querySelector(".btn-burger__burger-btn");
  const menu = document.querySelector(".sidebar");

  menuButton.addEventListener("click", function () {
    const bodyState = document.body.getAttribute("data-state");
    const isOpen = bodyState === "mobile-menu";
    document.body.dataset.state = isOpen ? "" : "mobile-menu";
    overlay.classList.toggle("overlay--active", !isOpen);
  });

  document.addEventListener("click", function (event) {
    if (event.target !== menu && event.target !== menuButton) {
      document.body.dataset.state = "";
      overlay.classList.remove("overlay--active");
    }
  });
});
