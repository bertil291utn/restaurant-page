import createElementContainer from '../components/element_container';
import sushiDishImage from '../assets/sushimi-dish-shadowed.png';
import imageElement from '../components/element_image';
import elementTitle from '../components/element_title';

const About = () => {
  const aboutSection = createElementContainer('section', [
    'about',
    'p-relative',
  ]);
  const aboutContent = createElementContainer('div', ['about-content']);
  aboutSection.append(aboutContent);
  const sushiDishElement = imageElement(
    sushiDishImage,
    ['p-absolute'],
    'japanese-dish',
    'japanese dish',
  );

  aboutContent.append(sushiDishElement);
  const emptyDiv = createElementContainer('div');
  aboutContent.append(emptyDiv);
  const aboutRestaurant = createElementContainer('div', [
    'about-restaurant',
    'slide-fading-right-animation',
  ]);
  aboutContent.append(aboutRestaurant);
  const titleElem = elementTitle(
    '<span class="underline">about</span> restaurant',
    ['title-section'],
  );

  aboutRestaurant.append(titleElem);
  const aboutRestText = createElementContainer('div', [
    'about-restaurant-text',
  ]);

  const pTextArray = [
    '100 very best restaurant award |',
    'Washingtonian magazine,',
    'The best sushi | NOVA magazine',
    'The best sushi joint in town / zagat survey,',
    'private tatami room for up to 25 guests,',
    'catering specialists-on site or delivery',
  ];

  pTextArray.forEach((element) => {
    const pElem = createElementContainer('p');
    pElem.innerHTML = element;
    aboutRestText.append(pElem);
  });
  aboutRestaurant.append(aboutRestText);
  return aboutSection;
};
export default About;
