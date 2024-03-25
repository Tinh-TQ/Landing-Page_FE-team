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
      width: 300,
      borderRadius: "0 18% 0 10%",
      border: "2px solid #dadada",
    }}
  >
    <Meta
     avatar={
       <ImageCard
         data={data}
         state='right'
         className='width-275 mg-left mg-top-10'
         width='275'
         height='200'
         left='-15'
         top="-10"
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