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
    <footer
      style={{
        paddingTop: "30px",
        paddingBottom: "30px",
        backgroundColor: "#282A3A",
      }}
    >
      <div style={{ margin: "0 auto" }}>
        <Row
          gutter={[24, 24]}
          style={{
            maxWidth: "1200px",
            display: "flex",
            margin: "0 auto",
            color: "#fff",
          }}
        >
          <Col span={8}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "0",
              }}
            >
              <img
                alt="logo"
                src={Logo2}
                style={{ width: "170px", height: "58px" }}
              />
              <span className="sub-title" style={{ marginTop: "20px" }}>
                Discover tranquility at Ngopi a sanctuary for unwinding, where
                your evenings are perfected with relaxation and rich flavors.
              </span>
              <span className="sub-title" style={{ marginTop: "20px" }}>
                hello@ngopi.com
              </span>
              <span className="sub-title">Phone : +01 23456789</span>
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
                style={{
                  display: "flex",
                  flexDirection: "column",
                  right: "-50px",
                }}
              >
                <span className="sub-menu">Services</span>
                <span className="sub-menu">Portfolio</span>
                <span className="sub-menu">About us</span>
                <span className="sub-menu">Testimonial</span>
              </Col>
              <Col
                span={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  right: "-55px",
                }}
              >
                <span className="sub-menu">Suport</span>
                <span className="sub-menu">Privacy Policy</span>
                <span className="sub-menu">Terms & Conditions</span>
              </Col>
              <Col
                span={8}
                style={{ display: "flex", top: "-50px", right: "-45px" }}
              >
                <FacebookOutlined className="icon-footer" />
                <TwitterOutlined className="icon-footer" />
                <InstagramOutlined className="icon-footer" />
                <LinkedinOutlined className="icon-footer" />
                <YoutubeOutlined className="icon-footer" />
              </Col>
            </Row>
            <Row style={{ marginLeft: "60px", marginRight: "-45px" }}>
              <span className="title" style={{ right: "-50px" }}>
                Subscribe
              </span>

              <div className="custom-search">
                <input
                  type="text"
                  className="custom-search-input"
                  placeholder="Enter your email"
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
