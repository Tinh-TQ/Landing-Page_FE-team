import React from 'react'
import Header from './Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import Button from './Button/Button'

const Layout = () => {
  return (
    <div style={{}}>
      <Header />
      <Content />
      <Footer />
      <Button onClick={(e: any) => console.log(e.target.value)}/>
    </div>
  )
}

export default Layout
