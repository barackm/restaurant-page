export default function header() {
  const mainHeaderContainer = document.createElement('header');
  mainHeaderContainer.classList = 'flex-between';
  const logo = document.createElement('a');
  logo.innerHTML = "<img src='https://res.cloudinary.com/fidbagraphicscode/image/upload/v1625232518/samples/Pngtree_vector_of_chicken_chef_character_5003581_xzazni.png'></img>";
  logo.setAttribute('alt', 'logo');
  logo.setAttribute('href', '#');

  const nav = document.createElement('nav');
  nav.setAttribute('class', 'flex-center');
  nav.innerHTML = "<ul class='flex-center'><li><a class='home-link' href='#'>Home</a></li><li><a href='#' class='menu-link'>Menu</a></li><li><a href='#' class='contact-link'>Contact</a></li></ul>";
  logo.classList += 'header-home-link logo ';

  mainHeaderContainer.appendChild(logo);
  mainHeaderContainer.appendChild(nav);
  return mainHeaderContainer;
}
