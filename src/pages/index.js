import React, { useRef } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeadingGirl from "../components/HeadingGirl"
import SliderSection from '../components/SliderSection'
import HowItWorks from '../components/HowItWorks'
import Engagement from '../components/Engagement'
import Metrics from '../components/Metrics'
import Features from '../components/Features'
import Sass from '../components/Sass'
import Products from '../components/Products'
import Mision from '../components/Mision'
import Ending from '../components/Ending'

const IndexPage = () =>{

  const nosotrosRef = useRef()
  const productsRef = useRef()
  const headingRef = useRef()

  const scrollToNosotros =() =>{
    nosotrosRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const scrollToProductos =() =>{
    productsRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const scrollToTop =() =>{
    
  }

 return (
  <Layout>
    <SEO title="Home" ref={headingRef}/>
    <HeadingGirl/>
    <SliderSection/>
    <HowItWorks/>
    <Engagement/>
    <Metrics/>
    <Features/>
    <Sass/>
    <Products ref= {productsRef}/>
    <Mision ref={nosotrosRef}/>
    <Ending/>

  </Layout>
)

 }

export default IndexPage
