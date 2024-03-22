export interface StatisticType {
  value?: number;
  content: string;
}

export interface ImageType {
  src: string;
  alt: string;
}

export interface constHardImage {
  contentHeader: string;
  contentRateStar: string;
  contentText: string;
  view: number;
  price: number;
}

export interface CardContentProps {
  data: ImageType;
  state?: string;
  contentHard: constHardImage;
}
