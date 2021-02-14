import { useStaticQuery } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import {Label} from './ui/Label'
import Img from 'gatsby-image'
import { useState } from 'react';

const FeatComp = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 2rem;
    padding-bottom: 8rem;

    .imageContainer{
        position: relative;
        width: 380px;

        .innerImage{
            position: absolute;
            width: 58%;
            left: 41%;
            margin-left: -20%;
            top: 10%;
            
            z-index: 1;
        }
        
    }

    .labelsContainer{
        flex: 0 0 15%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 5rem;

        p{
            line-height: 1.65
        }

    }

    @media(max-width: 700px){

        flex-direction: column;
        align-items: center;
        padding-bottom: 5rem;

        .labelsContainer{
            width: 220px;
            padding-bottom: 0
        }
    }

`;


    


const Features = () => {

    const [show, setShow] = useState(0)

    const data = useStaticQuery(graphql`
        query Images {
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




    return (
        <>
        <div className= 'section' style={{backgroundColor:"#f2f2f2"}}>
            <div className="container" style={{marginTop: '3rem'}}>
                <h1 style={{margin: 'auto',textAlign:'center', maxWidth: '500px'}}>Nuestros chatbots automatizan todo tu proceso de selección</h1>
                <FeatComp>
                    <div className='labelsContainer'> 
                        <div>
                            <Label onMouseEnter={()=>setShow(0)}>engagement<span role='img' aria-label='engagement emoji'> 😍 </span></Label>
                            <p>El chatbot conecta con todas las fuentes de reclutamiento y redes sociales</p>
                        </div>
                        <div>
                            <Label onMouseEnter={()=>setShow(3)}>interview<span role='img' aria-label='interview emoji'> 🙋‍♀️ </span></Label>
                            <p>Evalúa a todos los candidatos proporcionando un matching de adecuación al puesto</p>
                        </div>
                        <div>
                            <Label onMouseEnter={()=>setShow(1)}>feedback<span role='img' aria-label='feedback emoji'> 👍 </span></Label>
                            <p>El chatbot se encarga del feedback de todos los candidatos 24/7 los 365 días del año</p>
                        </div>
                    </div>
                    <div className='imageContainer'>
                        <Img fluid={images[3].childImageSharp.fluid}/>
                        <div className= 'innerImage'>
                        <Img fluid={images[show].childImageSharp.fluid} />
                        </div>
                        
                        
                    </div>
                    <div className='labelsContainer'> 
                        <div>
                            <Label onMouseEnter={()=>setShow(6)}>screening<span role='img' aria-label='chart emoji'> 📈 </span> </Label>
                            <p>Interactúa con todos los candidatos en la plataforma citándolos a entrevistas</p>
                        </div>
                        <div>
                            <Label onMouseEnter={()=>setShow(5)}>customized<span role='img' aria-label='writing emoji'> ✍ </span></Label>
                            <p>La conversación y Look & feel de los chatbots está personalizada a cada compañía</p>
                        </div>
                        <div>
                            <Label onMouseEnter={()=>setShow(4)}>video interview<span role='img' aria-label='selfie emoji'> 🤳 </span></Label>
                            <p>El chatbot recoge CV, fotos, documentación y video presentación de los candidatos</p>
                        </div>
                    </div>
                </FeatComp>
                
            </div>
            <div className="custom-shape-divider-bottom-1611955911">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
        <div style={{height: '14px', display: 'block', backgroundColor: '#f2f2f2'}}>

        </div>
        </>
    )
}

export default Features
