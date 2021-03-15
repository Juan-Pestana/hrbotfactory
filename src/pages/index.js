import React, { useRef } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeadingGirl from "../components/HeadingGirl"
import SliderSection from '../components/SliderSection'
import HowItWorks from '../components/HowItWorks'

import Metrics from '../components/Metrics'

import Sass from '../components/Sass'
import Products from '../components/Products'
import Mision from '../components/Mision'
import Ending from '../components/Ending'

const IndexPage = () =>{





 return (
  <Layout>
    <SEO title="hr bot factory" />
    <HeadingGirl/>
    <Products/>
    <SliderSection/>
    <HowItWorks/>
    
    <Metrics/>
    
    <Sass/>
   
    <Mision />
    <Ending/>

  </Layout>
)

 }

export default IndexPage
