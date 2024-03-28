import React, { useEffect, useState } from "react";
import { Anchor, Button } from "antd";
import Logo from "../../assets/imgs/logo.png";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Navbar from "./Navbar";
 
const { Link } = Anchor;
 
const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileScreen, setMobileScreen] = useState(window.innerWidth <= 768);
 
  const toggleSidebar = () => {
    setShowMobileMenu(!showMobileMenu);
  };
 
  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth <= 768);
    };
 
    window.addEventListener('resize', handleResize);
 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  return (
    <>
      <div className="header">
        <div className="menu-btn">
          <Button onClick={() => toggleSidebar()}>
            <MenuOutlined className="open-menu-btn"/>
          </Button>
        </div>
        <a href="/">
          <img alt="logo" src={Logo} className="logo" />
        </a>
        {mobileScreen && (
          <Anchor affix={false} direction="horizontal" bounds={1}>
            <div className={` ${showMobileMenu ? "active navbar-items" : "hidden-menu"}`}>
              <div className="navbar-items-content">
                <div>
                  <Navbar toggleSidebar={toggleSidebar} />
                </div>
              </div>
            </div>
          </Anchor>
        )}
        {!mobileScreen && (
          <Anchor affix={false} direction="vertical" style={{ flexDirection: "row" }}>
            <div className={`navbar-items ${showMobileMenu ? "active" : ""}`}>
              <div className="navbar-items-content" style={{ display: "flex", flexDirection: "row" }}>
                <Link href="#products" title="Products" className="menu-item" />
                <Link href="#aboutus" title="About Us" />
                <Link href="#testimonial" title="Testimonial" className="menu-item" />
                <Link href="#contact" title="Contact" className="menu-item" />
              </div>
            </div>
          </Anchor>
        )}
        <div className="icon-menu">
          <SearchOutlined size={15} />
          <ShoppingCartOutlined size={15} />
        </div>
        <div className={`sidebar-overlay ${showMobileMenu ? "active" : ""}`} onClick={() => toggleSidebar()}></div>
      </div>
    </>
  );
};
 
export default Header;