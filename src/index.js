import header from './header';
import contactContainer from './contact';
import homeContainer from './home';
import initialize from './initialize';
import menuContainer from './menu';

initialize.append(header());

const showHomeLink = document.querySelector('.home-link');
const showMenuLink = document.querySelector('.menu-link');
const showContactLink = document.querySelector('.contact-link');
const showHome2 = document.querySelector('.header-home-link');

initialize.append(homeContainer());
const showMenu2 = document.querySelector('.home-menu-link');
initialize.append(menuContainer());
initialize.append(contactContainer());

showContactLink.addEventListener('click', (e) => {
  e.preventDefault();
  initialize.removeEl('menu');
  initialize.removeEl('home');
  initialize.revealEl('contact');
});

showHomeLink.addEventListener('click', (e) => {
  e.preventDefault();
  initialize.removeEl('contact');
  initialize.removeEl('menu');
  initialize.revealEl('home');
});

showHome2.addEventListener('click', (e) => {
  e.preventDefault();
  initialize.removeEl('contact');
  initialize.removeEl('menu');
  initialize.revealEl('home');
});

showMenuLink.addEventListener('click', (e) => {
  e.preventDefault();
  initialize.removeEl('home');
  initialize.removeEl('contact');
  initialize.revealEl('menu');
});

showMenu2.addEventListener('click', (e) => {
  e.preventDefault();
  initialize.removeEl('home');
  initialize.removeEl('contact');
  initialize.revealEl('menu');
});
