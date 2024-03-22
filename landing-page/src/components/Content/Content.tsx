import React from 'react';
import Img1 from "../../assets/imgs/1.png";
import Img2 from "../../assets/imgs/2.png";
import Img3 from "../../assets/imgs/3.png";
import Img4 from "../../assets/imgs/4.png";
import Img5 from "../../assets/imgs/5.png";
import '../../styles/style.css';

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  { src: Img1, alt: 'Image 1' },
  { src: Img2, alt: 'Image 2' },
  { src: Img3, alt: 'Image 3' },
  { src: Img4, alt: 'Image 4' },
  { src: Img5, alt: 'Image 5' },
];
const Content: React.FC = () => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {images.map((image, index) => {
      const isEven = index % 2 === 0;
      const borderClass = isEven ? 'borderTR' : 'borderTL';

      return (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          width={243}
          height={348}
          className={`image-item ${borderClass}`} 
        />
      );
    })}
  </div>
);

export default Content;