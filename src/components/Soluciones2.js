import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import {FaSortAmountDown, FaRegQuestionCircle, FaRegComments, FaRegHandshake, FaUserTimes} from 'react-icons/fa'

import {Button} from './ui/Button'

const Soluc2 = styled.div`
 display: flex;
 margin-top: 5rem;
 color: var(--text-secondary-2);
 margin-bottom: 5rem;
 justify-content: space-around;
 position: relative;

 overflow-x: hidden;
 padding: 20px;
 ::after{
            content: '';
            height: 250px;
            width: 250px;
            border-radius: 50%;
            background-color: #fad14f;
            position: absolute;
            left: 500px;
            bottom: 80px;
            z-index: 1;
            
        }


    .textContainer{
        width: 50%;
        z-index: 5;
        color: #4d4d4d;
        
        .line{
            border-bottom: 2px solid var(--bgr-primary-1);
            width: 120%;
            margin: 2rem 0rem 2rem 0rem;
            
            
        }
        .titleWraper{
            position: relative;
            height: 100px;
            
            h1{
            position: absolute;
            max-width:600px;
            width: 100%;
            opacity: 0;
            height: 100px;
            left: -160%;
            /* transition: opacity 2s ease-in-out; */
            transition: left 1s .2s ease-in-out;
            }
            h1.active{
                
                opacity: 1;
                left: 0%
            }
        }

        
        
        
       
        
    }
    
    .buttonsGrid{

        margin-top: 2rem;
        flex: 0 0 400px;
        width: 400px;
        height: 265px;
        border-radius: 30px;
        position: relative;
        display: grid;  
        grid-template-rows: 1fr 1fr ;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: 
            "first second ."
            "third forth fifth";
        grid-gap: 15px;
        
    
        button{
            
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            font-weight: 600;
            border-radius: 20%;
            background-color: #f2f2f2;
            color: #c4c4c4;
            text-align:center;
            box-shadow: 
                -8px -8px 8px #ffff,
                5px 5px 10px #4d4d4d;
             
            z-index: 9;
            border: none;
            outline: none;
            transition: all .2s ease-in;
            cursor: pointer;
            
            svg{
                
                font-size: 30px;
                
                
            }
            
            
           
        }
        .first{
            grid-area: first;
            transform: translateX(50%)

        }
        .second{
            grid-area:second;
            transform: translateX(50%)

        }
        .third{
            grid-area: third;
        }
        .forth{
            grid-area: forth;
        }
        .fifth{
            grid-area: fifth;
        }
        .active{
            
            color: var(--bgr-primary-1);      
            box-shadow: 
                -5px -5px 10px #ffff,
                3px 3px 10px #4d4d4d,
                inset -5px -5px 6px #ffff,
                inset 3px 3px 10px #4d4d4d;
           

        }
     
    }

    

    
    @media (max-width: 900px){
        display: block;
        padding: 1rem 1rem;
        margin-top: 3rem;

        .buttonsGrid{
            max-width: 400px;
            width: 90vw;
            height: 210px;
        }
      
        .textContainer{
            padding: 0;
            width: 100%;
            margin-bottom: 3rem;
            
            .line{
            margin: 5rem 0rem 2rem 0rem;
        }
             
        }
        
    }


`;

const Soluciones2 = () => {

    const [textShow, setTextShow] = useState('recruitment')



    
    



    return (
        <div className= 'section' style={{backgroundColor: '#f2f2f2', position: 'relative'}}>
            <div className= 'container'>
                <Soluc2>
                    <div className= 'textContainer'>
                        <p className = 'preHeading'>conoce nuestras soluciones</p>
                        <div className='titleWraper'>
                            <h1 className={textShow === 'recruitment'? 'active' : null}>Integra la IA en la criba de tus posiciones</h1>
                            <h1 className={textShow === 'lde'? 'active' : null}>Todas las respuestas a tus empleados en cada momento</h1>
                            <h1 className={textShow === 'onboarding'? 'active' : null}>Gestiona la integración del talento, da igual donde se encuentre</h1>
                            <h1 className={textShow === 'exit'? 'active' : null}>Conocer las causas, es el motor más sincero para mejorar</h1>
                            <h1 className={textShow === 'feedback'? 'active' : null}>lo mejor de lo mejor directo a tu mesa</h1>
                        </div>
                        
                            
                        <div className='line'></div>
                        
                        
                        <Button primary = {true} >Solicita una demo</Button>
                    </div>
                    <div className= 'buttonsGrid'>
                            <button className={`first ${textShow === 'recruitment' ? 'active': null}`} onClick={()=>setTextShow('recruitment')}>
                            <FaSortAmountDown />  <p >Recruitment</p> 
                            </button>
                            <button className={`second ${textShow === 'lde' ? 'active': null}`} onClick={()=>setTextShow('lde')}> 
                            <FaRegQuestionCircle/> <p>Consultas</p></button>
                            <button className={`third ${textShow === 'feedback' ? 'active': null}`} onClick={()=>setTextShow('feedback')}> 
                            <FaRegComments/> <p>Feedback</p> </button>
                            <button className={`forth ${textShow === 'onboarding' ? 'active': null}`} onClick={()=>setTextShow('onboarding')}>
                            <FaRegHandshake/> <p>Onboarding</p> </button>
                            <button className={`fifth ${textShow === 'exit' ? 'active': null}`} onClick={()=>setTextShow('exit')}>
                            <FaUserTimes/> <p>Exit interview</p> </button>
                          
                    </div>
                    
                </Soluc2>
                
            </div>
            <div className="custom-shape-divider-bottom-works">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-white"></path>
                </svg>
            </div>
            
        </div>
    )
}

export default Soluciones2
