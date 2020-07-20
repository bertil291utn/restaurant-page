import createElementContainer from './element_container';

const elementTitle = (title, classToAdd, id) => {
  const elementTitle = createElementContainer('h3', classToAdd, id);
  elementTitle.innerHTML = title;
  return elementTitle;
};

export default elementTitle;
