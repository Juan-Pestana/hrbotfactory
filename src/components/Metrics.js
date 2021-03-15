import React from 'react'
import styled from 'styled-components'
import {Label} from './ui/Label'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const Data = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 6rem 0;
    flex-wrap: wrap;

    .each-data{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 220px;
    }


`;

const Metrics = () => {
    return (
        <div className='section' style={{backgroundColor:"#f2f2f2"}}>
            <div className="container">
                <Data>
                    <div className= 'each-data'>
                        <Label left={true}>Satisfacción<span role='img' aria-label='party icon'> 🎉</span> </Label>
                        <CountUp  end={98}  suffix='%' delay={0}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span style={{fontSize:'66px', lineHeight: '1em', marginTop: '15px', marginBottom: '0px'}} ref={countUpRef} />
                            </VisibilitySensor>
        )}
                        </CountUp>
                        <p style={{textAlign:'center'}}>Valoración de la experiencia del candidato</p>
                    </div>
                    <div className= 'each-data'>
                        <Label left={true}>tiempos<span role='img' aria-label='rocket'> 🚀</span> </Label>
                        <CountUp  end={81}  suffix='%' delay={.5}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span style={{fontSize:'66px', lineHeight: '1em', marginTop: '15px', marginBottom: '0px'}} ref={countUpRef} />
                            </VisibilitySensor>
        )}
                        </CountUp>
                        <p style={{textAlign:'center'}}>Optimización de tiempos de preselección</p>
                    </div>
                    <div className= 'each-data'>
                        <Label left={true}>cobertura<span role='img' aria-label='calendar'> 📅</span> </Label>
                        <CountUp  end={54}  suffix='%' delay={1}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span style={{fontSize:'66px', lineHeight: '1em', marginTop: '15px', marginBottom: '0px'}} ref={countUpRef} />
                            </VisibilitySensor>
        )}
                        </CountUp>
                        <p style={{textAlign:'center'}}>Recucción de tiempos de cobertura</p>
                    </div>
                    <div className= 'each-data'>
                        <Label left={true}>proceso<span role='img' aria-label='stop-watch'> ⏱</span></Label>
                        <CountUp  end={35}  suffix='%' delay={1.5}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span style={{fontSize:'66px', lineHeight: '1em', marginTop: '15px', marginBottom: '0px'}} ref={countUpRef} />
                            </VisibilitySensor>
        )}
                        </CountUp>
                        <p style={{textAlign:'center'}}>Mejora del proceso total de selección   </p>
                    </div>
                    
                </Data>
                <p style={{margin: 'auto', width:'400px', borderBottom: '1px solid #4d4d4d'}}></p>
            </div>
            
        </div>
    )
}

export default Metrics
