import React from 'react'
import styled from 'styled-components'
import {GrRotateRight} from 'react-icons/gr'

const ExitCrds = styled.div`


    .grid{
        padding: 5rem 3rem;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-template-rows: 300px;
        grid-gap: 20px;
        color:#4d4d4d;

        
    }

    .card-front-icon{
      
       
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        svg{
            font-size: 50px;
            color: #ffff
        }
    }

    .card-front-text{
        p{
            font-size: 20px;
            line-height: 1.2;
            margin-top: 2.5rem;
        }
        
    }

    @media(max-width:800px){
        .grid{
            padding: 5rem 0;
            .flip-card{
                margin: 0 auto;
            }
        }
    }

`;

const ExitCards = () => {
    return (
        <section className="section" style={{backgroundColor:'#f2f2f2'}}>
            <div className="container">
                <div style={{textAlign:'center', maxWidth:'600px', margin:'3rem auto'}}>
                    <p className="preHeading">
                        dale la vuelta
                    </p>
                    <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h1>
                </div>
                
                <ExitCrds>
                    <div className="grid">
                        <div className="flip-card" tabIndex="0">
                            <div className="flip-card-inner">
                                <div className="flip-card-front" style={{background:'linear-gradient(to left, #ff5d22, #f79d7b)'}}>
                                    <div className="flip-card-content">
                                        <div className="card-front-icon">
                                            <GrRotateRight/>
                                        </div>
                                        <div className='card-front-text'>
                                            <p>Front dolor sit amet consectetur adipisicing elit. Expedita.</p>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <div className="flip-card-back">
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                </div>

                            </div>
                            
                        </div>
                        <div className="flip-card" tabIndex="0">
                            <div className="flip-card-inner">
                                <div className="flip-card-front" style={{background:'linear-gradient(to left, #69bb82, #9bc1a7)'}}>
                                    <div className="flip-card-content">
                                        <div className="card-front-icon">
                                            <GrRotateRight/>
                                        </div>
                                        <div className='card-front-text'>
                                            <p>Front dolor sit amet consectetur adipisicing elit. Expedita.</p>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <div className="flip-card-back">
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                </div>

                            </div>
                            
                        </div>
                        <div className="flip-card" tabIndex="0">
                            <div className="flip-card-inner">
                                <div className="flip-card-front" style={{background:'linear-gradient(to left, #f9cb11, #fce68c)'}}>
                                    <div className="flip-card-content">
                                        <div className="card-front-icon">
                                            <GrRotateRight/>
                                        </div>
                                        <div className='card-front-text'>
                                            <p>Front dolor sit amet consectetur adipisicing elit. Expedita.</p>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <div className="flip-card-back">
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                </div>

                            </div>
                            
                        </div>
                    
                    </div>
                </ExitCrds>
            </div>
        </section>
    )
}

export default ExitCards
