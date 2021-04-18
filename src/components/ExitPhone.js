import React from 'react'
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image'
import styled from 'styled-components'


import { Button} from './ui/Button'

const ExitPh = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 2rem;
    padding-bottom: 5rem;

    .imageContainer{
        position: relative;
        width: 400px;
       
        margin-right: 2rem;
        padding: 2rem;
        
       
    }
   
    .textContainer{
        width: 100%;
        margin-top: 4rem;
        padding: 1rem 2rem;
        color: var(--txt-primary);

        
    }
    @media (max-width: 900px){
        flex-direction: column;
        align-items: center;
        padding-bottom: 5rem;

        .imageContainer{
            margin: auto;
            width: 60%;
            
        }
        .textContainer{
            margin-top: 2rem;
            padding: 0;
            width: 90%;
            margin-bottom: 3rem;
            
        }
    }


`;

const ExitPhone = () => {


    const data = useStaticQuery(graphql`
    query ExitPhone {
        image: file(relativePath: {eq: "emergiaPhone.png"}) {
        childImageSharp {
            fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`)

    const image = data.image


    return (
        <>
        <div className= 'section' >
            <div className="container" style={{marginTop: '3rem'}}>
             
                <ExitPh>
                    
                        <div className= 'textContainer'>
                            
                                <p className= 'preHeading' data-aos="fade-right" data-aos-offset="0" data-aos-delay="50">
                                revoluciona las entrevistas de salida
                                    
                                </p>
                                <h1 data-aos="fade-right" data-aos-offset="0" data-aos-delay="500">Refuerza la relación con tus empleados hasta en el momento de su salida.</h1>
                                <p data-aos="fade-right" data-aos-offset="0" data-aos-delay="1000">Sírvete del feedback, de las personas que dejan voluntariamente la organización para mejorar, y reforzar las palancas de retención del talento</p>
                                <p data-aos="fade-right" data-aos-offset="0" data-aos-delay="1500">Centraliza y normaliza la información de este feedback para que los datos, tengán un peso real en tu plan de acción</p>
                            
                            <Button marginl={true} data-aos="zoom-in" data-aos-offset="0" data-aos-delay="1500">Solicita una demo</Button>
                        </div>

                    

                    
                        <div className='imageContainer' data-aos="fade-left" data-aos-offset="0">
                            
                                <Img fluid={image.childImageSharp.fluid}/>                           
                        </div>
                   
                    
                    
                </ExitPh>
                
            </div>
            
        </div>
         

        
        </>
    )
}

export default ExitPhone
