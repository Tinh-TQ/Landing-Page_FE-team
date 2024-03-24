import React from 'react';
import Img1 from "../../assets/imgs/1.png";
import Img2 from "../../assets/imgs/2.png";
import Img3 from "../../assets/imgs/3.png";
import Img4 from "../../assets/imgs/4.png";
import Img5 from "../../assets/imgs/5.png";

interface Image {
  id: string;
  src: string;
  alt: string;
}

const images: Image[] = [
  { id: '1', src: Img1, alt: 'Image 1' },
  { id: '2', src: Img2, alt: 'Image 2' },
  { id: '3', src: Img3, alt: 'Image 3' },
  { id: '4', src: Img4, alt: 'Image 4' },
  { id: '5', src: Img5, alt: 'Image 5' },
];

const Content: React.FC = () => (
  <div className='image__slide'>
    {images.map((image) => {
      const isEven = parseInt(image.id, 10) % 2 === 0;
      const borderClass = isEven ? 'borderLeft' : 'borderRight';
      return (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={243}
            height={348}
            className={`image__item ${borderClass}`}
          />
      );
    })}
  </div>
);

export default Content;