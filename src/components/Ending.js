import React from 'react'
import styled from 'styled-components'
import {LinkButton} from '../components/ui/Button'
import RecrMetrics from '../components/RecrMetrics'


const Ending_wrapper = styled.div`
    padding: 5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
 


    .textContainter{
        max-width: 530px;
        text-align: center;
        color: #f2f2f2;
        margin: 1rem;

        
        p{
            color: #f2f2f2;
        }
    }

`;

const Ending = () => {


    return (
        <div className='section' style={{backgroundColor: '#6698ff'}}>
            <div className="container">
                
                <Ending_wrapper>
                    <div className="textContainter">
                        <p className='preHeading'>REVOLUCIONA TU RECLUTAMIENTO</p>
                        <h1>Todo tu proceso de selección online gracias a nuestros chatbots y videoentrevistas</h1>
                    </div>
                    
                    <LinkButton to='/contact' secondary={true}>Solicita una demo</LinkButton>

                </Ending_wrapper>
                


            </div>
            
        </div>
    )
}

export default Ending
