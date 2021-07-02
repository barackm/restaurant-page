import contactContainer from './contact';
import header from './header';
import homeContainer from './home';
import initialize from './initialize';
import menuContainer from './menu';

initialize.append(header());

const showHomeLink = document.querySelector('.home-link');
const showMenuLink = document.querySelector('.menu-link');
const showContactLink = document.querySelector('.contact-link');

showContactLink.addEventListener('click', () => {});

showHomeLink.addEventListener('click', () => {});

showMenuLink.addEventListener('click', () => {});

initialize.append(homeContainer());
initialize.append(menuContainer());
initialize.append(contactContainer());
