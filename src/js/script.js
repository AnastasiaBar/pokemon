import { loadCard } from "../blocks/container-cards/container-cards";

window.onload = function () {
  const elements = document.querySelectorAll(".skeleton");

  elements.forEach((item) => {
    const containerClass = nameClass(item);
    item.classList.add(`${containerClass}__skeleton--active`);
  });

  setTimeout(function () {
    elements.forEach((item) => {
      const containerClass = nameClass(item);
      item.classList.remove(`${containerClass}__skeleton--active`);
    });
    loadCard();
  }, 4000);
};

function nameClass(item) {
  const result = item.className.split(" ")[0].toLowerCase();
  const uniqueWords = [...new Set(result.split(" "))];
  return uniqueWords.join(" ");
}
