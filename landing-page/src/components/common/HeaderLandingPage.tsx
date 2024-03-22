import { Divider, Typography } from 'antd';
import '../Common.css';

type HeaderLandingPageProps = {
  content: string;
  header: string;
  className?: string;
};

const { Paragraph } = Typography;

const HeaderLandingPage = ({
  content,
  header,
  className = '',
}: HeaderLandingPageProps) => {
  return (
    <div className={`'header ${className}'>`}>
      <Paragraph className='color-text'>{content}</Paragraph>
      <Divider>{header}</Divider>
    </div>
  );
};

export default HeaderLandingPage;
