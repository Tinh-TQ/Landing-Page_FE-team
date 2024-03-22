import React from 'react';
import { Anchor } from 'antd';
import Logo from '../../assets/imgs/logo.png';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

// const onChange = (link: string) => {
//     console.log('Next to ', link);
// };

const {Link} = Anchor

const Header: React.FC = () => (
    <div style={{width: '100%'}}>
        <div style={{ display: 'flex', justifyContent: 'space-around', left: '0' }}>
            <img alt='logo' src={Logo} style={{ width: '45px', height: '40px', marginTop: '24px' }} />
            <div style={{ marginTop: '24px'}}>
                <Anchor
                    affix={false}
                    direction="horizontal"
                    // onChange={onChange}
                    bounds={1}
                >
                    <div style={{fontSize: '20px',display: 'flex', flexDirection: 'row'}}>
                    <Link href="#products" title="Products" />
                    <Link href="#aboutus" title="About Us" />
                    <Link href="#testimonial" title="Testimonial" />
                    <Link href="#contact" title="Contact" />
                    </div>
                </Anchor>
            </div>
            <div style={{ marginTop: '24px', display: 'flex', gap: '16px'}}>
                <SearchOutlined size={15}/>
                <ShoppingCartOutlined size={15} />
            </div>
        </div>
    </div>
);

export default Header;