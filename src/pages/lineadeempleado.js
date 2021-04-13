import React, {useEffect} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Aos from 'aos'

import LdePhone from '../components/LdePhone'
import Soluciones2 from '../components/Soluciones2'
import Sass from '../components/Sass'
import LdeTransacciones from '../components/LdeTransacciones'


const Lineadeempleado = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1000,
            once: true,
        })
    },[])

    return (
        <Layout>
            <SEO/>
            <LdePhone/>
            <Soluciones2/>
            <Sass/>
            <LdeTransacciones/>
            
        </Layout>
    )
}

export default Lineadeempleado
