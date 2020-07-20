import createElementContainer from './element_container';
import renderElements from '../functions/render_elements';

const linkedListElement = (linkObjectArray, classesToAdd) => {
  const ulElement = createElementContainer('ul', classesToAdd);

  linkObjectArray.forEach((linkObject) => {
    const list = createElementContainer('li');
    const link = createElementContainer('a');
    link.innerHTML = linkObject.innertext;
    link.href = linkObject.href || '#';
    link.onclick = () => renderElements(linkObject.link());
    list.append(link);
    ulElement.appendChild(list);
  });

  return ulElement;
};

export default linkedListElement;
