import React from 'react'
import Header from './Header/Header'
import Content from './Content/SlideImages'
import Footer from './Footer/Footer'
import Button from './commons/Button'
import SmallBtn from './commons/SmallBtn'
import MainPage from './pages/MainPage'
import StatisticPage from './pages/StatisticPage'
import CardPage from './pages/CardPage'
import { MockDataArray } from '../constants/config/ImageCard';


const Layout = () => {
  return (
    <>

      <Header />
      <MainPage />
      <StatisticPage />
      <CardPage data={MockDataArray} />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '48px 0' }}>
        <Button text='read more' />
      </div>
      <Footer />
    </>
  )
}

export default Layout
