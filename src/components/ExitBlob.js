import React from 'react'
import {useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {Button} from './ui/Button'


const ExBlob = styled.div`
    display: flex;
    align-items: center;
    padding: 6rem 0rem;



    .imageContainer{
        flex: 0 1 100%;
        /* width: 120%; */
        
        min-width: 600px;
       
    }

    .textContainer{
        width: 100%;
        min-width: 397px;
        
    }


    @media (max-width: 810px){
        display: block;
        padding: 0 1rem;
        margin: 7rem 0rem;

       .imageContainer{
        min-width: 0;
       }
       .textContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        min-width: 0;
       }

    }
`;

const ExitBlob = () => {

    const data = useStaticQuery(graphql`
    query {
        exit: file(relativePath: { eq: "blobExit.png" }) {
              childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid
                      }
                  }
              }
          }`
)

const image = data.exit





    return (
    <>
        <div className='section' >
            <div className="container" >
                <ExBlob>
                    <div className='textContainer'>
                        <p className="preHeading" >Exit Interview</p>
                        <h1>Refuerza tu valor como empleador</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur nam odit perferendis beatae molestiae adipisci obcaecati at repellendus ratione?</p>
                        <Button>Solicita una demo</Button>
                    </div>
                    <div className='imageContainer'>
                        <Img fluid={image.childImageSharp.fluid}/>
                    </div>       
                </ExBlob> 
            </div>
                   
        </div>
       
        </>
    )
}

export default ExitBlob