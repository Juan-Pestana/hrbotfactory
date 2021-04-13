import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import {useStaticQuery} from 'gatsby'
import {Label} from './ui/Label'





const IntroRecr = styled.div`
    display: flex;
    margin: 8rem 0rem 10rem 0rem;
    padding: 0 2rem; 
    justify-content: space-around;
    background:  url('../images/banner-bg2.jpg') left top no-repeat;

    .imageContainer{
        height: 80%;
        width: 45%;
        margin-top: auto;
        
    }
    .textContainer{
        width: 50%;
        margin-top: 1rem;
        padding: 1rem 0rem;
        color: var(--txt-primary);

        .labels{
            margin-bottom:1.5rem;
            
            div{
                margin: .8rem .8rem 0rem;
                padding: 1rem;
                overflow: hidden;
                position: relative;

                
            }
        }

        
    }
    @media (max-width: 800px){
        display: block;
        padding: 0 1rem;

        .imageContainer{
            
            width: 100%;
        }
        .textContainer{
            padding: 0;
            width: 100%;
            margin-bottom: 3rem;
        }
        .labels{
            
            div{
                width: 45%;
                font-size: .7rem;
                margin: 10px 10px 10px 0px !important;
                ;
            }
        }
    }
`;

const RecruitmentIntro = () => {


    const data = useStaticQuery(graphql`
    query {
        recrIntrImage: file(relativePath: { eq: "about-img1.png" }) {
              childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid
                      }
                  }
              }
          }`
)

    const image = data.recrIntrImage


    return (
        <section className= 'section ' >
            <div className="container" >
                <IntroRecr>
                    <div className= 'textContainer'>
                        <p className= 'preHeading'>
                           plataforma SASS a medida
                        </p>
                        
                        <h1 style={{fontSize:'2em'}}>Gestiona todo el proceso desde una única plataforma integrada</h1>
                        
                        <p>Nuestros chatbots incorporación toda la información del candidato en una plataforma para gestionar y visualizar su nivel de adaptación al puesto</p>
                        <div className='labels'>
                            <Label left={true}>trazabilidad </Label>
                            <Label left={true}>colaboración </Label>
                            <Label left={true}>comunicación </Label>
                            <Label left={true}>analítica </Label>
                        </div>
                        <p>Videos, documentos, comunicaciones, anotaciones, estado de la candidatura... Todo integrado en una plataforma a medida de tus procesos</p>
                    </div>
                    <div data-aos="fade-up" className='imageContainer'>
                        
                            <Img fluid={image.childImageSharp.fluid}/>
                        
                        
                    </div>
                </IntroRecr>
                
            </div>
            
            
        </section>
    )
}

export default RecruitmentIntro
