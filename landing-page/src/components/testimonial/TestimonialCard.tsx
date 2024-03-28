import { Avatar, Card, Rate, Typography } from 'antd';
import { testimonialType } from '../../interfaces';
import ImageCard from '../common/ImageCard';

const { Meta } = Card;
const { Paragraph } = Typography;
const TestimonialCard = ({ dataImage, name, star }: testimonialType) => {
  return (
    <>
      <Card className='card-testimonial' hoverable>
        <div className='testimonial-card-content'>
          <Meta
            avatar={
              <ImageCard
                data={dataImage}
                state='circle'
                className='width-10 height-10 image-item'
                width='168'
                height='151'
                bottom='2'
              />
            }
            title={name}
            description={<Rate allowHalf defaultValue={star} />}
          />
        </div>
        <div className='testimonial-card-content'>
          <Paragraph className='justify-text mg-top testimonial-card-content'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            adipisci excepturi consequatur nam eius, sequi repellat explicabo id
            quia eveniet, aspernatur assumenda, libero inventore architecto
            aperiam corporis voluptates tenetur quibusdam!
          </Paragraph>
        </div>
      </Card>
    </>
  );
};

export default TestimonialCard;
