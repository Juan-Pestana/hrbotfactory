import React, {useEffect} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Aos from 'aos'

import ExitPhone from '../components/ExitPhone'
import ExitCards from '../components/ExitCards'
import ExitBlob from '../components/ExitBlob'

const ExitInterview = () => {

    useEffect(()=>{
        Aos.init({
            duration: 1000,
            once: true,
        })
    },[])

    return (
        <Layout>
            <SEO/>
            <ExitPhone/>
            <ExitCards/>
            <ExitBlob/>
            
           

        </Layout>
    )
}

export default ExitInterview
