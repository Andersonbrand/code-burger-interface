import React from 'react'

import { CategoryCarousel, OffersCarousel, Header } from '../../components'

import HomeLogo from '../../assets/burger -logo.svg'
import { Container, HomeImg } from './styles'

export function Home() {
    return (
        <Container>
            <Header/>
            <HomeImg src={HomeLogo} alt='logo da home' />
            <CategoryCarousel />
            <OffersCarousel />
        </Container>
    )
}