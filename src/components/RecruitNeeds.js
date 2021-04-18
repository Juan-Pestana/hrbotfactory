import React from 'react'
import styled from 'styled-components'
import {RiTimerFlashLine, RiLineChartLine, RiChatSmile3Line} from 'react-icons/ri'

const RecruitNds = styled.div`

.grid{
        padding: 5rem 3rem;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-template-rows: 250px;
        grid-gap: 20px;
        color:#4d4d4d;
        
        div:first-child>div{
            margin-top: 60px;
            background-color: #ff5d22;
        }
        div:nth-child(2)>div{
            margin-top: 30px;
            background-color: #01b882;
        }
        
        div{
            display:flex;
            flex-direction: column;
            
            :hover{

                div{
                    background-color: var(--bgr-primary-1);
                    transform: scale(1.1)
                }
            }
            
        }
        div>p{
            width: 300px;
            max-width: 85vw;
            margin-top: 0;  
            line-height: 1.8;
            font-size: 17px;
        }
        
        div>div{
            background-color: #fccb00;
            height: 80px;
            width: 80px;
            border-radius: 10px;
            color:white;
            transition: all .4s ease-in-out;

            svg{
                font-size: 40px; 
                margin: auto;
            }
            

        }
    }

    @media(max-width:800px){
        .grid{
            padding: 3rem 1rem;

            div{
                display:flex;
                align-items: center;
                text-align: center;
            }

            div:first-child>div{
            margin-top: 0px;
           
             }
            div:nth-child(2)>div{
            margin-top: 0px;
           
            }
        }
    }
    
`;

const RecruitNeeds = () => {
    return (
        <section className="section">
            <div className="container">
                <RecruitNds>
                    <div className="grid">
                        <div>
                            <div><RiTimerFlashLine/></div>
                            <h3>Optimiza tiempos</h3>
                            <p>Entrevista y criba cada candidato en el mismo momento de su inscripción</p>
                        </div>
                        <div>
                            <div><RiLineChartLine/></div>
                            <h3>Normaliza el proceso</h3>
                            <p>Define los requisitos y crearemos un algoritmo individualizado para cada posición</p>
                        </div>
                        <div>
                            <div><RiChatSmile3Line/></div>
                            <h3>Cuida a tu candidato</h3>
                            <p>Enamorales con feedback automático en cada fase, y un informe MBTI</p>
                        </div>
                    </div>


                </RecruitNds>
                

            </div>
            
        </section>
    )
}

export default RecruitNeeds
