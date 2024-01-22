export { activeClass };

function activeClass(element, activeClass, activeElement) {
  document.querySelectorAll(element).forEach((item) => item.classList.remove(activeClass));
  activeElement.classList.add(activeClass);
}
