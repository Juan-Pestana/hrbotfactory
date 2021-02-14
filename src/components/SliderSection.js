import React from 'react'
import CenterMode from './Slides'
import {useStaticQuery} from 'gatsby'


const SliderSection = () => {

    const data = useStaticQuery(graphql`
    query Clients {
        clients: allFile(filter: {relativeDirectory: {eq: "clients"}}) {
            nodes {
              id
              name
              childImageSharp {
                fluid(maxWidth:420){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
    }
`)



    return (
        <div className='section' style={{backgroundColor: "#6698ff", marginTop: '5px'}}>
            <div className='container'>
                <p className="preHeading" style={{color: '#fff', paddingTop: '4rem', textAlign:'center'}}>confian en nosotros</p>
                <CenterMode data = {data}/>
            </div>
            
            
        </div>
    )
}

export default SliderSection
