import React from 'react';
import Header from './Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Button from './commons/Button';
import SmallBtn from './commons/SmallBtn';
import MainPage from './pages/MainPage';
import StatisticPage from './pages/StatisticPage';
import CardPage from './pages/CardPage';
import { MockDataArray, imageBlog, mockTestimonialCardData } from '../constants/config/ImageCard';
import AboutPage from './pages/AboutPage';
import TestimonialPage from './pages/TestimonialPage';
import BlogPage from './pages/BlogPage';
import { Flex } from 'antd';

const Layout = () => {
  return (  
    <>
      <Header />
        <MainPage />
        <StatisticPage />
        <CardPage data={MockDataArray} />
        <AboutPage />
        <TestimonialPage data={mockTestimonialCardData}/>
        <BlogPage data={imageBlog}/>
      <Footer />
    </>
  );
};

export default Layout;
