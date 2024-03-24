import Image5 from '../../assets/imgs/6.png';
import Image6 from '../../assets/imgs/7.png';
import Image7 from '../../assets/imgs/8.png';
import Image8 from '../../assets/imgs/10.png';
import Image9 from '../../assets/imgs/11.png';
import Image10 from '../../assets/imgs/12.png';
import Image11 from '../../assets/imgs/avt.png';
import Image12 from '../../assets/imgs/avt2.png';
import Image13 from '../../assets/imgs/avt3.png';
import {
  CardContentProps,
  ImageType,
  testimonialType,
} from '../../interfaces';
import { ImagePosition } from '../enums';

export const image = [Image5, Image6, Image7, Image8];

export const imageState = new Map<ImagePosition | string, string>([
  ['right', '0 25%'],
  ['left', '25% 0'],
  ['circle', '50%'],
  ['default', '80%']
]);

export const imageContent: ImageType = {
  src: Image5,
  alt: 'image 5',
};

export const mockTestimonialCardData: testimonialType[] = [
  {
    dataImage: { src: Image11, alt: 'Image 11' },
    name: 'Michale Wong',
    star: 5,
  },

  {
    dataImage: { src: Image12, alt: 'Image 12' },
    name: 'Avrill Song',
    star: 3.5,
  },

  {
    dataImage: { src: Image13, alt: 'Image 13' },
    name: 'Jeanne Wood',
    star: 4.5,
  },
];

export const MockData: CardContentProps = {
  data: {
    src: Image5,
    alt: 'image 5',
  },
  contentHard: {
    contentHeader: 'Chocolate Latte',
    contentRateStar: '4',
    contentText:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta.',
    view: 360,
    price: 5,
  },
};

export const MockDataArray: CardContentProps[] = [
  {
    data: {
      src: Image5,
      alt: 'image 5',
    },

    contentHard: {
      contentHeader: 'Chocolate Latte',
      contentRateStar: '4',
      contentText:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta.',
      view: 180,
      price: 5,
    },
  },
  {
    data: {
      src: Image6,
      alt: 'image 6',
    },

    contentHard: {
      contentHeader: 'Mocha Latte',
      contentRateStar: '5.0',
      contentText:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta.',
      view: 450,
      price: 2.7,
    },
  },
  {
    data: {
      src: Image7,
      alt: 'image 7',
    },

    contentHard: {
      contentHeader: 'Chocolate Latte',
      contentRateStar: '4',
      contentText:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta.',
      view: 390,
      price: 2.9,
    },
  },
  {
    data: {
      src: Image8,
      alt: 'image 8',
    },

    contentHard: {
      contentHeader: 'Chocolate Latte',
      contentRateStar: '4',
      contentText:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta.',
      view: 360,
      price: 2.8,
    },
  },
];

export const imageAbout: ImageType[] = [
  { src: Image9, alt: 'image 9' },
  { src: Image10, alt: 'image 10' },
];
export const imageBlog: ImageType[] = [
  { src: Image8, alt: 'image 8' },
  { src: Image9, alt: 'image 9' },
  { src: Image10, alt: 'image 10' }
];
