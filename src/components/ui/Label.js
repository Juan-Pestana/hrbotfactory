import styled from 'styled-components'

export const Label = styled.div`

        position: relative;
        background-color: #6698FF;
        color: white;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        font-size: 10pt;
        padding: 11px 0px;
        display: inline-block;
        border-radius: ${props => props.left?  '30px 30px 30px 0px' :  '30px 30px 0px 30px' };
        width: 220px;
        text-align: center;


`;