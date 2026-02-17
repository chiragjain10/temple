import React from 'react'
import HeroSection from './Hero'
import IntroSection from './Intro'
import FeaturesSection from './About'
import AttractionsSection from './Attraction'
import GallerySection from './Gallery'
import NewsPage from './News'
import NagarGaurav from './NagarGaurav'


function Home({ language }) {
    return (
        <div>
            <HeroSection language={language} />
            <IntroSection language={language} />
            <FeaturesSection language={language} />
            <AttractionsSection language={language} />
            <GallerySection language={language} />
            {/* <NewsPage language={language} /> */}
            <NagarGaurav language={language}/>
        </div>
    )
}

export default Home