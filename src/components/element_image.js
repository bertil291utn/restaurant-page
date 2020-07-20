import createElementContainer from './element_container';

const imageElement = (src, classToAdd, id, alt) => {
  const imageElement = createElementContainer('img', classToAdd, id);
  imageElement.src = src;
  imageElement.alt = alt;
  return imageElement;
};
export default imageElement;
