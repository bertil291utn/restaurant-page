import 'css-reset-and-normalize';
import '../styles/global.css';
import createElementContainer from '../elements/element_container';
import Header from '../components/header';
import Home from '../pages/home';

const App = () => {
  const bodyContainerElement = createElementContainer('div', [
    'body-container',
  ]);
  const navBar = Header();
  const main = createElementContainer('main');
  // check with switch to change the main page
  // first check with hide and show 
  // then could try deleting all inner element inerhtml=''
  main.append(Home());
  bodyContainerElement.append(navBar, main);
  return bodyContainerElement;
};

export default App;
