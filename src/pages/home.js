import createElementContainer from '../components/element_container';
import imgHero from '../assets/sushi-roll_hero-section.png';
import elementButton from '../components/element_button';
import imageElement from '../components/element_image';

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
  paragraphHero.innerHTML =
    'japanese tradition and the best ingredients with modern touches';
  fadingAnimation.append(paragraphHero);
  const heroButtons = createElementContainer('div', ['hero-buttons']);
  const exploreButton = elementButton(
    'Explore',
    ['primary-button'],
    'explore-button'
  );
  heroButtons.append(exploreButton);
  const menuButton = elementButton('Menu');
  heroButtons.append(menuButton);
  fadingAnimation.append(heroButtons);
  const imgHeroElement = imageElement(
    imgHero,
    ['slide-fading-shorter-animation', 'p-absolute'],
    'sushi-hero',
    'sushi hero section'
  );

  heroContent.append(imgHeroElement);
  return section;
};

export default Home;
