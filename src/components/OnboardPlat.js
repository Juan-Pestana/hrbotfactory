import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {useStaticQuery} from 'gatsby'
import {FaCheck} from 'react-icons/fa'


const ObPlat = styled.div`
    display: flex;
  
    margin-top: 6rem;
    margin-bottom: 6rem;
    justify-content: space-around;
    flex-wrap: wrap;


    .imageContainer{
        flex: 0 1 65%;

        min-width: 600px;
       
    }

    .textContainer{
        width: 35%;
        min-width: 397px;
        color: #f2f2f2;
        height: 550px;
        padding: 0rem 0rem 0rem 2rem;
    }
    .cardContainer{
        height: 100%;
        color: #f2f2f2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0;
    }
    .card{
        display: flex;
   
        width: 100%;
       
    }
    .card-icon{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
        height: 3.8rem;
        aspect-ratio: 1 / 1;
        background-color: #ffff ;
        border-radius: 50%;
        color: var(--bgr-primary-1);
        margin-right: 30px;
    }
    h3{
        margin: 10px 0;
        text-transform: uppercase;
    }

 

    @media (max-width: 810px){
        display: block;
        padding: 1rem;
        margin-bottom: 4rem;
        margin-top: 4rem;

       .imageContainer{
        min-width: 0;
       }
       .textContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0;
        min-width: 0;
        margin-top: 4rem;
        height: 650px;
       }
       .cardContainer{
        align-items: center;
        justify-content: space-around;

       }

    }
`;



const OnboardPlat = () => {

    const data = useStaticQuery(graphql`
    query {
        onboardPlat: file(relativePath: { eq: "OnboardPlat.png" }) {
              childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid
                      }
                  }
              }
          }`
)

const image = data.onboardPlat

    return (
        <section className='section' style={{backgroundColor: '#6698ff'}}>
        <div className="container" style={{padding:'4rem 0rem'}} >
            <div style={{textAlign:'center', color:'#f2f2f2', padding:'1rem', maxWidth:'600px', margin:'0 auto'}}>
                <p className="preHeading" style={{color:'#f2f2f2'}}>plataforma saas</p>
                <h1>Todos tus candidatos en una misma plataforma</h1>
            </div>
            <ObPlat>
            
                <div className='imageContainer'>
                    <Img fluid={image.childImageSharp.fluid}/>
                </div>
            
                <div className='textContainer'>
                    
                    <div className = 'cardContainer'>
                        <div className= 'card'>
                            <div className='card-icon'><FaCheck/></div>
                            <div className='card-text'>
                                <h3>Define el proceso</h3>
                                <p>Integra todas tus fuentes de reclutamiento y redes sociales en un mismo sitio</p>
                            </div>
                            
                        </div>
                        <div className= 'card'>
                            <div className='card-icon'><FaCheck/></div>
                            <div className='card-text'>
                                <h3>Marca los hitos clave</h3>
                                <p>Integra todas tus fuentes de reclutamiento y redes sociales en un mismo sitio</p>
                            </div>
                            
                        </div>
                        <div className= 'card'>
                            <div className='card-icon'><FaCheck/></div>
                            <div className='card-text'>
                                <h3>Identifica necesidades</h3>
                                <p>Integra todas tus fuentes de reclutamiento y redes sociales en un mismo sitio</p>
                            </div>
                            
                        </div>
                        <div className= 'card'>
                            <div className='card-icon'><FaCheck/></div>
                            <div className='card-text'>
                                <h3>obten feedback</h3>
                                <p>Integra todas tus fuentes de reclutamiento y redes sociales en un mismo sitio</p>
                            </div>
                            
                        </div>
                    </div>    
                </div>       
            </ObPlat> 
        </div>
               
    </section>
    )
}

export default OnboardPlat
