import React from "react"
import { Link } from "gatsby"
import Engagement from '../components/Engagement'
import Features from '../components/Features'


import Layout from "../components/layout"
import SEO from "../components/seo"

const Recruitment = () => (
  <Layout>
    <SEO title="#smartRecruitment" />
    <Engagement/>
    <Features/>
  </Layout>
)

export default Recruitment