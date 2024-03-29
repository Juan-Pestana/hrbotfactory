import React from 'react'
import {useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const SaaS = styled.div`
    display: flex;
    align-items: center;
    margin-top: 7rem;
    margin-bottom: 7rem;


    .imageContainer{
        flex: 0 1 110%;
        /* width: 120%; */
        
        min-width: 600px;
        margin-top: 7rem;
    }

    .textContainer{
        width: 100%;
        min-width: 397px;
        color: #f2f2f2;
    }
    .cardContainer{
        color: #f2f2f2;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0;
    }
    .card{
        width: 250px;
        padding: 1rem 0;
    }
    .title{
        text-align: center;
        text-transform: uppercase;
        font-size: 10pt;
        font-weight: 600;
        letter-spacing: 0.2em;
        padding: 10px 20px;
        background-color: #E5E5E5;
        border-radius: 30px;
        color: #474747;
    }

    p{
        text-align: center;
        line-height: 1.65;
        
    }

    @media (max-width: 810px){
        display: block;
        padding: 0 1rem;
        margin-bottom: 7rem;

       .imageContainer{
        min-width: 0;
       }
       .textContainer{
        display: flex;
        flex-direction: column;
        align-items: center;

        min-width: 0;
       }
       .cardContainer{
        align-items: center;
        justify-content: center;
       }

    }
`;

const Sass = () => {

    const data = useStaticQuery(graphql`
    query {
        Saas: file(relativePath: { eq: "Plataforma-SaaS.jpg" }) {
              childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid
                      }
                  }
              }
          }`
)

const image = data.Saas




    return (
        <>
        <div className='section' style={{backgroundColor: '#6698ff'}}>
            <div className="container" >
                <SaaS>
                
                    <div className='imageContainer'>
                        <Img fluid={image.childImageSharp.fluid}/>
                    </div>
                
                    <div className='textContainer'>
                        <p className="preHeading" style={{color: '#f2f2f2', textAlign:'left'}}>plataforma saas</p>
                        <h1>Todos tus candidatos en una misma plataforma</h1>
                        <div className = 'cardContainer'>
                            <div className= 'card'>
                                <div className='title'>job sites & rrss</div>
                                <p>Integra todas tus fuentes de reclutamiento y redes sociales en un mismo sitio</p>
                            </div>
                            <div className= 'card'>
                                <div className='title'>job sites & rrss</div>
                                <p>Integra todas tus fuentes de reclutamiento y redes sociales en un mismo sitio</p>
                            </div>
                            <div className= 'card'>
                                <div className='title'>job sites & rrss</div>
                                <p>Integra todas tus fuentes de reclutamiento y redes sociales en un mismo sitio</p>
                            </div>
                            <div className= 'card'>
                                <div className='title'>job sites & rrss</div>
                                <p>Integra todas tus fuentes de reclutamiento y redes sociales en un mismo sitio</p>
                            </div>
                        </div>    
                    </div>       
                </SaaS> 
            </div>
                   
        </div>
       
        </>

        
    )
}

export default Sass
