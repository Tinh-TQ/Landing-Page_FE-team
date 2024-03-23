import React from 'react';
import Header from './Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Button from './commons/Button';
import SmallBtn from './commons/SmallBtn';
import MainPage from './pages/MainPage';
import StatisticPage from './pages/StatisticPage';
import CardPage from './pages/CardPage';
import { MockDataArray, imageContent } from '../constants/config/ImageCard';
import AboutPage from './pages/AboutPage';
import TestimonialCard from './testimonial/TestimonialCard';

const Layout = () => {
  return (
    <>
      <Header />
      <MainPage />
      <StatisticPage />
      <CardPage data={MockDataArray} />
      <AboutPage />
      <TestimonialCard dataImage={imageContent} name='Michael Wong' star={5} />
      <Footer />
      {/* <SmallBtn /> */}
      {/* <Button onClick={(e: any) => console.log(e.target.value)}/> */}
    </>
  );
};

export default Layout;
