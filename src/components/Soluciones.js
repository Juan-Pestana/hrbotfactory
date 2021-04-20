import React from 'react'


import {useStaticQuery} from 'gatsby'
import SolutionSlider from '../components/SolutionsSlider'
import { DividerBottom, Divider } from './ui/divider'











const Soluciones = () => {

 

    


    const data = useStaticQuery(graphql`
query Soluciones {
    soluciones: allFile(sort: {order: ASC, fields: name}, filter: {relativeDirectory: {eq: "soluciones"}}) {
      nodes {
        id
        name
        childImageSharp {
          fluid(maxWidth: 420) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`)


  


  

    
const images = [...data.soluciones.nodes]


    return (
        <>
        <div  className='section' style={{backgroundColor:'#f2f2f2'}}>
            
            <SolutionSlider images={images}/>
            
            
        
        
        <Divider color='#ffff'/>
    </div>
    <DividerBottom/>
  
        </>
    )
}



export default Soluciones



