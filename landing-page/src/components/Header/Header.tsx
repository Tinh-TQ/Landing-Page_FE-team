import React, { useState } from "react";
import { Anchor } from "antd";
import Logo from "../../assets/imgs/logo.png";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Link } = Anchor;

const Header: React.FC = () => {
  const [menu, isShowMenu] = useState(false);

  const ToggleSidebar = () => {
    isShowMenu(!menu);
  };

  return (
    <div>
      <div className="header">
        <div id="mobile-menu" className="mobile-menu-btn">
          <MenuOutlined onClick={() => ToggleSidebar()} />
        </div>
        <a href="/">
          <img alt="logo" src={Logo} className="logo" />
        </a>
        <Anchor affix={false} direction="horizontal" bounds={1}>
          <div className={`navbar-items ${menu ? "active" : "navbar-items"}`}>
            <div className="navbar-items-content">
              {menu && <Link href="#products" title="Products" />}
              {menu && <Link href="#aboutus" title="About Us" />}
              {menu && <Link href="#testimonial" title="Testimonial" />}
              {menu && <Link href="#contact" title="Contact" />}
            </div>
          </div>
        </Anchor>
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
