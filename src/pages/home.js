import createElementContainer from '../elements/element_container';
import imgHero from '../assets/sushi-roll_hero-section.png';

const Home = () => {
  const section = createElementContainer('section', ['hero']);
  const heroContent = createElementContainer('div', [
    'hero-content',
    'p-relative',
  ]);
  section.append(heroContent);
  const fadingAnimation = createElementContainer('div', [
    'slide-fading-animation',
  ]);
  heroContent.append(fadingAnimation);
  const paragraphHero = createElementContainer('p');
  paragraphHero.innerHTML = 'japanese tradition and the best ingredients with modern touches';
  fadingAnimation.append(paragraphHero);
  const heroButtons = createElementContainer('div', ['hero-buttons']);
  const exploreButton = createElementContainer(
    'button',
    ['primary-button'],
    'explore-button',
  );
  exploreButton.innerHTML = 'Explore';
  heroButtons.append(exploreButton);
  const menuButton = createElementContainer('button');
  menuButton.innerHTML = 'Menu';
  heroButtons.append(menuButton);
  fadingAnimation.append(heroButtons);
  const imgHeroElement = createElementContainer(
    'img',
    ['slide-fading-shorter-animation', 'p-absolute'],
    'sushi-hero',
  );
  imgHeroElement.src = imgHero;
  imgHeroElement.alt = 'sushi hero section';
  heroContent.append(imgHeroElement);
  return section;
};

export default Home;
