const initialize = (function () {
  const mainContainer = document.getElementById('content');
  const append = (el) => {
    mainContainer.appendChild(el);
  };

  const removeEl = (id) => {
    const element = document.getElementById(id);
    element.style.display = 'none';
  };

  const revealEl = (id) => {
    const element = document.getElementById(id);
    element.style.display = 'flex';
  };

  return {
    append,
    removeEl,
    revealEl,
  };
}());

export default initialize;
