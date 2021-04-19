import React from 'react'
import styled from 'styled-components'

import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const Data = styled.div`
    display:flex;
    margin-top: 5rem;
  
  >div{
      display: flex;
      align-items: center;

      .data-head{
        position: relative;
        span{
          font-size: 40px;
          
                
      }

    }
     
      
  }
    
    

    .each-data{
        display: block;
        
       
        width: 250px;
        margin: 0rem 1rem;
        

        .text-wrapper{
            
            color: #4d4d4d;
           h4{ 
               margin: 5px 0;

            }

        }
    }

    @media(max-width: 800px){
        flex-direction: column;
        padding: 1rem;
        align-items: center;
        margin: 3rem 0;

        .each-data{
            margin: 2rem 1rem;
        }
    }


`;

const RecrMetrics = () => {
    return (
        <section className="section" style={{backgroundColor:'#f2f2f2'}}>
            <div className="container" style={{margin:'5rem 0rem'}}>
                <div style={{maxWidth:'600px', margin:'auto', textAlign:'center'}}>
                    <p className="preHeading">
                        los resultados  
                    </p>
                    <h1>
                        Optimiza el tiempo y los recursos con la transformación digital 
                    </h1>
                </div>
            <Data>
                    <div>
                        <div className='data-head'>
                            <span role='img' aria-label='party icon'> 🎉</span> 
                        </div>
                        <div className= 'each-data'>
                            <CountUp  end={98}  suffix='%' delay={0}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span style={{fontSize:'38px', lineHeight: '1em', marginTop: 'auto', marginBottom: '18px', color: '#888888', fontWeight:'600'}} ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                            </CountUp>
                            <div className='text-wrapper' >
                                
                                <h4 >Valoración del candidato</h4>
                            </div>

                        </div>
                        
                        
                        
                    </div>
                    <div>
                        <div className='data-head'>
                            <span role='img' aria-label='rocket'> 🚀</span>
                        </div>
                        <div className= 'each-data'>
                        
                            <CountUp  end={81}  suffix='%' delay={.5}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span style={{fontSize:'38px', lineHeight: '1em', marginTop: 'auto', marginBottom: '18px', color: '#888888', fontWeight:'600'}} ref={countUpRef} />
                                </VisibilitySensor>
                                )}
                            </CountUp>
                            <div className='text-wrapper'>
                                
                                <h4>Optimización de tiempos </h4>
                            </div>
                        
                        </div>

                    </div>
                    
                    <div>
                        <div className='data-head'>
                            <span role='img' aria-label='calendar'> 📅</span>
                        </div>
                        <div className= 'each-data'>
                            
                            <CountUp  end={54}  suffix='%' delay={1}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span style={{fontSize:'38px', lineHeight: '1em', marginTop: 'auto', marginBottom: '18px', color: '#888888', fontWeight:'600'}} ref={countUpRef} />
                                </VisibilitySensor>
                                )}
                            </CountUp>
                            <div className='text-wrapper'>
                                
                                <h4 >Tiempos de cobertura</h4>
                            </div>
                            
                        </div>

                    </div>
                    <div>
                        <div className="data-head">
                            <span role='img' aria-label='stop-watch'> ⏱</span>
                        </div>
                        <div className= 'each-data'>
                        
                            <CountUp  end={35}  suffix='%' delay={1.5}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span style={{fontSize:'38px', lineHeight: '1em', marginTop: 'auto', marginBottom: '18px', color: '#888888', fontWeight:'600'}} ref={countUpRef} />
                                </VisibilitySensor>
                                )}
                            </CountUp>
                            <div className='text-wrapper'>
                                
                                <h4 >Mejora del proceso    </h4>
                            </div>
                        
                        </div>
                    </div>

                    
                    
                    
                </Data>

            </div>
            
            
        </section>
                
              
       
    )
}

export default RecrMetrics
