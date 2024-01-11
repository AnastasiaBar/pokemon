import ready from "../../js/utils/documentReady.js";

ready(function () {
  const tabs = document.querySelectorAll(".tab__button");

  tabs.forEach((el) => {
    el.addEventListener("click", function (event) {
      openTab(event, event.target.id);
    });
  });
});

function openTab(evt, tabName) {
  let tabcontent = document.getElementsByClassName("page__tab");
  Array.from(tabcontent).forEach((item) => {
    item.style.display = "none";
  });

  let tablinks = document.getElementsByClassName("tab__button");
  Array.from(tablinks).forEach((item) => {
    item.className = item.className.replace("button--active", "");
  });

  document.getElementById(`tab${tabName}`).style.display = "grid";
  evt.currentTarget.className += " button--active";
}
