import header from './header';
import contactContainer from './contact';
import homeContainer from './home';
import initialize from './initialize';
import menuContainer from './menu';

initialize.append(header());

const showHomeLink = document.querySelector('.home-link');
const showMenuLink = document.querySelector('.menu-link');
const showContactLink = document.querySelector('.contact-link');

initialize.append(homeContainer());
initialize.append(menuContainer());
initialize.append(contactContainer());

showContactLink.addEventListener('click', (e) => {
  e.preventDefault();
  initialize.removeEl('menu');
  initialize.removeEl('home');
  initialize.revealEl('contact');
  //   initialize.updateUI(contactContainer());
});

showHomeLink.addEventListener('click', (e) => {
  e.preventDefault();
  initialize.removeEl('contact');
  initialize.removeEl('menu');
  initialize.revealEl('home');
  //   initialize.updateUI(homeContainer());
});

showMenuLink.addEventListener('click', (e) => {
  e.preventDefault();
  initialize.removeEl('home');
  initialize.removeEl('contact');
  initialize.revealEl('menu');
  //   initialize.updateUI(menuContainer());
});
