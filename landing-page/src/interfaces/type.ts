import { ImagePosition } from "../constants/enums";

export interface StatisticType {
  value?: number;
  content: string;
}

export type valueImageStateType = Partial<Record<ImagePosition, string>> & { default: string };

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

export interface testimonialType {
  dataImage: ImageType;
  name: string;
  star: number;
}
