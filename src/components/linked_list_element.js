import createElementContainer from './element_container';
import displayPage from '../functions/display';

const linkedListElement = (linkObjectArray, classesToAdd) => {
  const ulElement = createElementContainer('ul', classesToAdd);

  linkObjectArray.forEach((linkObject, i) => {
    const list = createElementContainer('li');
    const link = createElementContainer('a');
    link.innerHTML = linkObject.innertext;
    link.href = linkObject.href || '#';
    link.onclick = () => displayPage(i);
    list.append(link);
    ulElement.appendChild(list);
  });

  return ulElement;
};

export default linkedListElement;
