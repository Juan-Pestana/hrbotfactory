import React from 'react'
import CenterMode from './Slides'
import {useStaticQuery} from 'gatsby'
import {Divider, DividerBottom} from './ui/divider'


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
      <>
        <div className='section' style={{backgroundColor: "#6698ff", flexDirection:'column', padding:'4rem 0rem'}}>
            <div className='container' >
                <p className="preHeading" style={{color: '#fff', textAlign:'center'}}>confian en nosotros</p>
                <CenterMode data = {data}/>
            </div>

          
            {/* <Divider color= '#fff'/> */}
        </div>
        {/* <DividerBottom color= '#6698ff'/> */}
      </>
    )
}

export default NewSliderSection