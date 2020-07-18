import 'css-reset-and-normalize';
import './global.css';

const bodyContainer = () => {
  const bodyContainerElement = document.createElement('div');
  bodyContainerElement.classList.add('body-container');
  // NAVBAR SECTION
  const navBar = document.createElement('nav');
  const header = document.createElement('header');
  header.classList.add('nav-container', 'd-flex');
  navBar.appendChild(header);
  // logo container
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');
  const logoText = document.createElement('p');
  logoText.classList.add('logo-text');
  logoText.innerHTML = 'sushi hub';
  const logoSubText = document.createElement('p');
  logoSubText.classList.add('logo-subtext');
  logoSubText.innerHTML = 'ancient foods to doorstep';
  logoContainer.appendChild(logoText,logoSubText);
  // right link
  const rightLink = document.createElement('ul');
  rightLink.classList.add('right-links', 'slide-fading-short-animation');
  const linkChefs=document.childElementCount('li');
  const linkSpecials=document.childElementCount('li');
  const linkDelivery=document.childElementCount('li');
  linkChefs
 

  header.append(logoContainer,rightLinks);



  bodyContainerElement.append(navBar,mainElement);
  return bodyContainerElement;
};
document.body.appendChild(bodyContainer());
