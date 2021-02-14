import React from 'react'
import ReactPlayer from 'react-player'

import {Button} from './ui/Button'
import styled from 'styled-components'

const HowWorks = styled.div`
 display: flex;
 margin-top: 5rem;
 color: var(--text-secondary-2);
 margin-bottom: 15rem;


    .textContainer{
        width: 50%;
        padding: 2rem;
        color: var(--bgr-secondary-2);
        
        div{
            border-bottom: 1px solid var(--bgr-secondary-2);
            width: 120%;
            margin-bottom: 2rem;
            

        }
    }
    .videContainer{
        margin-top: 2rem;
        width: 35vw;
       border-radius: 30px;
       overflow: hidden;
        height: calc(35vw / 1.8);
      
    
        
        }

    
    @media (max-width: 900px){
        display: block;
        padding: 0 1rem;

        .videContainer{
            width: 90vw;
       
            height: calc(90vw/ 1.8);

        }
        .textContainer{
            padding: 0;
            width: 100%;
            margin-bottom: 3rem;
             
        }
    }


`;



const HowItWorks = () => {
    return (
        <div className= 'section' style={{backgroundColor: '#6698ff', position: 'relative', overflowY: 'visible'}}>
            <div className= 'container'>
                <HowWorks>
                    <div className= 'textContainer'>
                        <p className = 'preHeading'>la forma de hacer selección está cambiando</p>
                        <h1>¿Quieres saber como funcionan nuestros chatbots?</h1>
                        <div></div>
                        <Button secondary = {true} style={{margingBottom:''}}>Solicita una demo</Button>
                    </div>
                    <div className= 'videContainer'>
                        
                            <ReactPlayer url='https://www.youtube.com/watch?v=Mcxk0BWdxx0'  width='100%' height='100%' className= 'video'/>
                        
                    </div>
                </HowWorks>
                
            </div>
            <div className="custom-shape-divider-bottom-works">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-white"></path>
                </svg>
            </div>
            
        </div>
    )
}

export default HowItWorks
