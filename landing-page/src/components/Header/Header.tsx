import React, { useState } from 'react';
import { Anchor } from 'antd';
import Logo from '../../assets/imgs/logo.png';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

// const onChange = (link: string) => {
//     console.log('Next to ', link);
// };

const { Link } = Anchor


const Header: React.FC = () => {
    const [menu, isShowMenu] = useState(false)
    return (
        <div>
            <div className='header'>
                <a href='/'><img alt='logo' src={Logo} className='logo' /></a>
                <div className={menu ? "nav__menu show-menu navbar" : "nav__menu"}>
                    <Anchor
                        affix={false}
                        direction="horizontal"
                        // onChange={onChange}
                        bounds={1}
                    >
                        <div className='navbar-items'>
                            <Link href="#products" title="Products" />
                            <Link href="#aboutus" title="About Us" />
                            <Link href="#testimonial" title="Testimonial" />
                            <Link href="#contact" title="Contact" />
                        </div>
                    </Anchor>
                </div>
                <div className='icon-menu'>
                    <SearchOutlined size={15} />
                    <ShoppingCartOutlined size={15} />
                </div>
                
            </div>
           
        </div>
    )
};

export default Header;