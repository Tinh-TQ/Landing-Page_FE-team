import { CalendarOutlined, UserOutlined } from "@ant-design/icons"
import { Flex, Typography } from "antd"

import '../Common.css'


const { Text } = Typography

type TitleBlogCardType = {
  className?: string;
}

const TitleBlogCard = ({className=""} : TitleBlogCardType) => {

  return (
    <>
    <Flex justify="space-between" className={`${className}`}>

    <div className="user">
      <UserOutlined className="icons"/>
      <Text>John Doe</Text>
    </div>
    <div className="calendar">
      <CalendarOutlined className="icons" />
      <Text>Feb 23, 2024</Text>
    </div>
    </Flex>
    </>
  )
}

export default TitleBlogCard