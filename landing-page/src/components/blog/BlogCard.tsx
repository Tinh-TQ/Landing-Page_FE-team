import { Card, Flex, Typography } from "antd";
import ImageCard from "../common/ImageCard";
import { ImageType } from "../../interfaces";
import TitleBlogCard from "./TitleBlogCard";
import FooterBlogCard from "./FooterBlogCard";

type BlogCardProps = {
  data: ImageType;
}

const {Paragraph} = Typography

const {Meta} = Card;

const BlogCard = ( { data } :BlogCardProps ) => {
  return(
    <>
    <Card
    bordered={true}
    style={{
      maxWidth: 300,
      borderRadius: "0 20% 0 10% ",
      border: "2px solid #dadada",
    }}
  >
    <Meta
     avatar={
       <ImageCard
         data={data}
         state='right'
         className='meta-card-image'
         width='230'
         height='200'
         left="10"
        />
          }
        />
        <Flex vertical>
          <TitleBlogCard className='mg-top10 mg-bottom10 '/>
          <FooterBlogCard />
        </Flex>
  </Card>
    </>
  );
}

export default BlogCard;
