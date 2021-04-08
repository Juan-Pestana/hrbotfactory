import React, {useEffect} from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import hrbotlogo from '../images/hrbot-favicon.png'


 import { graphql, Link } from "gatsby"
 import commentBox from 'commentbox.io';

import ReactMarkdown from "react-markdown"

import Img from 'gatsby-image'

const Blog = styled.article`
    width: 90%;
    max-width: 700px;
    margin: auto;
    padding: 2rem;
    font-family: 'PT Serif';
    color: rgba(41, 41, 41, 1);
    
    
    h1{
        font-size: 48px;
        font-weight: 400;
        line-height: 60px;
        margin: 1rem 0 0 0;

    }
    p{
        font-size: 20px;
        line-height: 32px;
    }

    .post-info{
        display:flex;
        align-items: center;
        justify-content: space-between
    }
    .published{
        display: flex;
        align-items: center;
        margin: 1rem 0rem;

        h4{
            margin: 5px 10px 0px 10px;
            font-family: 'Work Sans'
        }
        p{
            font-size: 15px;
            margin: 0px 10px;
           
            color: rgba(117, 117, 117, 1);
        }
        .auth-image{
            width: 50px;
            img{
                width: 100%;
            }
        }

    }
    

    .social{
        width: 20%;
        margin-top: auto;
        ul{
        
        padding: 0px;
        width: 100%;
        display: flex; 
        justify-content: space-around;
        }
    }
    
    

    .content{
        blockquote{
            border-left: 3px solid var(--bgr-primary-1);
            padding: .8rem;
            
            font-size: 23px;
            color: rgba(117, 117, 117, 1);
                
        }
        pre {
            background: #222;
            color: yellow;
            overflow-x: scroll;
            padding: 1rem 1.5rem;
            border-radius: 10px;
        }

        ul {
            margin-top: 2rem;
            display: inline-block;
        }

        ul li {
            
            color: hsl(210, 22%, 49%);
            padding: 0.2rem 1rem;
            margin: 1rem 0;
            text-transform: uppercase;
            list-style: circle;
        }

        img{
            max-height: 425px;
            width: 100%;
        }



        
    }

    @media (max-width: 800px){
        
            padding: 3rem .7rem;

            h1{
                font-size: 30px;
                line-height: 33px;
            }
            p{
                font-size: 18px;
                line-height: 28px;
            }
            .post-info{
                display: block;
            }

            .published{
                .auth-image{
                    width: 40px;
                }
            }

            .social{
                width: 50%;
                margin: auto;
            }
        
    }



`;

const BlogTemplate = ({data}) => {

    const {content, category, published, description, slug, image, title, author} = data.blog

    useEffect(() =>{
        commentBox('5741835418861568-proj')
      },[])

    return (
        <Layout>
            <SEO/>
            <section className= 'section'>
                <div className= 'container'>
                    <Blog >
                        <div className="title">
                            <h1>{title}</h1>
                        </div>
                        <div className="post-info">
                            <div className="published">
                                <div className="auth-image" >
                                    <img src={hrbotlogo} alt="" />
                                </div>
                                <div className="published-data">
                                    <h4>{author}</h4>
                                    <p>Publicado: {published}</p>
                                </div>
                            </div>
                            <div className="social">
                                <ul >
                                    <li><a href="https://www.facebook.com/hrbotfactory" target='_blank' rel='noreferrer'><FaFacebookF /></a></li>
                                    <li><a href="https://twitter.com/hrbotfactory" target='_blank' rel='noreferrer'><FaTwitter/></a></li>
                                    <li><a href="https://www.instagram.com/hrbotfactory/" target='_blank' rel='noreferrer'><FaInstagram/></a></li>
                                    <li><a href="https://www.linkedin.com/company/hr-bot-factory/" target='_blank' rel='noreferrer'><FaLinkedinIn/></a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="image-intro">
                            <Img fluid={image.childImageSharp.fluid} />
                        </div>
                        <div className="content">
                            <ReactMarkdown>
                                {content}
                                
                            </ReactMarkdown>
                            
                        </div>
                        <div className="comments">
                            <div className="commentbox"/>
                        </div>

                    </Blog>
                </div>

            </section>
        </Layout>
    )
}


export const query = graphql`
query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: {eq: $slug}) {
      content
      category
      published(fromNow: true)
      title
      description
      author
      slug
      image {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`



export default BlogTemplate
