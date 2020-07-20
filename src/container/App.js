import 'css-reset-and-normalize';
import '../styles/global.css';
import createElementContainer from '../components/element_container';
import Header from '../components/header';
import Home from '../pages/home';

const App = () => {
  const bodyContainerElement = createElementContainer('div', [
    'body-container',
  ]);
  const navBar = Header();
  const main = createElementContainer('main', undefined, 'main');
  main.append(Home());

  bodyContainerElement.append(navBar, main);
  return bodyContainerElement;
};

export default App;
