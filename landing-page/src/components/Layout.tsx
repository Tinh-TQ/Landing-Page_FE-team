import React, { Fragment } from 'react';
import Footer from './Footer/Footer';
import Button from './commons/Button';
import SmallBtn from './commons/SmallBtn';
import MainPage from './pages/MainPage';
import StatisticPage from './pages/StatisticPage';
import CardPage from './pages/CardPage';
import {
  MockDataArray,
  imageBlog,
  mockTestimonialCardData,
} from '../constants/config/ImageCard';
import AboutPage from './pages/AboutPage';
import TestimonialPage from './pages/TestimonialPage';
import BlogPage from './pages/BlogPage';
import { Flex } from 'antd';
import Header from './Header/Header';
import { StyledDiv } from './Layout.styled';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <StyledDiv className='container'>
        <MainPage />
        <StatisticPage />
        <CardPage data={MockDataArray} />
        <AboutPage />
        <TestimonialPage data={mockTestimonialCardData} />
        <BlogPage data={imageBlog} />
      </StyledDiv>
      <Footer />
    </Fragment>
  );
};

export default Layout;
