import { CloseOutlined } from "@ant-design/icons"
import React, { useEffect, useState } from "react";
import { Anchor, Button } from "antd";


const { Link } = Anchor;

interface NavbarProps {
  toggleSidebar: () => void;
}


const Navbar = ({ toggleSidebar }: NavbarProps) => {

    const handleChange = () => {
      toggleSidebar();
    }
 
    return (
        <>
        <div>
        <Button onClick={() => handleChange()}>
        <CloseOutlined
          className="close-menu-btn"
        />
        </Button>
        </div>
        <div style={{ opacity: 0 }} className="menu-item">
          ..
        </div>
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
        <Link
          href="#contact"
          title="Contact"
          className="menu-item"
        />
      </>
    )
}


export default Navbar;