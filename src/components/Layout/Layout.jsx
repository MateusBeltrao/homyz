import React from 'react'
import Header from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <div style={{background: "var(--black)", overflow: "hidden"}}>
            <Header></Header>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </>
  )
}

export default Layout