import React from 'react'
import {useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const FbComunica = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5rem;


    .imageContainer{
        flex: 0 1 110%;
        /* width: 120%; */
        padding: 1rem;
        min-width: 600px;
        margin-top: 7rem;
    }

    .textContainer{
        width: 100%;
        min-width: 397px;
        color: #f2f2f2;
        padding: 1rem;
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


    }
`;

const FeedbackComunica = () => {

    const data = useStaticQuery(graphql`
    query {
        feebackCom: file(relativePath: { eq: "banner-img3.png" }) {
              childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid
                      }
                  }
              }
          }`
)

const image = data.feebackCom




    return (
        <>
        <div className='section' style={{backgroundColor: '#6698ff'}}>
            <div className="container" >
                <FbComunica>
                
                    <div className='imageContainer'>
                        <Img fluid={image.childImageSharp.fluid}/>
                    </div>
                
                    <div className='textContainer'>
                        <p className="preHeading" style={{color: '#f2f2f2', textAlign:'left'}}>plataforma saas</p>
                        <h1>Todos tus candidatos en una misma plataforma</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ipsa fugit magnam in rem ipsum praesentium neque dolore dicta molestiae.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloribus? Totam, aliquam veniam!</p> 
                    </div>       
                </FbComunica> 
            </div>
                   
        </div>
       
        </>

        
    )
}

export default FeedbackComunica