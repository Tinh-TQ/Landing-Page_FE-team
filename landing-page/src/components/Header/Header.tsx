import { isMobile, isBrowser } from "react-device-detect";

import React, { useEffect, useState } from "react";
import { Anchor } from "antd";
import Logo from "../../assets/imgs/logo.png";
import {
  CloseOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Navbar from "./Navbar";

const { Link } = Anchor;

const Header: React.FC = () => {
  const [menu, isShowMenu] = useState(false);
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const ToggleSidebar = () => {
    console.log("Đã vào đây");
    isShowMenu(!menu);
    console.log(menu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsVisibleMenu(isMobile);
  }, [isMobile]);

  return (
    <div>
      <div className="header">
        <a href="/">
          <img alt="logo" src={Logo} className="logo" />
        </a>
        {isMobile ? (
          <Anchor affix={false} direction="horizontal" bounds={1}>
            <div className={`navbar-items ${menu ? "active" : ""}`}>
              <div className="navbar-items-content">
                <div>
                  <Navbar toggleSidebar={ToggleSidebar}/>
                </div>
              </div>
            </div>
          </Anchor>
        ) : (
          <>
            <Anchor affix={false} direction="vertical" style={{ flexDirection: "row" }}>
              <div className={`navbar-items ${menu ? "active" : ""}`}>
                <div
                  className="navbar-items-content"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <Link
                    href="#products"
                    title="Products"
                    className="menu-item"
                  />
                  <Link href="#aboutus" title="About Us" />
                  <Link
                    href="#testimonial"
                    title="Testimonial"
                    className="menu-item"
                  />
                  <Link href="#contact" title="Contact" className="menu-item" />
                </div>
              </div>
            </Anchor>
          </>
        )}

        <div className="icon-menu">
          <SearchOutlined size={15} />
          <ShoppingCartOutlined size={15} />
        </div>
        <div
          className={`sidebar-overlay ${menu ? "active" : ""}`}
          onClick={() => ToggleSidebar()}
        ></div>
      </div>
    </div>
  );
};

export default Header;
