import React from 'react'
import styled from 'styled-components'
import {useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {Divider, DividerBottom} from './ui/divider'

const Mision_wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5rem 0rem;
 


    .textContainer{
        max-width: 530px;
        text-align: center;
        color: #474747;
        margin: 3rem;
        
        p{
            margin: 0;
            padding: 0;
            line-height: 1.65;
            letter-spacing: 0px;
            word-spacing: 0px;
        }
    }

    .card-container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .card{
        display: flex;
        background-color: white;
        padding: 2vw;
        margin: 15px;
        box-shadow: 5px 5px 10px #f2f2f2;
        border-radius: 30px;
        max-width: 452px;
        min-width: 300px;
        padding: 33px;
        justify-content: space-around;
        color: #474747;

        

        .card-header{
            display: flex;
            justify-content: space-between;

            h1{
                margin: 0 10px;
            }
        }
        .card-text{
           
            margin-top: 2%;
            background-color: #f2f2f2;
            padding: 4%;
            font-size: 12pt;
            font-weight: 400;
            border-radius: 0px 20px 20px 20px;
            line-height: 1.2em;
            margin-left: 10px;
        }

        a{
            text-decoration: none;
            color: #474747
        }

        .card-button{
            border: 1px solid #6698FF;
            border-radius: 30px;
            padding: .6rem;
            margin-top: 2%;
            text-align: center;
            font-weight: 700;
            cursor: pointer;
            font-size: 12pt;

            :hover{
                background-color:#f2f2f2
            }
        }
    }

`;

const ImageTeam= styled.div`
    width: 70%;
    position: relative;
    /* left: 48%; */
    bottom: -100px;
    z-index: 3;

    @media(max-width: 500px){
        bottom: -50px;
        width: 90%
    }
`;
    // width:'50%', position:'absolute', left:'48%', bottom: '-7%', zIndex: '3'
    


const Mision = () => {

    const data = useStaticQuery(graphql`
    query Jefes {
        jefes: allFile(filter: {relativeDirectory: {eq: "jefes"}}) {
            nodes {
                  id
                name
                childImageSharp {
                    fluid(maxWidth:78){
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
            linkedin: file(relativePath:{eq:"linkedin.png"}){
          childImageSharp {
            fixed(width: 20) {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
              
         team: file(relativePath:{eq:"At the office-pana 1.png"}){
             childImageSharp {
                 fluid {
                     ...GatsbyImageSharpFluid
                     
                 }
             }
         }   
      }
`)

const images = [...data.jefes.nodes]
const linkedin = data.linkedin
const team = data.team




    return (
        <>
        <div id="nosotros" className= 'section'>
            <div className= 'container' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Mision_wrapper>
                <div className= 'textContainer'>
                        <p className= 'preHeading'>
                            nuestra misión
                        </p>
                        <h1>
                            Acercamos la innovación tecnológica a la gestión de personas
                        </h1>
                        <p>                      
                            Hemos creado un equipo de expertos en tecnología y procesos a los que nos mueve la curiosidad, la creatividad y el continuo empeño en ayudar a la evolución de las organizaciones a través de la optimización de procesos gracias a la tecnología.
                        </p>
                            <br/>
                        <p>
                            Hacemos que los procesos sean más fáciles para así poner a las personas en el centro de la toma de decisiones.
                        </p>
                       
                </div>

                <div className= 'card-container'>
                        
                        <div className="card">
                            <div style={{width: '100%'}}>
                                <Img fluid={images[0].childImageSharp.fluid} style={{minWidth: '60px'}}/>
                            </div>
                            
                            <div className="card-content">
                                <div className="card-header">
                                    <h1>Antonio Corral</h1>                        
                                    <a href="#">
                                        <Img  fixed={linkedin.childImageSharp.fixed} style={{marginTop:'10px'}}/>  
                                    </a>                            
                                </div>
                                <p className="preHeading" style={{marginLeft: '10px'}}>ceo & cofounder</p>
                                <p className='card-text'>Master de RRHH, con más de 20 años de experiencia como Director de Recursos Humanos en multinacionales de gran consumo y retail como INDITEX, UNOde50.</p>
                                <a href="#">
                                    <div className='card-button'>
                                        ¿Hablamos?
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                        <div className="card">
                            <div style={{width: '100%'}}>
                                <Img fluid={images[1].childImageSharp.fluid} style={{minWidth: '60px'}}/>
                            </div>
                            <div className="card-content">
                                <div className="card-header">
                                    <h1>Jon Gonzalo</h1>
                                    <a href="#">
                                        <Img  fixed={linkedin.childImageSharp.fixed} style={{marginTop:'10px'}}/>  
                                    </a>                        
                                                           
                            </div>
                                <p className="preHeading" style={{marginLeft: '10px'}}>CCO & COFOUNDER</p>
                                <p className='card-text'>Experto en RRHH en las disciplinas de Desarrollo y Atracción de talento. Tiene un amplio bagage profesional en compañías como VIPS, TENDAM y JTI.</p>
                                <a href="#">
                                    <div className='card-button'>
                                        ¿Hablamos?
                                    </div>
                                </a>
                            </div>
                            
                        </div>

                    </div>

            </Mision_wrapper>
                <ImageTeam>
                    <Img fluid={team.childImageSharp.fluid} />
                    
                </ImageTeam>  

            </div> 
            <Divider color='#6698ff'/>         
        </div>
        <DividerBottom color='#fff'/>
       
        

        </>
        
        
    )
}

export default Mision
