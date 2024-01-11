import React from 'react'

import { CartItems, CartResume } from '../../components'
import CartLogo from '../../assets/logo-carrinho.svg'
import { Container, CartImg, Wrapper } from './styles'

export function Cart() {
    return (
        <Container>
            <CartImg src={CartLogo} alt='logo do carrinho' />
            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
        </Container>
    )
}