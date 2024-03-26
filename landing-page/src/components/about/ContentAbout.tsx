import { Typography } from 'antd';
import '../Common.css';

const { Paragraph } = Typography;

type ContentAboutProps = {
  className?: string;
};

const ContentAbout = ({ className = '' }: ContentAboutProps) => {
  return (
    <>
      <div className={`area-content-about ${className}`}>
        <Paragraph className='justify-text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis sunt,
          dolores qui eligendi cumque magni asperiores ad aperiam tempora
          provident cupiditate, possimus eum, ex vitae minima alias quibusdam?
          Sed, a.
        </Paragraph>
        <Paragraph className='justify-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quos
          possimus eveniet modi rem, nihil ea perferendis sint voluptatum error
          quia corrupti at commodi molestias ducimus molestiae inventore dolor?
          Harum?
        </Paragraph>
        <Paragraph className='justify-text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          deserunt perferendis delectus facere, nam eos numquam corrupti nemo
          omnis nesciunt dolores natus quo recusandae est optio? Rerum animi et
          voluptatem!
        </Paragraph>
      </div>
    </>
  );
};

export default ContentAbout;
