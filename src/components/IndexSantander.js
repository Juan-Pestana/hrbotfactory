import React from 'react'
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {Divider, DividerBottom} from './ui/divider'

const ChatPlat = styled.div`

    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 5rem 0rem;
    overflow-y: visible;

    .imageWrap{
        width: 50%;
        position: relative;
        overflow-y: visible;
        min-width: 300px;
        

        .phoneWrap{
            width: 35%;
            height: 100%;
            position:absolute;
            top: 40px;
            left: 20%;
            z-index: 7;
            
            
            .phone{
                filter:drop-shadow( 30px 15px 15px rgba(14, 14, 14, 0.5));
              
                border-radius: 30px;
            }
        }


    }
    .textWrap{
        width: 40%;
        font-size: 2em;
        color: #4d4d4d;
        min-width: 300px;
        h1{
            margin: 21.44px 0;
        }
    }

    @media(max-width: 800px){
        
        .imageWrap{
            width: 90%;
            padding-bottom:  3rem;
            margin: auto;
            .phoneWrap{
                width: 30%;
            }
        }
        .textWrap{
            width: 90%;
            padding: 0rem 1rem;
        }
    }

`;

const IndexSantander = () => {

    const data = useStaticQuery(graphql`
    query indexChatPlatImg {
        chatPlat: allFile(filter: {relativeDirectory: {eq: "indexSantander"}}, sort: {order: ASC, fields: name}) {
          nodes {
            id
            name
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    
    `)

    const platform = data.chatPlat.nodes[0]
    const phone = data.chatPlat.nodes[1]

    console.log(data.chatPlat.nodes)
    



    return (
        <>
        <section className='section'>
            <div className="container">
                <ChatPlat>
                    <div className="imageWrap">
                        <Img fluid={platform.childImageSharp.fluid} />
                        <div className="phoneWrap" data-aos="zoom-in">
                            <Img fluid={phone.childImageSharp.fluid} className='phone'/>
                        </div>


                    </div>
                    <article className="textWrap">
                        <p className='preHeading'>Hola esta es una prueba</p>
                        <h1>Este sería el título de la sección</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nisi exercitationem delectus architecto magnam consequatur ducimus deleniti, quibusdam quam modi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum est facilis!</p>
                    </article>


                </ChatPlat>
            
            </div> 
            <Divider color='#f2f2f2'/>           
        </section>
        <DividerBottom color='#ffff'/>

        </>
    )
}

export default IndexSantander
