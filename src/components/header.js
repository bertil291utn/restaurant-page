import createElementContainer from '../styles/element_container';
import linkedListElement from '../styles/linked_list_element';

const Header = () => {
  const navBar = document.createElement('nav');
  const header = createElementContainer('header', ['nav-container', 'd-flex']);
  const logoContainer = createElementContainer('div', ['logo-container']);
  const logoText = createElementContainer('p', ['logo-text']);
  logoText.innerHTML = 'sushi hub';
  const logoSubText = createElementContainer('p', ['logo-subtext']);
  logoSubText.innerHTML = 'ancient foods to doorstep';
  logoContainer.append(logoText, logoSubText);
  const rightLinks = linkedListElement(
    [
      { innertext: 'Chefs' },
      { innertext: 'Special' },
      { innertext: 'Delivery' },
    ],
    ['right-links', 'slide-fading-short-animation'],
  );

  header.append(logoContainer, rightLinks);
  navBar.appendChild(header);
  return navBar;
};

export default Header;
