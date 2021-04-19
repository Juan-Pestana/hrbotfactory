import React, {useState} from 'react'
import {FaAngleUp, FaAngleDown} from 'react-icons/fa'
import styled from 'styled-components'
import {Link} from 'gatsby'

const DrpDwn = styled.div`
    position: relative;
 

    .ddbutton{
    /* width: 240px; */
    position: relative;
    text-transform: uppercase;
    font-size: ${props => props.isSide? '12px' : '14px'};
    font-weight: 500;
    letter-spacing:${props => props.isSide? '0.4em' : null};
    background-color: var(--bgr-primary-1);
    color: #fff;
    padding: ${props => props.isSide? '1rem' : null};
    display: block;
    outline:none;
    cursor: pointer;
    transition: all 0.3s ease-in;
    width: auto;
    border: none;
    margin-bottom : ${props => props.ddIsOpen && props.isSide? '190px' : null};

    

        svg{
            
            margin-left: 7px;
        }

        :hover{
            color: ${props => props.isSide? '#4d4d4d' : '#fff'};
            background-color:  ${props => props.isSide? '#f2f2f2' : null }
        }
    }

    .drpDwn-items{
    
        position: absolute;
        margin-top: 13px;
        display: ${props => props.isSide ? 'block'  : null};
        left: ${props => props.isSide ? '-250px'  : '0'};
        top: ${props => props.isSide? '34px' : null};
        bottom: ${props => props.isSide? null : '1'};
        background-color: #6698FF;
        transition: ${props => props.isSide? 'all 0.3s 0.3s ease-in' : null};
        width: 230px;
       

       

        .list-link{
            display: block;
            width: 100%;
            padding: 1rem;
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.4em !important;
            color: #fff;
            transition: all 400ms ease-out;
            padding: 12px 8px;
            width:100%;
            transition: all ease-in .3s;
            color: #f2f2f2;

            :hover{
                background-color: #4d88ff;
               
            }
        }
        
    }


`;

function Dropdown({isSide}) {

    const [ddIsOpen, setDdIsOpen] = useState(false)

    const toggleDd = () =>{
        setDdIsOpen(!ddIsOpen)
      }



    return (
        <DrpDwn isSide={isSide} ddIsOpen={ddIsOpen}>
            <div className='ddbutton' onClick = {()=> toggleDd()} >
                Soluciones
                {ddIsOpen ? <FaAngleUp/> : <FaAngleDown/> }

            </div>
            <div className={`drpDwn-items ${ddIsOpen ? "dblock" : "dnone"}`} style={isSide && ddIsOpen ? {left: '40px'}: null} onMouseLeave = {()=>setDdIsOpen(false)}>
                <Link to='/recruitment' className="link"><div className='list-link'>smart recruitment</div> </Link>
                <Link to='/lineadeempleado'><div className='list-link'>Linea de empleado</div> </Link>
                <Link to='/onboarding'><div className='list-link'>Onboarding</div> </Link>
                <Link to='/exitInterview'><div className='list-link'>Exit Interview</div> </Link>
                <Link to='/feedback'><div className='list-link'>Feedback</div> </Link>

            </div>
            
        </DrpDwn>
    )
}

export default Dropdown
