import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Input, Space, Row, Col } from "antd";
import Logo2 from "../../assets/imgs/white-logo.png";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";
import { activityStatuses } from "../../constants/config/contentConfig";

const { Search } = Input;

type FooterProps = {
  content?: string[];
  icon?: React.ForwardRefExoticComponent<
    Omit<AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>
  >;
};

const Footer = (props: FooterProps) => {
  return (
    <footer className="footer__section">
      <div className="left_footer">
        <Row gutter={[24, 24]} className="container__footer">
          <Col span={8}>
            <div className="top__logo" style={{ textAlign: 'justify' }}>
              <img
                alt="logo"
                src={Logo2}
                className="logo"
              />
              <span className="sub-title" style={{ marginTop: "20px", fontSize: '20px' }}>
                Discover tranquility at Ngopi a sanctuary for unwinding, where
                your evenings are perfected with relaxation and rich flavors.
              </span>
              <span className="sub-title" style={{ marginTop: "20px", fontSize: '20px' }}>
                hello@ngopi.com
              </span>
              <span className="sub-title" style={{ marginTop: "20px", fontSize: '20px' }}>Phone : +01 23456789</span>
            </div>
          </Col>
          <Col span={16}>
            <Row gutter={[24, 24]}>
              {activityStatuses.map((value, index) => {
                return (
                  <Col span={8} key={index} className="title">
                    {value?.header}
                  </Col>
                );
              })}
            </Row>
            <Row gutter={[24, 24]}>
              <Col
                span={8}
                className="col__nav"
              >
                <a href="#" className="sub-menu">Services</a>
                <a href="#" className="sub-menu">Portfolio</a>
                <a href="#" className="sub-menu">About us</a>
                <a href="#" className="sub-menu">Testimonial</a>
              </Col>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  right: "-55px",
                }}
              >
                <a href="#" className="sub-menu">Suport</a>
                <a href="#" className="sub-menu">Privacy Policy</a>
                <a href="#" className="sub-menu">Terms & Conditions</a>
              </Col>
              <Col
                span={8}
                style={{ display: "flex", top: "11px", right: "-45px", justifyContent: 'space-between'}}
              >
                <a href="#"><FacebookOutlined className="icon-footer" /></a>
                <a href="#"><TwitterOutlined className="icon-footer" /></a>
                <a href="#"><InstagramOutlined className="icon-footer" /></a>
                <a href="#"><LinkedinOutlined className="icon-footer" /></a>
                <a href="#"><YoutubeOutlined className="icon-footer" /></a>
              </Col>
            </Row>
            <Row style={{ marginLeft: "60px", marginRight: "-45px", marginTop: '24px'}}>
              <span className="title" style={{ right: "-50px" }}>
                Subscribe
              </span>

              <div className="custom-search">
                <input
                  type="text"
                  className="custom-search-input"
                  placeholder="name@domain.com"
                />
                <button className="custom-search-botton" type="submit">
                  Send
                </button>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
