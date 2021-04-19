import { useStaticQuery } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import { LinkButton} from './ui/Button'
import Img from 'gatsby-image'


const RecPhone = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 2rem;
    padding-bottom: 5rem;

    .imageContainer{
        position: relative;
        width: 400px;

        margin-right: 3rem;

        .innerImage{
            position: absolute;
            width: 58%;
            left: 41%;
            margin-left: -20%;
            top: 10%;            
            z-index: 1;
        }
        
    }


  
    .textContainer{
        width: 100%;
        margin-top: 4rem;
        padding: 1rem 2rem;
        color: var(--txt-primary);

        
    }
    @media (max-width: 900px){
        flex-direction: column;
        align-items: center;
        padding-bottom: 5rem;

        .imageContainer{
            margin: auto;
            width: 60%;
        }
        .textContainer{
            margin-top: 2rem;
            padding: 0;
            width: 90%;
            margin-bottom: 3rem;
            
        }
    }


`;


    


const RecruitPhone = () => {

   

    const data = useStaticQuery(graphql`
        query PhoneImages {
            images: allFile(filter: {relativeDirectory: {eq: "features"}}) {
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

    const images = [...data.images.nodes]

 const imageFondo = images.find(image => image.name === 'fondo-de-caracteristicas')
 const imageTop = images.find(image => image.name === 'engagement')


    return (
        <>
        <div className= 'section backgroundGrad' >
            <div className="container" style={{marginTop: '3rem'}}>
             
                <RecPhone>
                    
                        <div className= 'textContainer'>
                            
                                <p className= 'preHeading' data-aos="fade-right" data-aos-offset="0" data-aos-delay="50">
                                revoluciona tu reclutamiento
                                    
                                </p>
                                <h1 data-aos="fade-right" data-aos-offset="0" data-aos-delay="500">Integra un asistente virtual en tu equipo de selección</h1>
                                <p data-aos="fade-right" data-aos-offset="0" data-aos-delay="1000">Toda la información integrada en una plataforma específicamente diseñada para tus procesos y posiciones.</p>
                                <p data-aos="fade-right" data-aos-offset="0" data-aos-delay="1500">Centra tus esfuerzos en aquellas partes del proceso que realmente aportan valor.</p>
                            
                            <LinkButton  to='/contact' marginl={true} data-aos="zoom-in" data-aos-offset="0" data-aos-delay="1500">Solicita una demo</LinkButton>
                        </div>

                    

                    
                        <div className='imageContainer' data-aos="fade-left" data-aos-offset="0">
                            
                                <Img fluid={imageFondo.childImageSharp.fluid}/>
                                <div className= 'innerImage'>
                                <Img fluid={imageTop.childImageSharp.fluid} />
                                </div>
                            
                            
                            
                        </div>
                   
                    
                    
                </RecPhone>
                
            </div>
            
        </div>
         

        
        </>
    )
}

export default RecruitPhone
