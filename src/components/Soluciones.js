import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import {useStaticQuery} from 'gatsby'
import SolutionSlider from '../components/SolutionsSlider'






const SolutionsTabs = styled.div`
    
    width: 100%;

    .product{
       
        display: flex !important;
        justify-content: space-around;
        flex-wrap: wrap;
        height: 70vh;
        width: 100%;

 
        background-size: cover;
        background-position: center;
        display: block;

        transition: all 500ms ease-in;
        
    }


    .textContainer{
 
        padding: 5rem 0rem 3rem 0rem;
        color: var(--txt-primary);
        width: 50%;

    }


    .imageContainer{
       
        margin-top: auto;
        width: 50%;
        min-width: 300px;
        max-width: 550px;
    }

 
    
    

    

    @media (max-width: 800px){

    /* .slideContainer{
        height: 750px;
        
    } */

    .imageContainer{
        display: none;
        /* width: 50%;
        margin-top: auto;
        padding: 0 2rem;
        
        .image{
            width: 80%;
        } */
    }
 

    .textContainer{
        width: 100%;
        padding: 2rem 1rem;
        }

    }


`;




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
            
            
        
        
        
    </div>
  
        </>
    )
}



export default Soluciones



