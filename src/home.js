const homeContainer = () => {
  const container = document.createElement('div');
  const overlay = document.createElement('div');
  const content = document.createElement('div');
  const btn = document.createElement('a');

  btn.setAttribute('class', 'home-menu-btn');
  btn.setAttribute('href', '#');
  container.setAttribute('id', 'home');

  container.classList += 'home-container flex-center';
  overlay.classList += 'home-overlay';
  content.classList += 'home-hero-container text-center';
  content.innerHTML = "<h3 class='hero-welcome'>Welcome</h3><h1 class='hero-text'>NIKY RESTAURANT</h1><p>AT OUR RESTAURANT WE BRING YOU A LITTLE PIECE OF DRC.</p>";
  btn.innerHTML = 'View menu ';

  content.appendChild(btn);
  container.appendChild(overlay);
  container.appendChild(content);

  return container;
};

export default homeContainer;
