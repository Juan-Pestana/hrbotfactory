import React, { Component } from "react";
import Slider from "react-slick";
import {Trans} from 'gatsby-plugin-react-i18next'
import { LinkButton} from '../components/ui/Button'
import Img from 'gatsby-image'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'

import styled from 'styled-components'

const SolutionsTabs = styled.div`
    
    width: 100%;

    .slick-slide{
        opacity: 1;
        
        
    }
    .slick-slide > div{
      outline: none;
      
   
    }
    .slick-dots{
        display: inline-block !important;
        width: 180px;
        margin: auto;
        right: 50%;
        bottom: -35px;
        transform: translateX(50%);
        z-index: 10;
    }

   
    .arrows{
        position: absolute;
        display:flex;
        width: 300px;
        justify-content: space-between;
        bottom: -47px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9;
        
        button{
            background-color: transparent;
            border: none;
            font-size: 30px;
           
            :nth-of-type(1):hover{
                svg{
                    transform: translateX(-30px);
                    color: var(--bgr-primary-1);
                    
                }
            }
            :nth-of-type(2):hover{
                svg{
                    transform: translateX(30px);
                    color: var(--bgr-primary-1);
                }
            }
            svg{
                transition: all .3s ease-in-out;
            }
        }
    }

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





export default class SolutionSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }

      render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 6000,
          pauseOnhover: true,

        };


        const images = [...this.props.images]

    return (
      <SolutionsTabs>
          <div className="slideContainer" >
   
                <Slider ref={c => (this.slider = c)} {...settings} >
                    <div >

                        <div className='product' style={{backgroundColor:'#f2f2f2'}}>
                            
                            <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <div className= 'textContainer'>
                                    <p className= 'preHeading'>
                                        <Trans>revoluciona tu reclutamiento</Trans>
                                    </p>
                                    <h1>
                                        <Trans>Todo tu proceso de selección online con nuestros chatbots </Trans>
                                    </h1>
                                    <p>
                                        <Trans>Mejora la experiencia del candidato incorporando un asistente virtual que entreviste y evalúe a los candidatos con el mismo rigor.</Trans>
                                    </p>
                                    <p>
                                        <Trans>Planifica tus vídeo entrevistas online o asíncronas gracias a nuestra plataforma y deja que nuestros chatbots den feedback a tus candidatos.</Trans>
                                    </p>
                                                            
                                        <LinkButton to='/recruitment' className='linkButton' > más información</LinkButton>                
                                    
                                    
                                    </div>
                                <div className='imageContainer' >
                                    <Img fluid={images[0].childImageSharp.fluid}/>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    <div>
                        <div className='product' style={{backgroundColor: '#fcd24f'}}>
                            <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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
                                        <LinkButton to='/onboarding' marginl={true}><Trans>saber mas</Trans></LinkButton> 
                                </div>
                                <div className='imageContainer' >
                                    <Img fluid={images[1].childImageSharp.fluid}/>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <div className='product' style={{backgroundColor: '#f3f6fc'}}>
                            <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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
                                    <Trans>Gracias al procesamiento de lenguaje natural, el asistente virtual interpreta las preguntas de los empleados proporcionando la respuesta más idónea.</Trans>
                                
                                    </p>
                                        <LinkButton to='/lineadeempleado' marginl={true}><Trans>saber mas</Trans></LinkButton> 
                                </div>
                                <div className='imageContainer'>
                                    <Img fluid={images[2].childImageSharp.fluid}/>
                                </div>

                            </div>
                            
                        </div>  
                    </div>
                    <div>
                        <div className='product' style={{backgroundColor: "#f4eae1"}}>
                            <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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
                                            <LinkButton to='/feedback' marginl={true}><Trans>saber mas</Trans></LinkButton> 
                                    </div>
                                    <div className='imageContainer' >
                                        <Img fluid={images[3].childImageSharp.fluid} />
                                    </div>

                            </div>
                            
                        </div>

                    </div>
                    
                    <div>
                        <div className='product' >
                            <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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
                                        <LinkButton to='/exitInterview' marginl={true}><Trans>saber mas</Trans></LinkButton> 
                                </div>
                                <div className='imageContainer'>
                                    <Img fluid={images[4].childImageSharp.fluid}/>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    
                
                    
                </Slider>
                <div className='arrows'>
                    <button classname='button' onClick={this.previous}>
                        <BsArrowLeft/>
                    </button>
                    <button onClick={this.next}>
                        <BsArrowRight/>
                    </button>
                </div>
            </div>
            
      </SolutionsTabs>
    );
  }
}