import React, {useEffect} from "react"

import Soluciones from '../components/Soluciones'

import NewSliderSection from '../components/NewSliderSection'
import Mision from '../components/Mision'
import FeaturedBlogs from '../components/FeaturedBlogs'
import IndexSantander from '../components/IndexSantander'
import IndexFeatures from '../components/IndexFeatures'

import Aos from 'aos'


import Layout from "../components/layout"
import SEO from "../components/seo"


const Recruitment = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
    },[])

  return(
    <Layout>
      <SEO title="#smartRecruitment" />
      <Soluciones/>
      <IndexSantander/>
      <IndexFeatures/>
      <NewSliderSection/>
  
      <FeaturedBlogs/>
      <Mision/>
      
    
    
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

export default Recruitment