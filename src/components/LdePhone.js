import React from 'react'
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image'
import styled from 'styled-components'


import { Button} from './ui/Button'

const LePhone = styled.div`
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


const LdePhone = () => {

    const data = useStaticQuery(graphql`
    query LdePhone {
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
             
                <LePhone>
                    
                        <div className= 'textContainer'>
                            
                                <p className= 'preHeading' data-aos="fade-right" data-aos-offset="0" data-aos-delay="50">
                                revoluciona tu reclutamiento
                                    
                                </p>
                                <h1 data-aos="fade-right" data-aos-offset="0" data-aos-delay="500">Responde a las consultas de tus empleados e integra sus solicitudes</h1>
                                <p data-aos="fade-right" data-aos-offset="0" data-aos-delay="1000">Todo lo que tus empleados deséan conocer en un solo lugar, cercano y accesible 24/7</p>
                                <p data-aos="fade-right" data-aos-offset="0" data-aos-delay="1500">Reune las solicitudes, tramites y documentos en una plataforma de ticketing dedicada e intégrala con tu software de nómina. </p>
                            
                            <Button marginl={true} data-aos="zoom-in" data-aos-offset="0" data-aos-delay="1500">Solicita una demo</Button>
                        </div>

                    

                    
                        <div className='imageContainer' data-aos="fade-left" data-aos-offset="0">
                            
                                <Img fluid={image.childImageSharp.fluid}/>                           
                        </div>
                   
                    
                    
                </LePhone>
                
            </div>
            
        </div>
         

        
        </>
    )
}

export default LdePhone
