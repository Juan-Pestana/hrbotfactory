import React from 'react'
import CenterMode from './Slides'
import {useStaticQuery} from 'gatsby'
import Testimonials from './Testimonials'


const NewSliderSection = () => {

    const data = useStaticQuery(graphql`
    query NewClients {
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
        <div className='section' style={{backgroundColor: "#6698ff", marginTop: '5px', flexDirection:'column'}}>
            <div className='container' >
                <p className="preHeading" style={{color: '#fff', paddingTop: '4rem', textAlign:'center'}}>confian en nosotros</p>
                <CenterMode data = {data}/>
            </div>
            <div className='container'>
                 <Testimonials/>
            </div>
          
            
        </div>
    )
}

export default NewSliderSection