import React from 'react'

import styled from 'styled-components'

const DividerStyle= styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 80px;
    width: 100%;
    
    line-height: 0;

    svg{
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 100px;
    }

    .shape-fill{
        //define conditionally with styled props
        fill: ${props=> props.color};
    }

`;

const DividerBottomStyled = styled.div`
    height: 14px;
    display: block;

    //define conditionally with styled props
    background-color: ${props=> props.color};

`;

export const Divider = ({color}) => {
    return (
        <DividerStyle color={color}>
                
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                </svg>
        </DividerStyle>   
    )
}

export const DividerBottom = ({color}) => {

    return(
        <DividerBottomStyled color={color}></DividerBottomStyled>
    )
}



