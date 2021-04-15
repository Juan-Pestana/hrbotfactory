import React, {useEffect} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Aos from 'aos'

import OnboardPhone from '../components/OnboardPhone'
import OnboardPlat from '../components/OnboardPlat'
import OnboardToghether from '../components/OnboardToghether'


const Onboarding = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1000,
            once: true,
        })
    },[])

    return (
        <Layout>
            <SEO/>
            <OnboardPhone/>
            <OnboardPlat/>
            <OnboardToghether/>

            
        </Layout>
    )
}

export default Onboarding
