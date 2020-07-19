import 'css-reset-and-normalize';
import '../styles/global.css';
import createElementContainer from '../components/element_container';
import Header from '../components/header';
import Home from '../pages/home';
import About from '../pages/about';
import displayPage from '../functions/display';

const App = () => {
  const bodyContainerElement = createElementContainer('div', [
    'body-container',
  ]);
  const navBar = Header();
  const main = createElementContainer('main');
  // check with switch to change the main page
  // first check with hide and show
  // then could try deleting all inner element inerhtml=''
  const pageToAppend = displayPage();
  main.append(Home());
  main.append(About());

  bodyContainerElement.append(navBar, main);
  return bodyContainerElement;
};

export default App;
