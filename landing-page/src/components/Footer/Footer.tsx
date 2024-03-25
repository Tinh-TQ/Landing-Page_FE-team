import React from "react";
import { Input, Space, Row, Col, Flex } from "antd";
import Logo2 from "../../assets/imgs/white-logo.png";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";
import { activityStatuses, activityStatusesIcons } from "../../constants/config/contentConfig";
 
const { Search } = Input;
 
type FooterProps = {
  content?: string[];
  icon?: React.ForwardRefExoticComponent<
    Omit<AntdIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>
  >;
};
 
const Footer = (props: FooterProps) => {
  console.table(activityStatusesIcons);
  return (
<footer className="footer__section">
      <Flex >
        <Row gutter={[128, 64]} className="container__footer">
          <Col span={8} xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="top__logo" style={{ textAlign: 'justify' }}>
              <img
                alt="logo"
                src={Logo2}
                className="logo"
              />
              <span className="sub-title" style={{ marginTop: "8px", fontSize: '20px' }}>
                Discover tranquility at Ngopi a sanctuary for unwinding, where
                your evenings are perfected with relaxation and rich flavors.
              </span>
              <span className="sub-title" style={{ marginTop: "20px", fontSize: '20px' }}>
                hello@ngopi.com
              </span>
              <span className="sub-title" style={{ marginTop: "20px", fontSize: '20px' }}>Phone : +01 23456789</span>
            </div>
          </Col>
          <Col span={24} xs={24} sm={24} md={12} lg={12} xl={12} >
            <Row gutter={[24, 24]}>
              {activityStatuses.map((value, index) => {
                return (
                  <div className="footer-right" key={index}>
                    <Col span={24} className="title">
                      {value?.header}
                    </Col>
                    <Col span={16} className="col__nav" xs={24} sm={24} md={12} lg={12} xl={12}>
                      {value?.content.map((item: any, itemIndex: any) => (
                        <div key={itemIndex} style={{ display: 'flex' }}>
                          <a href="#" className="sub-menu">{item}</a>
                        </div>
                      ))}
                    </Col>
                    <Row>
                      {index === 2 && activityStatusesIcons.map((value, index) => {
                        return (
 
                          <Col span={16} style={{ display: 'flex', flexDirection: 'row' }}>
                            {value?.content.map((item: any, itemIndex: any) => (
                              <div key={itemIndex} style={{ display: 'flex', flexDirection: 'row' }}>
                                <a href="#" className="sub-menu">{item}</a>
                              </div>
                            ))}
                          </Col>
 
                        );
                      })}
                    </Row>
                  </div>
                );
              })}
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column',    marginRight: "-45px", marginTop: '24px' }}>
              <span className="title" style={{ textAlign: 'justify', marginLeft: '0px' }}>
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
      </Flex>
    </footer>
  );
};
 
export default Footer;
 