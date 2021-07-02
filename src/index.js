import header from './header';
import homeContainer from './home';
import initialize from './initialize';
import menuContainer from './menu';

initialize.append(header());
initialize.append(homeContainer());
initialize.append(menuContainer());
