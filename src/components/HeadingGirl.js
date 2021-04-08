import React from 'react'
import styled from 'styled-components'
import {Button} from './ui/Button'
import { Link, Trans} from 'gatsby-plugin-react-i18next'

const HeadGirl = styled.div`
    display: flex;
    margin-top: 10rem;
    padding: 0 2rem;

    .imageContainer{
        height: 100%;
        width: 50%;
        
    }
    .textContainer{
        width: 50%;
        padding: 2rem;
        color: var(--txt-primary);

        
    }
    @media (max-width: 900px){
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
    }
`;




const HeadingGirl = () => {


    return (
        <div className= 'section' style={{backgroundColor: '#f2f2f2', position:'relative'}}>
            <div className="container">
                <HeadGirl>
                    <div className= 'textContainer'>
                        <p className= 'preHeading'>
                            <Trans>revoluciona tu reclutamiento</Trans>
                        </p>
                        <h1>
                            <Trans>Todo tu proceso de selección online gracias a nuestros chatbots y videoentrevistas</Trans>
                        </h1>
                        <p>
                            <Trans>Mejora la experiencia del candidato incorporando un asistente virtual que entreviste y evalúe a los candidatos con el mismo rigor.</Trans>
                        </p>
                        <p>
                            <Trans>Planifica tus vídeo entrevistas online o asíncronas gracias a nuestra plataforma y deja que nuestros chatbots den feedback a tus candidatos.</Trans>
                        </p>
                        <Button marginl={true}>Solicita una demo</Button>
                    </div>
                    <div className='imageContainer'>
                        <img src='https://res.cloudinary.com/pestana/image/upload/v1611941171/hrbotfactory/fondochica2_tcwhvs.jpg' alt="chica ilusionada"/>
                    </div>
                </HeadGirl>
                
            </div>
            <div className="custom-shape-divider-bottom-1611955911">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}

export default HeadingGirl
