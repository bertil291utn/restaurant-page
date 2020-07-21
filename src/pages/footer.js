import createElementContainer from '../components/element_container';
import logoContainer from '../components/logo';
import imageElement from '../components/element_image';
import appStoreElem from '../assets/app-store.svg';
import playStoreElem from '../assets/play-store.svg';
import footerSashimiElem from '../assets/footer-sashimi.png';

const Footer = () => {
  const Footer = createElementContainer('footer');
  const footerContainer = createElementContainer('div', [
    'footer-container',
    'p-relative',
  ]);
  Footer.append(footerContainer);
  footerContainer.append(logoContainer());
  const footerInfo = createElementContainer('div', ['footer-info']);
  footerContainer.append(footerInfo);
  const downloadApp = createElementContainer('div', ['download-app']);
  footerInfo.append(downloadApp);
  const downloadAppTitle = createElementContainer('h3', ['download-app-title']);
  downloadAppTitle.innerHTML = 'download app';
  downloadApp.append(downloadAppTitle);

  const imagesArray = [
    {
      src: appStoreElem,
      alt: 'app store',
    },
    {
      src: playStoreElem,
      alt: 'play store',
    },
  ];

  imagesArray.forEach((element) => {
    const link = createElementContainer('a');
    link.href = '#';
    const img = imageElement(element.src, undefined, undefined, element.alt);
    link.append(img);
    downloadApp.append(link);
  });
  const footerContent = createElementContainer('div', ['footer-content']);
  footerInfo.append(footerContent);
  const footerContentArray = [
    {
      class: 'services',
      subtitle: 'Services',
      services: ['reservations', 'delivery', 'tracking'],
    },
    {
      class: 'company',
      subtitle: 'Company',
      services: ['about us', 'chefs', 'TOS', 'help center'],
    },
    {
      class: 'located',
      subtitle: 'Located',
      services: ['1784', 'west avenue', 'miami beach', 'florida | 33156'],
    },
  ];

  footerContentArray.forEach((element) => {
    const service = createElementContainer('div', [element.class]);
    footerContent.append(service);
    const subtitleFooter = createElementContainer('h3', ['subtitle-footer']);
    subtitleFooter.innerHTML = element.subtitle;
    service.append(subtitleFooter);
    element.services.forEach((servicio) => {
      const link = createElementContainer('a');
      link.href = '#';
      service.append(link);
      const paragraph = createElementContainer('p');
      paragraph.innerHTML = servicio;
      link.append(paragraph);
    });
  });

  const footerSashimiImg = imageElement(
    footerSashimiElem,
    ['p-absolute'],
    'footer-sashimi',
    'footer sashimi'
  );
  footerContainer.append(footerSashimiImg);
  return Footer;
};

export default Footer;
