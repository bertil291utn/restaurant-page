const removeElements = () => {
  const mainElement = document.getElementById('main');
  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.lastChild);
  }
};

const addBodyHeight = (indexElem) => {
  const bodyContainer = document.getElementsByClassName('body-container')[0];
  bodyContainer.className = '';
  bodyContainer.classList.add('body-container');
  switch (indexElem) {
    case 0:
      bodyContainer.classList.add('height-home-body');
      break;
    case 1:
      bodyContainer.classList.add('height-about-body');
      break;
    case 2:
      bodyContainer.classList.add('height-specials-body');
      break;

    default:
      break;
  }
};

const renderElements = (element, indexElem) => {
  const mainElement = document.getElementById('main');
  removeElements();
  mainElement.append(element);
  addBodyHeight(indexElem);
};

export default renderElements;
