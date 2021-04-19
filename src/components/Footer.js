import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import styled from 'styled-components'
import Img from 'gatsby-image'

const FooterStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    color: #f2f2f2;

    .imgWhite{
    padding: .8rem;
    display:block;
    min-width: 254px;
  }
  p{
      text-align: center;
  }
  ul{
      display: flex;
      width: 200px;
      justify-content: space-between
  }
  li{
        background-color: #f2f2f2;
      height: 30px;
      width: 30px;
      line-height: 50px;
      border-radius: 50%;
      position: relative;
       
      :hover{
          background-color: lightgray;
      }
  }

  a{
      text-decoration: none;
      position: absolute;
      top:-6px;
      left: 6px;
     
      display: block;
     
    
      color: #6698ff;
      
       
  }

  @media(max-width: 600px){
      flex-direction: column;
      align-items: center;
  }

`;

const Footer = ({logos}) => {

    const FootImage = logos.find(logo => logo.name === 'principal-blanco-2')
    return (
        <footer>
            <div className="section" style={{backgroundColor: '#6698ff'}}>
                <div className="container">
                    <FooterStyle style={{display: 'flex'}}>
                        <div className='imgWhite'>
                            <Img  fluid={FootImage.childImageSharp.fluid} alt="logo blanco hr bot factory"/>
                        </div>
                        <p>Todos los derechos reservados hr bot factory.</p>
                        <ul >
                            <li><a href="https://www.facebook.com/hrbotfactory" target='_blank'><FaFacebookF /></a></li>
                            <li><a href="https://twitter.com/hrbotfactory" target='_blank'><FaTwitter/></a></li>
                            <li><a href="https://www.instagram.com/hrbotfactory/" target='_blank'><FaInstagram/></a></li>
                            <li><a href="https://www.linkedin.com/company/hr-bot-factory/" target='_blank'><FaLinkedinIn/></a></li>
                        </ul>
                    </FooterStyle>
                    <div style={{paddingBottom: '1rem'}}>
                        <small style={{color:'#f2f2f2'}}>© hr bot factory 2020</small>
                    </div>

                </div>
            </div>
            {/* <div className='section' style={{backgroundColor:'#fff'}}>
                <ul style={{display: 'flex'}}>
                    <li style={{margin: '1rem'}}><span role='img' aria-label='spanish flag'>🇪🇸</span>Español</li>
                    <li style={{margin: '1rem'}}><span role='img' aria-label='spanish flag'>🇬🇧 </span>English</li>
                </ul>
                
                
            </div> */}
            
        </footer>
    )
}

export default Footer
