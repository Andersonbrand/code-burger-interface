import React from 'react'

import CategoryCarousel from '../../components/CategoryCarousel'

import HomeLogo from '../../assets/burger -logo.svg'
import { Container, HomeImg } from './styles'

function Home() {
    return (
        <Container>
            <HomeImg src={HomeLogo} alt='logo da home' />
            <CategoryCarousel />
        </Container>
    )
}

export default Home