import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import styled from 'styled-components'

import BlogCard from '../components/ui/BlogCard'


const BlogsPage = styled.div`

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

    @media (max-width: 800px){
        .feat-blog-grid{
            padding: 3rem 1rem;
        }
    }

`;

const Blog = ({data}) => {

    const allBlogs = [...data.blogs.nodes]

   

    return (
        <Layout>
            <SEO/>
            <section className='section'>
                <div className="container">
                    <BlogsPage>
                        <div className='intro'>
                            <p className= 'preHeading'>últimas noticias</p>
                            <h1>Lo que nos ocupa, lo que nos preocupa y lo aprendido en el camino</h1>

                        </div>
                        <div className="feat-blog-grid">
                            {allBlogs.map(blog => <BlogCard key={blog.id} blog={blog}/>)}
    
                        </div>
                    </BlogsPage>
                </div>
                
            </section>
        </Layout>
    )
}

export const query = graphql`
        query getAllBlogs {
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

;

export default Blog
