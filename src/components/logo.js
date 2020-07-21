import createElementContainer from './element_container';

const LogoContainer = () => {
  const LogoContainer = createElementContainer('div', ['logo-container']);
  const link = createElementContainer('a');
  link.href = '/';
  LogoContainer.append(link);
  const logoText = createElementContainer('p', ['logo-text']);
  logoText.innerHTML = 'sushi hub';
  link.append(logoText);

  const logoSubText = createElementContainer('p', ['logo-subtext']);
  logoSubText.innerHTML = 'ancient foods to doorstep';
  link.append(logoSubText);

  return LogoContainer;
};

export default LogoContainer;
