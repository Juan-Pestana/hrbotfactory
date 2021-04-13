import React from 'react'
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image'
import styled from 'styled-components'
import {FaCheck} from 'react-icons/fa'

const LdeTrans = styled.div`

    .grid{
        display: grid;
        /* grid-template-columns: repeat(2 1fr minmax(0, 1fr)) */
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        padding: 5rem 0rem;

        
        
        .col-1{
            margin-right: 1rem;
            padding: 0rem 1rem;

            .textWrapper{

                .labelGrid{
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    grid-template-rows: repeat(auto-fill);
                    grid-gap: 20px 20px;

                    >div{
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        box-shadow: 0 0 10px rgb(0 0 0 / 5%);

                        h4{
                            margin-left: 1rem;
                            font-weight: 600;
                            text-transform: uppercase;
                        }
                        div{
                            background-color: #f2f2f2;
                            border-radius: 4px;
                            height: 45px;
                            width: 45px;
                            margin-left: 8px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: #4d4d4d;
                            transition: all .3s ease-in;
                        }

                        :hover{
                            div{
                                background-color: #fad14f;
                                color: var(--bgr-primary-1)
                            }
                        }
                    }

                }

            }

        }
        .col-2{
            padding: 0 1rem;
            
            .imageWrapper{
                margin: 2rem 0rem;
            }
        }

    }


`;

const LdeTransacciones = () => {

    const data = useStaticQuery(graphql`
    query LdeTrans {
        image: file(relativePath: {eq: "transaccion.png"}) {
        childImageSharp {
            fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`)

const image = data.image

    return (
        <section className='section'>
            <div className="container">
                <LdeTrans>  
                    <div className="grid">
                        
                        <div className="col-1">
                            <div className="textWrapper">
                                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem obcaecati aliquid illo, mollitia incidunt aspernatur quos nulla illum voluptates similique!</p>
                                <div className="labelGrid">
                                    <div>
                                        <div><FaCheck/></div>
                                        <h4>Una Cosa</h4>
                                    </div>
                                    <div>
                                        <div><FaCheck/></div>
                                        <h4>Una Cosa</h4>
                                    </div>
                                    <div>
                                        <div><FaCheck/></div>
                                        <h4>Una Cosa</h4>
                                    </div>
                                    <div>
                                        <div><FaCheck/></div>
                                        <h4>Una Cosa</h4>
                                    </div>
                                    <div>
                                        <div><FaCheck/></div>
                                        <h4>Una Cosa</h4>
                                    </div>
                                    <div>
                                        <div><FaCheck/></div>
                                        <h4>Una Cosa</h4>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus qui placeat nemo?

                                </p>
                            </div>

                        </div>
                        <div className="col-2">
                            <div className="imageWrapper">
                                <Img fluid={image.childImageSharp.fluid}/>
                            </div>
                             
                        </div>
                        


                    </div>


                </LdeTrans>

                


            </div>
            
        </section>
    )
}

export default LdeTransacciones
