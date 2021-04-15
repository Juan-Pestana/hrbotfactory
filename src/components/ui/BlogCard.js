import React from 'react'
import styled from 'styled-components'
import {BsCalendar} from 'react-icons/bs'
import hrbotlogo from '../../images/hrbot-favicon.png'
import { Link } from "gatsby"
import Img from 'gatsby-image'

const Card = styled.div`
    .card{
        display:flex;
        flex-direction: column;
        background-color: #f2f2f2;
        height: 400px;
        border-radius: 10px;
        overflow:hidden;
        transition: all .3s ease-in-out;
        box-shadow: 5px 5px 5px rgba(0,0,0, 0.5);

        :hover{
            transform:translateY(-7px) scale(1.02);
            box-shadow: 10px 10px 8px rgba(0,0,0, 0.3);
           
        }
    }
    .card-img{
        height: 100%;
        overflow: hidden;
        background-color: #ffff;
        object-fit: cover;
        

        
    }
    .image{
        height: 100%
    }
    .card-info{
        padding:  .5rem;
        color: #4d4d4d;
        
        min-height: 135px;

        h3{
            margin: .5rem 0rem;
        }

    }
    .card-info-head{
        display: flex;
        justify-content: space-between;
        align-items: center;

        
    }
    .author{
        display:flex;
        align-items: center;
    }
    .author-img{
        height: 40px;
        width: 40px;
        border: 3px solid var(--bgr-primary-1);
        border-radius: 50%;
        padding: 3px;
        margin-right: 10px;

        img{
            height: 100%
        }

    }

    svg{
            color: var(--bgr-primary-1);
            top: 2px;
        }
`;


const BlogCard = ({blog}) => {

    const {image, slug, title, author, published} = blog

    return (
        <Link to={`/blog/${slug}`} >
            <Card>
                <div className="card">
                    <div className="card-img">
                        <Img fluid={image.childImageSharp.fluid} className= 'image'/>

                    </div>
                    <div className="card-info">
                        <article>
                            <div className='card-info-head'>
                                <div className='author'>
                                    <div className='author-img'><img src={hrbotlogo} alt="hrbot logo"/></div>
                                    <p>{author}</p>
                                </div>
                                
                                <p><BsCalendar/> {published} </p>
                            </div>
                            <h3>{title}</h3>
                        </article>
                    </div>
                </div>

        </Card>
        
        </Link>
        
        
    )
}

export default BlogCard
