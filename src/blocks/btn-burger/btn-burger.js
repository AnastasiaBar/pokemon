import ready from "../../js/utils/documentReady.js";

ready(function () {
  let bodyState = document.body.getAttribute("data-state");
  const filter = document.querySelector(".overlay");
  var sidebar = document.querySelector(".sidebar");
  var openButton = document.querySelector(".btn-burger__burger-btn");

  openButton.addEventListener("click", function () {
    document.body.dataset.state = "mobile-menu";
    filter.classList.add("overlay--active");
  });

  if (bodyState !== "mobile-menu") {
    document.addEventListener("click", function (event) {
      if (event.target !== sidebar && event.target !== openButton) {
        document.body.dataset.state = "";
        filter.classList.remove("overlay--active");
      }
    });
  }
});

/*function openNav() {
  let bodyState = document.body.getAttribute("data-state");
  const filter = document.querySelector(".overlay");
  if (bodyState === "mobile-menu") {
    document.body.dataset.state = "";
    filter.classList.remove("overlay--active");
  } else {
    document.body.dataset.state = "mobile-menu";
    filter.classList.add("overlay--active");
  }
}*/
