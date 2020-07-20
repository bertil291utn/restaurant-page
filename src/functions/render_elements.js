const removeElements = () => {
  const mainElement = document.getElementById('main');
  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.lastChild);
  }
};

const renderElements = (element) => {
  const mainElement = document.getElementById('main');
  removeElements();
  mainElement.append(element);
};

export default renderElements;
