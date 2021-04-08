import React from 'react'
import styled from 'styled-components'

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
        blogs: allStrapiBlogs(sort: {fields: published, order: DESC}) {
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
        <section className='section'>
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
        </section>
    )
}

export default FeaturedBlogs
