import createElementContainer from '../elements/element_container';
import sushiDishImage from '../assets/sushimi-dish-shadowed.png';

const About = () => {
  const aboutSection = createElementContainer('section', [
    'about',
    'p-relative',
  ]);
  const aboutContent = createElementContainer('div', ['about-content']);
  aboutSection.append(aboutContent);
  const sushiDishElement = createElementContainer(
    'img',
    ['p-absolute'],
    'japanese-dish'
  );
  sushiDishElement.src = sushiDishImage;
  sushiDishElement.alt = 'japanese dish';

  aboutContent.append(sushiDishElement);
  const emptyDiv = createElementContainer('div');
  aboutContent.append(emptyDiv);
  const aboutRestaurant = createElementContainer('div', ['about-restaurant']);
  aboutContent.append(aboutRestaurant);
  const titleElem = createElementContainer('h3', ['title-section']);
  aboutRestaurant.append(titleElem);
  titleElem.innerHTML = '<span class="underline">about</span> restaurant';
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
