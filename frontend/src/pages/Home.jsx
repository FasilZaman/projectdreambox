import React from 'react'
import Banner from '../Components/banner/Banner'
import Secondheader from '../Components/Homeheader/Secondheader'
import Header from '../Components/Navbar/Header'
import Posts from '../Components/posts/Posts'

function Home() {
  return (
    <div>
    <Header />
    <Banner />
    <Secondheader title='Ongoing bids'/>
    <Posts />
    <Secondheader title='Recent Winners'/>
    <Posts />
    </div>
  )
}

export default Home