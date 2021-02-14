import React from 'react'
import styled from 'styled-components'
import {Label} from './ui/Label'

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
                        <p style={{fontSize:'66px', lineHeight: '1em', marginTop: '15px', marginBottom: '0px'}}>98%</p>
                        <p style={{textAlign:'center'}}>Valoración de la experiencia del candidato</p>
                    </div>
                    <div className= 'each-data'>
                        <Label left={true}>tiempos<span role='img' aria-label='rocket'> 🚀</span> </Label>
                        <p style={{fontSize:'66px', lineHeight: '1em', marginTop: '15px', marginBottom: '0px'}}>81%</p>
                        <p style={{textAlign:'center'}}>Optimización de tiempos de preselección</p>
                    </div>
                    <div className= 'each-data'>
                        <Label left={true}>cobertura<span role='img' aria-label='calendar'> 📅</span> </Label>
                        <p style={{fontSize:'66px', lineHeight: '1em', marginTop: '15px', marginBottom: '0px'}}>54%</p>
                        <p style={{textAlign:'center'}}>Recucción de tiempos de cobertura</p>
                    </div>
                    <div className= 'each-data'>
                        <Label left={true}>proceso<span role='img' aria-label='stop-watch'> ⏱</span></Label>
                        <p style={{fontSize:'66px', lineHeight: '1em', marginTop: '15px', marginBottom: '0px'}}>35%</p>
                        <p style={{textAlign:'center'}}>Mejora del proceso total de selección   </p>
                    </div>
                    
                </Data>
                <p style={{margin: 'auto', width:'400px', borderBottom: '1px solid #4d4d4d'}}></p>
            </div>
            
        </div>
    )
}

export default Metrics
