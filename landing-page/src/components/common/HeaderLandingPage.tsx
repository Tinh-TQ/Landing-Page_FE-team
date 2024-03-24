import { Divider, Typography } from 'antd';
import '../Common.css';

type HeaderLandingPageProps = {
  content: string;
  header: string;
  className?: string;
};

const { Paragraph } = Typography;
const {Title} = Typography;

const HeaderLandingPage = ({
  content,
  header,
  className = '',
}: HeaderLandingPageProps) => {
  return (
    <div className={`'header ${className}'>`}>
      <Paragraph className='color-text fs-18'>{content}</Paragraph>
      <Title level={2}>{header}</Title>
    </div>
  );
};

export default HeaderLandingPage;
