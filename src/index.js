import 'css-reset-and-normalize';
import './global.css';
import createElementContainer from './styles/element_container';
import Header from './components/header';

const bodyContainer = () => {
  const bodyContainerElement = createElementContainer('div', [
    'body-container',
  ]);
  const navBar = Header();
  bodyContainerElement.append(navBar);
  return bodyContainerElement;
};
document.body.appendChild(bodyContainer());
