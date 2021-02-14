import React, {useState} from "react"
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";


import {BiMenu} from "react-icons/bi"


const Navig = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;


  div{
    flex: 0 0 300px;
  }
  .imgWhite{
    padding: .8rem;
    display:block;
    width: 254px;
  }
  .imgBlue{
    display: none;
  }
  .box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

    select {
      background-color: transparent;
      color: white;
      padding: 12px;
      width: 60px;
      border: none;
      font-size: 16px;

      outline: none;
    }

    :before {
      content: "";

      position: absolute;  

      -webkit-appearance: button;
      appearance: button;
      top: 0;
      right: 0;
      width: 20%;
      height: 100%;
      text-align: center;
      font-size: 28px;
      line-height: 45px;
      color: rgba(255, 255, 255, 0.5);
    
      pointer-events: none;
    }

    :hover::before {
      color: rgba(255, 255, 255, 0.6);
      background-color: rgba(255, 255, 255, 0.2);
    }

    .box select option {
      padding: 30px;
    }


  }

  

 

  .mobile-menu{
    display: block;
    position: absolute;
    font-size: 35px;
    width: 40px;
    top: 20%;
    left: 30px;
    transform: translate(-50%);
    color: #6698ff;
    cursor: pointer;

  }



  
  
  .desktop-nav{
    flex: 1 1 auto;
    color: #fff;
    display: flex;
    justify-content: space-around;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;

  }





  @media (max-width: 1200px){
    justify-content: center;

    .imgWhite{
      display: none;
    }

    .imgBlue{
      display: block;
    }
    .desktop-nav{
      display:none;
    }

  }
`;

const SideMenu = styled.div`
    z-index: 100;
    position: absolute;
    top: 57px;
    left:-250px;
    width: 250px;
    height: 100vh;
    background-color: #6698ff;
    transition: all 300ms ease-in;

     ul{
       padding-top: 40px;
       padding-left: 0;
       color: #ffff;
       font-size: 18px;
      display: flex;
      flex-direction: column;
      height: 300px;
      justify-content: space-between;

      li{
        display: block;
        width: 100%;
        padding: 1rem;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.4em !important;
        color: #fff;
        transition: all 400ms ease-out;
        :hover{
          background-color: #f2f2f2;
          color: #4d4d4d
        }
      }

  }

  .lang-select{
        display: flex;
        align-items: center;
        justify-content: center;

        div{
          margin: 1rem;
          span{
            font-size: 20px
          }
        }
         
      }
`;

const DarkBg = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 57px;
    left:0;
    background-color: rgba(0, 0, 0, 0.3);
    display: ${props=> props.isOpen ? 'block': 'none'};
`;

const Header = ({ siteTitle, logos }) => {

  const [lang, setLang] = useState('es')
  const [isOpen, setIsOpen] =useState(false)

  const handleChange = e =>{
    setLang(e.target.value)
  }

  const toggleSideMenu = () =>{
    setIsOpen(!isOpen)
  }

  return(
    <>
  <header className='section navBar' >
    <div className='container'>
      <Navig>
        <div>
          <Link to="/" className='imgWhite'>
            <Img  fluid={logos[1].childImageSharp.fluid} alt="logo blanco hr bot factory"/>
          </Link>
            
          
          <Link to="/"className="imgBlue">
            <Img fluid={logos[0].childImageSharp.fluid} alt="logo azul hr bot factory"/>
          </Link>
          
        </div>
        <ul className= "desktop-nav">
          <li><AnchorLink to="/#products" title='productos'><span>soluciones</span></AnchorLink> </li>
          <li><AnchorLink to="/#nosotros" title='nosotros'><span>nosotros</span></AnchorLink> </li>
          <li><Link to='/contact'>solicita una demo</Link>  </li>
          <li>acceso a clientes</li>
          <li style={{position: 'relative'}}><div className="box">
              <select value={lang} onChange={handleChange}>
                <option value= 'es'>🇪🇸  </option>
                <option value='en'>🇬🇧 </option>
              </select>
            </div></li>
        </ul>
        <div className='mobile-menu' onClick={toggleSideMenu}>
            <BiMenu/>
        </div>
        
      </Navig>

      
      
    </div>
    <SideMenu style={isOpen ? {transform: 'translatex(250px)'} : null}>
      <ul>
        <AnchorLink to="/#products" title='productos'><li onClick={toggleSideMenu}>soluciones </li></AnchorLink>
        <AnchorLink to="/#nosotros" title='nosotros'><li onClick={toggleSideMenu}>nosotros </li></AnchorLink>
        <Link to='/contact'><li onClick={toggleSideMenu}>solicita una demo</li></Link>
        <li onClick={toggleSideMenu}>acceso a clientes</li>

      </ul>
      <div className='lang-select'>
        <div><span role='img' aria-label='spanish flag'>🇪🇸</span></div>
        <div><span role='img' aria-label='spanish flag'>🇬🇧 </span></div>
          
      </div>
                    
      
    </SideMenu>

    <DarkBg isOpen={isOpen} onClick={toggleSideMenu}></DarkBg>
    
    
  </header>
  

</>
  )
}



Header.defaultProps = {
  siteTitle: ``,
}

export default Header
