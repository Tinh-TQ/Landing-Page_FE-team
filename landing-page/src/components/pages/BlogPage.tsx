import { Flex } from "antd";
import { ImageType } from "../../interfaces"
import HeaderLandingPage from "../common/HeaderLandingPage";
import BlogCard from "../blog/BlogCard";
import Line from "../Line";


type BlogPageProps = {
  data: ImageType[];
}

const BlogPage = ({ data } : BlogPageProps) => {
  return(
    <>
      <div className="blog-page">
      <Line/>
      <HeaderLandingPage content='Blog' header="Read our articles" />
      <Flex align="center" justify="center" gap={150} >
        {data.map(value => (
          <BlogCard data={value}/>
        ))}
      </Flex>
      </div>
    </>
  );
}

export default BlogPage;
