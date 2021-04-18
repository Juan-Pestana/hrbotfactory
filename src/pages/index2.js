import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"
import HeadingGirl from "../components/HeadingGirl"
import SliderSection from '../components/SliderSection'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Metrics from '../components/Metrics'
import Engagement from '../components/Engagement'
import Sass from '../components/Sass'
import Products from '../components/Products'
import Mision from '../components/Mision'
import Ending from '../components/Ending'

const IndexPage = () =>{





 return (
  <Layout>
    <SEO title="hr bot factory" />
    <HeadingGirl/>
    
    <SliderSection/>
    <HowItWorks/>
    <Engagement/>
    <Metrics/>
    <Features/>
    <Sass/>
    <Products/>
    <Mision />
    <Ending/>

  </Layout>
)

 }

 export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default IndexPage
