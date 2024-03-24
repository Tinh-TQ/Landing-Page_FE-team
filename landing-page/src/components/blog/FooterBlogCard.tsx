import { Flex, Typography } from "antd"
import "../Common.css";
import ButtonDetail from "./ButtonDetail";

const {Paragraph} = Typography;

const FooterBlogCard = () => {
  return (
    <>
    <Flex vertical align="flex-end" justify="space-between" >
        <Paragraph className="justify-text bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem a sit nam rem eius illum saepe! Tempore architecto atque accusamus fuga, excepturi ab rem earum mollitia corrupti a eaque consectetur?</Paragraph>
        <ButtonDetail/>
    </Flex>
    </>
  )
}

export default FooterBlogCard;