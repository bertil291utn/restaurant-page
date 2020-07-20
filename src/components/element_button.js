import createElementContainer from './element_container';

const elementButton = (buttonName, classToAdd, id) => {
  const elementButton = createElementContainer('button', classToAdd, id);
  elementButton.innerHTML = buttonName;
  return elementButton;
};
export default elementButton;
