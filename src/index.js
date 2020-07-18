import 'css-reset-and-normalize';
import './global.css';
import elementContainer from './styles/elementContainer';

const bodyContainer = () => {
  const bodyContainerElement = elementContainer('div', ['body-container']);

  // NAVBAR SECTION
  const navBar = document.createElement('nav');
  const header = elementContainer('header', ['nav-container', 'd-flex']);

  navBar.appendChild(header);
  // logo container
  const logoContainer = elementContainer('div', ['logo-container']);

  const logoText = document.createElement('p');
  logoText.classList.add('logo-text');
  logoText.innerHTML = 'sushi hub';
  const logoSubText = document.createElement('p');
  logoSubText.classList.add('logo-subtext');
  logoSubText.innerHTML = 'ancient foods to doorstep';
  logoContainer.appendChild(logoText, logoSubText);
  // right link
  const rightLink = document.createElement('ul');
  rightLink.classList.add('right-links', 'slide-fading-short-animation');
  // const linkChefs = document.childElementCount('li');
  // const linkSpecials = document.childElementCount('li');
  // const linkDelivery = document.childElementCount('li');
  // linkChefs;

  header.append(logoContainer);

  bodyContainerElement.append(navBar);
  return bodyContainerElement;
};
document.body.appendChild(bodyContainer());
