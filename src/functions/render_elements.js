import createElementContainer from '../components/element_container';

const removeElements = () => {
  const mainContent = document.getElementById('main-content');
  mainContent.parentNode.removeChild(mainContent);
};

const renderElements = (element) => {
  const main = document.getElementById('main');
  const mainContent = createElementContainer('div', undefined, 'main-content');
  mainContent.append(element);
  main.append(mainContent);
};

export { removeElements, renderElements };
