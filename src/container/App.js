import createElementContainer from '../elements/element_container';
import Header from '../components/header';
import 'css-reset-and-normalize';
import '../styles/global.css';

const App = () => {
  const bodyContainerElement = createElementContainer('div', [
    'body-container',
  ]);
  const navBar = Header();
  bodyContainerElement.append(navBar);
  return bodyContainerElement;
};

export default App;