const createElementContainer = (name, classesToAdd, id) => {
  const createElementContainer = document.createElement(name);
  if (classesToAdd !== undefined) createElementContainer.classList.add(...classesToAdd);
  if (id !== undefined) createElementContainer.setAttribute('id', id);
  return createElementContainer;
};
export default createElementContainer;
