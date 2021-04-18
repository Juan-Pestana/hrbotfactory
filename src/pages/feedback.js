import React, {useEffect} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Aos from 'aos'

import FeedbackPhone from '../components/FeedbackPhone'
import FeedbackComunica from '../components/FeedbackComunica'

const Feedback = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1000,
            once: true,
        })
    },[])

    return (
        <Layout>
            <SEO/>
            <FeedbackPhone/>
            <FeedbackComunica/>

            
        </Layout>
    )
}

export default Feedback
