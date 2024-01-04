import React from 'react'

import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'

import HomeLogo from '../../assets/burger -logo.svg'
import { Container, HomeImg } from './styles'

function Home() {
    return (
        <Container>
            <HomeImg src={HomeLogo} alt='logo da home' />
            <CategoryCarousel />
            <OffersCarousel />
        </Container>
    )
}

export default Home