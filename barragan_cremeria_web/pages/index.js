import React from "react"

import Hero from '../components/Hero';
import Header from "../components/Header";
import Aboutus from "../components/Aboutus";
import Products from "../components/Products";

export default function Home() {

  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <Aboutus />
      <Products />


    </div>
  )
}
