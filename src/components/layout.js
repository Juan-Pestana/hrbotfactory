
import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from '../components/Footer'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      logos: allFile(filter: {relativeDirectory: {eq: "logos"}}){
        nodes{
          id
          childImageSharp{
            fluid(maxWidth: 290){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const logos = [...data.logos.nodes]
  console.log(logos);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} logos={logos}/>
      <div
        style={{
          margin: `0 auto`,
          width: "100%",

        }}
      >
        <main>{children}</main>
        <Footer logos={logos}/>
          
        
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
