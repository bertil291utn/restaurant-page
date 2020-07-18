import 'css-reset-and-normalize';
import './global.css';
import createElementContainer from './styles/element_container';

const bodyContainer = () => {
  const bodyContainerElement = createElementContainer('div', [
    'body-container',
  ]);

  // NAVBAR SECTION
  const navBar = document.createElement('nav');
  const header = createElementContainer('header', ['nav-container', 'd-flex']);

  navBar.appendChild(header);
  // logo container
  const logoContainer = createElementContainer('div', ['logo-container']);
  const logoText = createElementContainer('p', ['logo-text']);
  logoText.innerHTML = 'sushi hub';
  const logoSubText = createElementContainer('p', ['logo-subtext']);
  logoSubText.innerHTML = 'ancient foods to doorstep';
  logoContainer.appendChild(logoText, logoSubText);
  // right links
  const rightLinks = createElementContainer('ul', [
    'right-links',
    'slide-fading-short-animation',
  ]);
  const listChefs = createElementContainer('li');
  const linkChefs = createElementContainer('a');
  linkChefs.innerHTML = 'Chefs';
  listChefs.append(linkChefs);
  const listSpecial = createElementContainer('li');
  const linkSpecial = createElementContainer('a');
  linkSpecial.innerHTML = 'Special';
  listSpecial.append(linkSpecial);
  const listDelivery = createElementContainer('li');
  const linkDelivery = createElementContainer('a');
  linkDelivery.innerHTML = 'Delivery';
  listDelivery.append(linkDelivery);
  rightLinks.append(listChefs, listSpecial, listDelivery);

  header.append(logoContainer, rightLinks);

  bodyContainerElement.append(navBar);
  return bodyContainerElement;
};
document.body.appendChild(bodyContainer());
