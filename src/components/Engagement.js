import React from 'react'
import styled from 'styled-components'
import {Button} from './ui/Button'

const Engage = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 9rem;
    padding: 0 2rem;


    .imageContainer{
        height: 100%;
        width: 50%;
        padding-right: 3rem;
        
        /* margin-top: 30rem; */
       
        
    }
    .image{
       max-width:400px; 
       margin-left: auto;
       margin-top: auto;

    }
    .textContainer{
        width: 50%;
        
        color: var(--txt-primary);
        margin-bottom: 3rem;

        
    }
    @media (max-width: 900px){
        display: block;
        padding: 0 1rem;

        .imageContainer{
            
            width: 100%;
        }
        .image{
            margin: auto;
            max-width: none;
        }
        .textContainer{
            padding: 0;
            width: 100%;
            margin-bottom: 3rem;
        }
    }
`;




const Engagement = () => {


    return (
        <>
        <div className= 'section' style={{backgroundColor: '#fff', position:'relative',marginTop:'50px'}}>
            <div className="container">
                <Engage>
                    <div className='imageContainer'>
                        <div style={{height: '75px'}}></div>
                        <div className="image">
                            <img src='https://res.cloudinary.com/pestana/image/upload/v1612128557/hrbotfactory/Captura_de_pantalla_de_2021-01-31_22-27-17_x9kdxh.png'/>

                        </div>
                    </div>
                    <div className= 'textContainer'>
                        <p className= 'preHeading'>
                            engagement
                        </p>
                        <h1>
                            Integra todas tus fuentes de reclutamiento gracias a nuestros chatbots
                        </h1>
                        <p>
                        ¡Olvídate de revisar y evaluar los candidatos de cada una de tus sites de empleo!
                        </p>
                        <p>
                        Nuestros chatbots se encargarán te todo para que tengas a los candidatos ya evaluados en nuestra plataforma
                        </p>
                        <Button style={{marginLeft: '100px'}}>Solicita una demo</Button>
                    </div>
                   
                </Engage>
                
            </div>
            <div className="custom-shape-divider-bottom-engage">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-gray"></path>
                </svg>
            </div>
        </div>
       
        </>
    )
}

export default Engagement