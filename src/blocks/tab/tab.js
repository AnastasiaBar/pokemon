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
  let tabcontent = document.getElementsByClassName("tabs__content");
  Array.from(tabcontent).forEach((item) => {
    item.classList.add("tabs__content--hidden");
  });

  let tablinks = document.getElementsByClassName("tab__button");
  Array.from(tablinks).forEach((item) => {
    item.className = item.className.replace("button--active", "");
  });

  document.getElementById(`tab${tabName}`).classList.remove("tabs__content--hidden");
  evt.currentTarget.className += " button--active";
}
