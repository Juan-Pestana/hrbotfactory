import styled from 'styled-components'

export const Button = styled.button`
    width: 240px;
    position: relative;
    font-size: 14px;
    margin-top: 2rem;
    background-color: ${props => props.secondary? '#f2f2f2'  : '#6698FF ' };
    color:  ${props => props.secondary?  '#6698FF' :  '#f2f2f2' };
    font-weight: 600;
    text-align: center;
    padding-top: 12px;
    padding-bottom: 12px;
    display: inline-block;
    border-radius: 30px;
    box-shadow: 2px 2px 5px #808080;
    outline:none;
    cursor: pointer;
    margin-left: ${props=> props.marginl ? '130px' : '0'};
    border: none;
    transition: all 0.3s ease-in;

    :hover{
        background-color: ${props => props.secondary? '#ffff' : '#175fff;'};
        transform: scale(1.05);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        
    }

    @media(max-width: 800px){
        margin-left: 0;
    }
`;