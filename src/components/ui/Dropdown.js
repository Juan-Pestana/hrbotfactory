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
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
    background-color: inherit;
    color: #fff;
    text-align: center;
    display: inline-block;
    outline:none;
    cursor: pointer;
    border: none;

        svg{
            
            margin-left: 7px;
        }

        :hover{
            color: inherit;
        }
    }

    .drpDwn-items{
    
        position: absolute;
        margin-top: 13px;
        left: 0;
        bottom: 1;
        background-color: #6698FF;
        width: 230px;

       

        .list-link{
        
            padding: 12px 3px;
            width:100%;
            transition: all ease-in .3s;

            :hover{
                background-color: #4d88ff;
                color: #f2f2f2;
            }
        }
        
    }


`;

function Dropdown() {

    const [ddIsOpen, setDdIsOpen] = useState(false)



    return (
        <DrpDwn >
            <div className='ddbutton' onMouseEnter = {()=> setDdIsOpen(true)} >
                Soluciones
                {ddIsOpen ? <FaAngleUp/> : <FaAngleDown/> }

            </div>
            <div className={`drpDwn-items ${ddIsOpen ? "dblock" : "dnone"}`} onMouseLeave = {()=>setDdIsOpen(false)}>
                <Link to='/smartrecruitment' className="link"><div className='list-link'>smart recruitment</div> </Link>
                <Link to='/smartrecruitment'><div className='list-link'>Linea de Empleado</div> </Link>
                <Link to='/smartrecruitment'><div className='list-link'>Onboarding</div> </Link>
            </div>
            
        </DrpDwn>
    )
}

export default Dropdown
