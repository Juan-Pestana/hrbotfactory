import React, { useState } from 'react'
import styled from 'styled-components'

import {Button} from './ui/Button'


const ProductTabs = styled.div`
    margin: 6rem 0;
    .slideContainer{
        position: relative;
        height: 550px;
        overflow-y: hidden;
    }
    .product{
        position: absolute;
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
        width: 50%

       

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
        flex: 1 1 25%;
        min-width: 180px;
        text-transform: uppercase;
        font-size: 10pt;
        border: none;
        font-weight: 600;
        letter-spacing: 0.2em;
        padding: 10px;
        background-color: rgb(242,242, 242);
        color: rgb(116, 119, 123);
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
    .product:nth-child(1){
        background-image: url("https://secureservercdn.net/160.153.138.219/ymj.f7e.myftpupload.com/wp-content/uploads/2020/06/tab-fondo-nuevo-1.jpg?time=1611572545");
    }
    .product:nth-child(2){
        background-image: url("https://secureservercdn.net/160.153.138.219/ymj.f7e.myftpupload.com/wp-content/uploads/2020/06/tab-fondo-nuevo-actualizado-2.jpg?time=1611572545");
    }
    .product:nth-child(3){
        background-image: url("https://secureservercdn.net/160.153.138.219/ymj.f7e.myftpupload.com/wp-content/uploads/2020/06/tab-fondo-nuevo-actualizado-4.jpg?time=1611572545");
    }
    .product:nth-child(4){
        background-image: url("https://secureservercdn.net/160.153.138.219/ymj.f7e.myftpupload.com/wp-content/uploads/2020/06/tab-fondo-nuevo-3.jpg?time=1611572545")
    }

    @media (max-width: 800px){
        .product:nth-child(1){
        background-image: none;
        }
    .product:nth-child(2){
        background-image: none;    
        }
    .product:nth-child(3){
        background-image: none;    
        }
    .product:nth-child(4){
        background-image: none;    
        }

    .textContainer{
        width: 100%
        }

    }


`;


const Products = () => {

    const [show, setShow] = useState(1)
  


  

    



    return (
        <>
        <div id="products" className='section' style={{backgroundColor:'#f2f2f2'}}>
            <div className= 'container'>
                <ProductTabs>
                    <ul className= 'tabs'>
                        <button className="tab" onClick={()=>setShow(1)} style={show === 1 ? {backgroundColor: "rgb(102, 152, 255)", color: "rgb(255, 255, 255)" }: null}>onboarding  </button>
                        <button className="tab" onClick={()=>setShow(2)} style={show === 2 ? {backgroundColor: "rgb(102, 152, 255)", color: "rgb(255, 255, 255)" }: null}>linea de emplead</button>
                        <button className="tab" onClick={()=>setShow(3)} style={show === 3 ? {backgroundColor: "rgb(102, 152, 255)", color: "rgb(255, 255, 255)" }: null}>feedback</button>
                        <button className="tab" onClick={()=>setShow(4)} style={show === 4 ? {backgroundColor: "rgb(102, 152, 255)", color: "rgb(255, 255, 255)" }: null}>exit interview</button>     
                    </ul>
                    <div className="slideContainer" >
                    <div className={`product ${show === 1 ? 'selected' : null}`} >
                        <div className= 'textContainer'>
                            <p className= 'preHeading'>
                                onboarding
                            </p>
                            <h1>
                            Digitaliza los procesos de incorporación con nuestros chatbots
                            </h1>
                            <p>
                            Da la bienvenida cuidando la experiencia del empleado. El chatbot interactúa con tu nuevo colaborador incluso antes de su incorporación dando respuestas a todas sus inquietudes.
                            </p>
                            <p>
                            Evalúa su adaptación al puesto gracias a nuestros asistentes virtuales.
                            </p>
                            <Button marginl= {true}>Solicita una demo</Button>
                        </div>
                    </div>
                    <div className={`product ${show === 2 ? 'selected' : null}`} >
                        <div className= 'textContainer'>
                            <p className= 'preHeading'>
                            LÍNEA DE EMPLEADO
                            </p>
                            <h1>
                            Da respuestas a todas las preguntas de tus empleados
                            </h1>
                            <p>
                            Libera a los departamentos de soporte sustituyendo los innumerables correos electrónicos con dudas de tus empleados gracias a nuestros chatbots.
                            </p>
                            <p>
                            Gracias al procesamiento de lenguaje natural, el asistente virtual interpreta las preguntas de los empleados proporcionando la respuesta más idónea.
                            </p>
                            <Button marginl= {true}>Solicita una demo</Button>
                        </div>
                    </div>
                    <div className={`product ${show === 3 ? 'selected' : null}`}>
                        <div className= 'textContainer'>
                            <p className= 'preHeading'>
                            FEEDBACK
                            </p>
                            <h1>
                            Incorpora un canal interactivo para obtener la opinión de tus equipos
                            </h1>
                            <p>
                            Sustituye el cuestionario tradicional por un canal participativo y diferente a través de un chatbot. El canal conversacional humaniza tus encuestas y aumenta el ratio de respuesta.
                            </p>
                            <p>
                            Recoge la información de tus encuestas de clima de una forma ágil, ordenada y simple gracias a nuestra plataforma.
                            </p>
                            <Button marginl={true}>Solicita una demo</Button>
                        </div>
                    </div>
                    <div className={`product ${show === 4 ? 'selected' : null}`}>
                        <div className= 'textContainer'>
                            <p className= 'preHeading'>
                            EXIT INTERVIEWS
                            </p>
                            <h1>
                            Descubre los motivos de tu rotación de personal
                            </h1>
                            <p>
                            Nuestras entrevistas de salida automatizadas a través de nuestros chatbots te permitirán conocer los motivos de las bajas voluntarias. Dedica tiempo a analizar y profundizar con la información que te proporcione el chatbot.
                            </p>
                            <p>
                            Impacta en tus empleados incluso en el momento de abandonar tu compañía.
                            </p>
                            <Button marginl= {"true"}>Solicita una demo</Button>
                        </div>
                    </div>
                </div>
                </ProductTabs>
                
                
            </div>
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

export default Products
