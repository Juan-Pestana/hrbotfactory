import { useStaticQuery } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import {Label} from './ui/Label'
import Img from 'gatsby-image'
import {FaPencilAlt, FaHandHolding, FaQuestion, FaTv, FaUserCog, FaRocket} from 'react-icons/fa'

const FeatComp = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 4rem;
    padding-bottom: 4rem;

    .imageContainer{
        position: relative;
        width: 20%;
        padding: 2rem 0rem;


        
    }

    .labelsContainer{
        flex: 0 0 20%;
        max-width: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      
        text-align: center;

        .iconContainer{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: var(--bgr-primary-1);
            display: flex;
            justify-content: center;
            align-items: center;
            margin: auto;
            color: #ffff;
            font-size: 30px;
        }

      

    }

    @media(max-width: 700px){

        flex-direction: column;
        align-items: center;
        padding-bottom: 3rem;

        .labelsContainer{
            width: 80%;
            padding-bottom: 0;

            div{
                margin: 1.5rem 0rem;
            }
        }
        .imageContainer{
            width:85%;
        }
    }

`;


    


const Features = () => {



    const data = useStaticQuery(graphql`
            query SeurPhone {
                image: file(relativePath: {eq: "phoneSeur.png"}) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const image = data.image




    return (
        
        <div className= 'section' style={{backgroundColor:"#f2f2f2"}}>
            <div className="container" style={{margin: '5rem 0rem'}}>
                <div style={{margin: 'auto',textAlign:'center', maxWidth: '500px'}}> 
                    <p className="preHeading" >Key features</p>
                    <h1 >Nuestros chatbots automatizan todo tu proceso de selección</h1>
                </div>
                
                <FeatComp>
                    <div className='labelsContainer'> 
                        <div>
                            <div className='iconContainer'><FaHandHolding/></div>
                            <p className="preHeading">engagement</p>
                            <p>El chatbot conecta con todas las fuentes de reclutamiento y redes sociales</p>
                        </div>
                        <div>
                            <div className='iconContainer'><FaPencilAlt/></div>
                            <p className="preHeading">interview</p>
                            <p>Evalúa a todos los candidatos proporcionando un matching de adecuación al puesto</p>
                        </div>
                        <div>
                            <div className='iconContainer'><FaQuestion/></div>
                            <p className="preHeading">feedback</p>
                            <p>El chatbot se encarga del feedback de todos los candidatos 24/7 los 365 días del año</p>
                        </div>
                    </div>
                    <div className='imageContainer'>
                        <Img fluid={image.childImageSharp.fluid}/>
                        
                        
                        
                    </div>
                    <div className='labelsContainer'> 
                        <div>
                            <div className='iconContainer'><FaTv/></div>
                            <p className="preHeading">screening</p>
                            <p>Interactúa con todos los candidatos en la plataforma citándolos a entrevistas</p>
                        </div>
                        <div>
                            <div className='iconContainer'><FaUserCog/></div>
                            <p className="preHeading">customized</p>
                            <p>La conversación y Look & feel de los chatbots está personalizada a cada compañía</p>
                        </div>
                        <div>
                            <div className='iconContainer'><FaRocket/></div>
                            <p className="preHeading">video interview</p>
                            <p>El chatbot recoge CV, fotos, documentación y video presentación de los candidatos</p>
                        </div>
                    </div>
                </FeatComp>
                
            </div>
        </div>
            
        
        
    )
}

export default Features
