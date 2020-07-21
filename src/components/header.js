import createElementContainer from './element_container';
import linkedListElement from './linked_list_element';
import Home from '../pages/home';
import About from '../pages/about';
import Special from '../pages/special';
import logoContainer from './logo';

const Header = () => {
  const navBar = document.createElement('nav');
  const header = createElementContainer('header', ['nav-container', 'd-flex']);

  const rightLinks = linkedListElement(
    [
      { innertext: 'Home', link: Home },
      { innertext: 'About', link: About },
      { innertext: 'Specials', link: Special },
    ],
    ['right-links', 'slide-fading-short-animation']
  );

  header.append(logoContainer(), rightLinks);
  navBar.appendChild(header);
  return navBar;
};

export default Header;
