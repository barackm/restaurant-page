const homeContainer = () => {
  const container = document.createElement('div');
  container.classList += 'home-container flex-center';
  const overlay = document.createElement('div');
  overlay.classList += 'home-overlay';
  const content = document.createElement('div');
  content.classList += 'home-hero-container text-center';
  content.innerHTML = "<h3 class='hero-welcome'>Welcome</h3><h1 class='hero-text'>NIKY RESTAURANT</h1><p>AT OUR RESTAURANT WE BRING YOU A LITTLE PIECE OF DRC.</p>";
  const btn = document.createElement('a');
  btn.setAttribute('href', '#');
  btn.setAttribute('class', 'home-menu-btn');
  btn.innerHTML = 'View menu ';
  content.appendChild(btn);
  container.appendChild(overlay);
  container.appendChild(content);

  return container;
};

export default homeContainer;
