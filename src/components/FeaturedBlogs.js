import React from 'react'
import styled from 'styled-components'
import {Divider, DividerBottom } from './ui/divider'

import {useStaticQuery} from 'gatsby'

import BlogCard from '../components/ui/BlogCard'



const FeatBlogs = styled.div`

    margin: 5rem auto;

    .intro{
        text-align: center;
    }

    .feat-blog-grid{
        padding: 5rem 3rem;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-gap: 20px;
    }

`;

const FeaturedBlogs = () => {

    const FitBlogs = useStaticQuery(graphql`
    query featBlogs {
        blogs: allStrapiBlogs {
        nodes {
            title
            slug
            id
            author
            published(formatString: "DD/MM/YYYY")
            category
            image {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        }
    }
`
)

 const allFitBlogs = [...FitBlogs.blogs.nodes];

    return (
    <>
        <section className='section' style={{backgroundColor:'#f2f2f2'}}>
            <div className='container'>
                <FeatBlogs>
                    <div className='intro'>
                        <p className= 'preHeading'>Casos de éxito</p>
                        <h1>Cosicas que han salido bien</h1>

                    </div>
                    <div className="feat-blog-grid">
                        {allFitBlogs.map(blog => <BlogCard key={blog.id} blog={blog}/>)}
                    </div>
                </FeatBlogs>
            </div>
            <Divider color='#ffff' />         
        </section>
        <DividerBottom color= '#f2f2f2'/>
    </>
    )
}

export default FeaturedBlogs
