import { Avatar, Card, Rate, Typography } from 'antd';
import { testimonialType } from '../../interfaces';
import ImageCard from '../common/ImageCard';

const { Meta } = Card;
const { Paragraph } = Typography;
const TestimonialCard = ({ dataImage, name, star }: testimonialType) => {
  return (
    <>
      <Card style={{ width: '25%', marginTop: 16 }} hoverable>
        <Meta
          avatar={
            <ImageCard
              data={dataImage}
              state='circle'
              className='width-10 height-10 image-item'
              width='168'
              height='151'
              bottom='2'
              left='-9'
            />
          }
          title={name}
          description={<Rate allowHalf defaultValue={star} />}
        />
        <Paragraph className='justify-text mg-top'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          adipisci excepturi consequatur nam eius, sequi repellat explicabo id
          quia eveniet, aspernatur assumenda, libero inventore architecto
          aperiam corporis voluptates tenetur quibusdam!
        </Paragraph>
      </Card>
    </>
  );
};

export default TestimonialCard;
