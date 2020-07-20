import About from '../pages/about';
import Home from '../pages/home';
import { removeElements, renderElements } from './render_elements';

const displayPage = (i) => {
  removeElements();
  switch (i) {
    case 0:
      renderElements(Home());
      break;
    case 1:
      renderElements(About());
      break;
    case 2:
      renderElements(About());
      break;
    default:
      renderElements(Home());
  }
};

export default displayPage;
