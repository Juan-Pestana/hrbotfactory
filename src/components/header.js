import React, {useState} from "react"
import styled from 'styled-components'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'
import {useTranslation, useI18next, Link, Trans} from 'gatsby-plugin-react-i18next'
import Dropdown from './ui/Dropdown'
//import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


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





  @media (max-width: 1000px){
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
          color: #4d4d4d;

        }
      }

      

    }
    .langButtons{
        text-align: center;
        a{
          display: inline-block;
          padding: 1rem 1rem;
          span{
            font-size: 1em;
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

const Social =styled.div`
    width: 100%;
    display:flex;
    padding: 0px;
    justify-content: flex-end;
    margin: 0px;
    position: relative;
    height: 40px;
    background-color: #6698ff;
   

    ul{
      display: flex;
      color: #ffff;
      margin-right: 60px;
      width: 150px;
      justify-content: space-between
      
    }
    
    @media (max-width: 1000px){
    background-color: #fff;
    height: fit-content;
    ul{
      color: #6698ff 
    }
    

    

  }


`;

const Header = ({ siteTitle, logos }) => {

 
  const [isOpen, setIsOpen] =useState(false)
  const { t } = useTranslation()
  const {changeLanguage, language, languages} = useI18next()

  const handleChange = e =>{
  
    changeLanguage(e.target.value)
  }

  const toggleSideMenu = () =>{
    setIsOpen(!isOpen)
  }

  
  return(
    <>
    <Social >
      
      <ul >
        <li><a href="https://www.facebook.com/hrbotfactory" target='_blank'><FaFacebookF /></a></li>
        <li><a href="https://twitter.com/hrbotfactory" target='_blank'><FaTwitter/></a></li>
        <li><a href="https://www.instagram.com/hrbotfactory/" target='_blank'><FaInstagram/></a></li>
        <li><a href="https://www.linkedin.com/company/hr-bot-factory/" target='_blank'><FaLinkedinIn/></a></li>
      </ul>
    </Social>
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
          <li style={{backgroundColor:'#6698ff'}}>
            <Dropdown isSide={false}/>
            {/* <Link to="/#products" ><span>{t("soluciones")}</span></Link>  */}
          </li>
          <li><Link to="/#nosotros" ><span>{t("nosotros")}</span></Link> </li>
          <li><Link to='/contact'>{t("solicita una demo")}</Link>  </li>
          <li><a href="https://platform.hrbotfactory.com/" target='_blank'> <Trans>acceso a clientes</Trans> </a></li>
          <Link to='/blog'><li onClick={toggleSideMenu}>Blog</li></Link>
          
          <li style={{position: 'relative'}}>
            <div className="box">
              <select value={language} onChange={handleChange}>
                <option value= 'es'>🇪🇸  </option>
                <option value='en'>🇬🇧 </option>
              </select>
            </div> 
          </li>
        </ul>
        <div className='mobile-menu' onClick={toggleSideMenu}>
            <BiMenu/>
        </div>
        
      </Navig>

      
      
    </div>
    <SideMenu style={isOpen ? {transform: 'translatex(250px)'} : null}>
      <ul>
        <Dropdown isSide={true}/>
        <Link to="/#nosotros" title='nosotros'><li onClick={toggleSideMenu}><Trans>nosotros</Trans> </li></Link>
        <Link to='/contact'><li onClick={toggleSideMenu}><Trans>solicita una demo</Trans></li></Link>
        <Link to='/blog'><li onClick={toggleSideMenu}>Blog</li></Link>
        <a href="https://platform.hrbotfactory.com/" target='_blank' ></a><li onClick={toggleSideMenu}><Trans>acceso a clientes</Trans></li>
        {/* <li><Dropdown/></li> */}

      </ul>

      
      <div  className='langButtons'>
 
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage('es');
              }}>
                <span role='img' aria-label='spanish flag'>🇪🇸</span>
            </a>
          
          
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage('en');
              }}>
                <span role='img' aria-label='spanish flag'>🇬🇧 </span>
            </a>
       </div> 
      
                    
      
    </SideMenu>

    <DarkBg isOpen={isOpen} onClick={toggleSideMenu}></DarkBg>
    
    
  </header>
  

</>
  )
}

// export const query = graphql`
//   query($language: String!) {
//     locales: allLocale(filter: {language: {eq: $language}}) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `;


export default Header
