import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Link, Trans} from 'gatsby-plugin-react-i18next'
import {Button} from '../components/ui/Button'
import Img from 'gatsby-image'
import {useStaticQuery} from 'gatsby'






const SolutionsTabs = styled.div`
    margin: 5rem 0;
    width: 100%;
    .slideContainer{
        position: relative;
        height: 550px;
        overflow: hidden;
    }
    .product{
        position: absolute;
        display: flex !important;
        justify-content: space-around;
        flex-wrap: wrap;
        height: 100%;
        width: 100%;
        top: -550px ;
        left:0;
        background-size: cover;
        background-position: center;
        display: block;
        opacity:0;
        transition: all 500ms ease-in;
        
    }
    .product.selected {
        transform: translateY(550px);
        opacity:1;
        
    }

    .textContainer{
 
        padding: 3rem 2rem;
        color: var(--txt-primary);
        width: 40%

    }
    .imageContainer{
        margin-top: auto;
        height: 90%;
        width: 37%;
        min-width: 300px;
        max-width: 500px;
    }

    .tabs{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        width: 100%;
        margin: 0;
        padding: 0;
        
    }
    .tab{
        text-align: center;
        flex: 1 1 20%;
        min-width: 180px;
        text-transform: uppercase;
        font-size: 10pt;
        border: none;
        font-weight: 600;
        letter-spacing: 0.2em;
        padding: 10px;
        background-color: rgb(242,242, 242);
        color: rgb(116, 119, 123);
        transition: all .5s ease-in-out;
        outline: none;
        :hover{
            color: rgb(255, 255,255);
            background-color: rgb(213, 213, 223);
            cursor: pointer;
        }
    }
    .tab.selected{
        color: rgb(255, 255, 255);
        background-color: rgb(102, 152, 255);
        
    }
    

    @media (max-width: 800px){

    .slideContainer{
        height: 850px;
    }

    .imageContainer{
        width: 100%;
    }
 

    .textContainer{
        width: 100%
        }

    }


`;




const Soluciones = () => {

    const [show, setShow] = useState(0)
    const [offset, setOffset] = useState(0)

    useEffect(()=>{
       function handleScroll(){
           setOffset(window.pageYOffset)
       }
       window.addEventListener('scroll', handleScroll)

       return () =>{
           window.removeEventListener('scroll', handleScroll)
       }
        
    },[])


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
        <div id="products" className='section' style={{backgroundColor:'#f2f2f2'}}>
            
            <SolutionsTabs>
                <ul className= 'tabs'>
                    <button className="tab" onClick={()=>setShow(0)} style={show === 0 ? {backgroundColor: "rgb(102, 152, 255)", color: "rgb(255, 255, 255)" }: null}>Recruitment  </button>
                    <button className="tab" onClick={()=>setShow(1)} style={show === 1 ? {backgroundColor: "rgb(102, 152, 255)", color: "rgb(255, 255, 255)" }: null}>onboarding  </button>
                    <button className="tab" onClick={()=>setShow(2)} style={show === 2 ? {backgroundColor: "rgb(102, 152, 255)", color: "rgb(255, 255, 255)" }: null}><Trans>línea de empleado</Trans></button>
                    <button className="tab" onClick={()=>setShow(3)} style={show === 3 ? {backgroundColor: "rgb(102, 152, 255)", color: "rgb(255, 255, 255)" }: null}>feedback</button>
                    <button className="tab" onClick={()=>setShow(4)} style={show === 4 ? {backgroundColor: "rgb(102, 152, 255)", color: "rgb(255, 255, 255)" }: null}>exit interview</button>     
                </ul>
                <div className="slideContainer" >
                    <div className={`product ${show === 0 ? 'selected' : null}`} >
                        <div className= 'textContainer'>
                            <p className= 'preHeading'>
                                <Trans>revoluciona tu reclutamiento</Trans>
                            </p>
                            <h1>
                                <Trans>Todo tu proceso de selección online gracias a nuestros chatbots y videoentrevistas</Trans>
                            </h1>
                            <p>
                                <Trans>Mejora la experiencia del candidato incorporando un asistente virtual que entreviste y evalúe a los candidatos con el mismo rigor.</Trans>
                            </p>
                            <p>
                                <Trans>Planifica tus vídeo entrevistas online o asíncronas gracias a nuestra plataforma y deja que nuestros chatbots den feedback a tus candidatos.</Trans>
                            </p>
                            <Button marginl={true}><Trans>solicita una demo</Trans></Button>
                            </div>
                        <div className='imageContainer' style={{transform: `translateX(${offset * 0.2}px)`}}>
                            <Img fluid={images[0].childImageSharp.fluid}/>
                        </div>
                    </div>
                    <div className={`product ${show === 1 ? 'selected' : null}`} style={{backgroundColor: '#fcd24f'}}>
                        <div className= 'textContainer'>
                            <p className= 'preHeading'>
                                onboarding
                            </p>
                            <h1>
                                <Trans>Digitaliza los procesos de incorporación con nuestros chatbots</Trans>
                            
                            </h1>
                            <p>
                                <Trans>Da la bienvenida cuidando la experiencia del empleado. El chatbot interactúa con tu nuevo colaborador incluso antes de su incorporación dando respuestas a todas sus inquietudes.</Trans>
                            
                            </p>
                            <p>
                                <Trans>Evalúa su adaptación al puesto gracias a nuestros asistentes virtuales.</Trans>
                            
                            </p>
                            <Button marginl= {true}><Trans>solicita una demo</Trans></Button>
                        </div>
                        <div className='imageContainer' style={{transform: `translateX(${offset * 0.2}px)`}}>
                            <Img fluid={images[1].childImageSharp.fluid}/>
                        </div>
                    </div>
                    <div className={`product ${show === 2 ? 'selected' : null}`} style={{backgroundColor: '#f3f6fc'}}>
                        <div className= 'textContainer'>
                            <p className= 'preHeading'>
                            <Trans>línea de empleado</Trans>
                            
                            </p>
                            <h1>
                            <Trans>Da respuestas a todas las preguntas de tus empleados</Trans>
                            
                            </h1>
                            <p>
                            <Trans>Libera a los departamentos de soporte sustituyendo los innumerables correos electrónicos con dudas de tus empleados gracias a nuestros chatbots.</Trans>
                            
                            </p>
                            <p>
                            <Trans> Gracias al procesamiento de lenguaje natural, el asistente virtual interpreta las preguntas de los empleados proporcionando la respuesta más idónea.</Trans>
                           
                            </p>
                            <Button marginl= {true}><Trans>solicita una demo</Trans></Button>
                        </div>
                        <div className='imageContainer' style={{transform: `translateX(${offset * 0.2}px)`}}>
                            <Img fluid={images[2].childImageSharp.fluid}/>
                        </div>
                    </div>
                    <div className={`product ${show === 3 ? 'selected' : null}`} style={{backgroundColor: "#f4eae1"}}>
                        <div className= 'textContainer'>
                            <p className= 'preHeading'>
                            FEEDBACK
                            </p>
                            <h1>
                            <Trans>Incorpora un canal interactivo para obtener la opinión de tus equipos</Trans>
                            
                            </h1>
                            <p>
                            <Trans>Sustituye el cuestionario tradicional por un canal participativo y diferente a través de un chatbot. El canal conversacional humaniza tus encuestas y aumenta el ratio de respuesta.</Trans>
                            
                            </p>
                            <p>
                            <Trans>Recoge la información de tus encuestas de clima de una forma ágil, ordenada y simple gracias a nuestra plataforma.</Trans>
                            
                            </p>
                            <Button marginl={true}><Trans>solicita una demo</Trans></Button>
                        </div>
                        <div className='imageContainer' style={{transform: `translateX(${offset * 0.2}px)`}}>
                            <Img fluid={images[3].childImageSharp.fluid}/>
                        </div>
                    </div>
                    <div className={`product ${show === 4 ? 'selected' : null}`} >
                        <div className= 'textContainer'>
                            <p className= 'preHeading'>
                            EXIT INTERVIEWS
                            </p>
                            <h1>
                            <Trans>Descubre los motivos de tu rotación de personal</Trans>
                            
                            </h1>
                            <p>
                            <Trans>Nuestras entrevistas de salida automatizadas a través de nuestros chatbots te permitirán conocer los motivos de las bajas voluntarias. Dedica tiempo a analizar y profundizar con la información que te proporcione el chatbot.</Trans>
                            
                            </p>
                            <p>
                            <Trans>Impacta en tus empleados incluso en el momento de abandonar tu compañía.</Trans>
                            
                            </p>
                            <Link to='/contact'><Button marginl= {"true"}><Trans>solicita una demo</Trans></Button></Link>
                        </div>
                        <div className='imageContainer'style={{transform: `translateX(${offset * 0.2}px)`}}>
                            <Img fluid={images[4].childImageSharp.fluid}/>
                        </div>
                    </div>
            </div>
            </SolutionsTabs>
            
            
        
        <div className="custom-shape-divider-bottom-works">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-white"></path>
            </svg>
        </div>
        
    </div>
    <div style={{height: '14px', display: 'block', backgroundColor: '#f2f2f2'}}></div>
        </>
    )
}



export default Soluciones


