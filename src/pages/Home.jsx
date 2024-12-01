import React from 'react'
import Header from '../components/Header'
import Filter from "../components/Filter"
import Footer from '../components/Footer'
import Banner from '../components/Banner'
function Home() {
  return (
    <div>
      <Header/>
      <Filter/>
      <Banner/>
      <Footer/> 
    </div>
  )
}

export default Home