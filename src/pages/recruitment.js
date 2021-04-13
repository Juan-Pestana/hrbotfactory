import React, { useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Aos from 'aos'

import RecruitmentIntro from '../components/RecruitmentIntro'
import RecruitPhone from '../components/RecruitPhone'
import RecruitNeeds from '../components/RecruitNeeds'
import RecrMetrics from '../components/RecrMetrics'
import Ending from '../components/Ending'

const Recruitment = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1000,
            once: true,
        })
    },[])
    return (
        <Layout>
            <SEO/>
            
            <RecruitPhone/>
            <div className='backgroundImg' >
            <RecruitNeeds/>
            <RecruitmentIntro/>

            </div>
            <RecrMetrics/>
            <Ending/>
            
                
        </Layout>
        
    )
}

export default Recruitment
