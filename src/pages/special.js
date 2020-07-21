import createElementContainer from '../components/element_container';
import elementTitle from '../components/element_title';
import imageElement from '../components/element_image';
import sushiDishElement from '../assets/sushi-california-roll.png';
import elementButton from '../components/element_button';
import specialSushiRollImage from '../assets/special-sushi-roll.png';

const Special = () => {
  const Special = createElementContainer('section', ['specials', 'p-relative']);
  const deliciousContent = createElementContainer('div', ['delicious-content']);
  Special.append(deliciousContent);
  const sectionMotto = elementTitle(
    'a perfect combination of passion, service orientation, craftsmanship and knowledge',
    ['title-section', 'p-absolute'],
  );
  deliciousContent.append(sectionMotto);
  const largeDeliciousTitle = createElementContainer('p', [
    'delicious-title',
    'p-absolute',
  ]);
  largeDeliciousTitle.innerHTML = 'Delicious';
  deliciousContent.append(largeDeliciousTitle);
  const sushiDishImage = imageElement(
    sushiDishElement,
    ['p-absolute'],
    'sushi-dish',
    'sushi-dish',
  );
  deliciousContent.append(sushiDishImage);
  const specialImages = createElementContainer('div', ['specials-images']);
  Special.append(specialImages);
  const sectionSubtitle = elementTitle(
    '<span class="underline">specials</span>',
    ['title-section'],
  );
  specialImages.append(sectionSubtitle);
  const specialCarousel = createElementContainer('div', ['specials-carousel']);
  specialImages.append(specialCarousel);

  const carouselImagesArray = [
    {
      src: specialSushiRollImage,
      alt: 'tuna tartar',
    },
    {
      src: specialSushiRollImage,
      alt: 'toro sesame',
    },
    {
      src: specialSushiRollImage,
      alt: 'tuna tataki',
    },
  ];

  carouselImagesArray.forEach((element) => {
    const specialItem = createElementContainer('div', ['special-item']);
    specialCarousel.append(specialItem);
    const img = imageElement(element.src, undefined, undefined, element.alt);
    specialItem.append(img);
    const paragraph = createElementContainer('p');
    paragraph.innerHTML = element.alt;
    specialItem.append(paragraph);
  });
  const moreButton = elementButton('More', ['primary-button']);
  specialImages.append(moreButton);
  return Special;
};
export default Special;
