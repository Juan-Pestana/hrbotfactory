import React from "react"

import Soluciones from '../components/Soluciones'
import Soluciones2 from '../components/Soluciones2'
import NewSliderSection from '../components/NewSliderSection'
import ComoLoHacemos from '../components/ComoLoHacemos'
import FeaturedBlogs from '../components/FeaturedBlogs'


import Layout from "../components/layout"
import SEO from "../components/seo"

const Recruitment = () => (
  <Layout>
    <SEO title="#smartRecruitment" />
    <Soluciones/>
    <Soluciones2/>
    <NewSliderSection/>
    <ComoLoHacemos/>
    <FeaturedBlogs/>
    
    
  </Layout>
)

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