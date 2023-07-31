import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'

function DashboardLayout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default DashboardLayout