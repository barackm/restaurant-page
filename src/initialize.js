const initialize = (function () {
  const mainContainer = document.getElementById('content');
  const append = (el) => {
    mainContainer.appendChild(el);
  };

  const removeEl = (el) => {
    el.classList.add('d-none');
  };

  const addEl = (el) => {
    el.classList.remove('d-none');
  };

  return {
    append,
    removeEl,
    addEl,
  };
}());

export default initialize;
