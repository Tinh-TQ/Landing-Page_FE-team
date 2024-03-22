import React from 'react';
import Header from './Header';
import Content from './content/Content';
import Footer from './Footer/Footer';
import Button from './commons/Button';
import SmallBtn from './commons/SmallBtn';

const Layout = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      {/* <SmallBtn /> */}
      {/* <Button onClick={(e: any) => console.log(e.target.value)}/> */}
    </>
  );
};

export default Layout;
