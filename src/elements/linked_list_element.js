import createElementContainer from './element_container';

const linkedListElement = (linkObjectArray, classesToAdd) => {
  const ulElement = createElementContainer('ul', classesToAdd);

  linkObjectArray.forEach((linkObject) => {
    const list = createElementContainer('li');
    const link = createElementContainer('a');
    link.innerHTML = linkObject.innertext;
    link.href = linkObject.href || '#';
    link.onclick = linkObject.link;
    list.append(link);
    ulElement.appendChild(list);
  });

  return ulElement;
};

export default linkedListElement;
