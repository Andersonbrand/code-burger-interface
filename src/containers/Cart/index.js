import React from 'react'

import { CartItems } from '../../components'
import CartLogo from '../../assets/logo-carrinho.svg'
import { Container, CartImg } from './styles'

export function Cart() {
    return (
        <Container>
            <CartImg src={CartLogo} alt='logo do carrinho' />
            <CartItems />
        </Container>
    )
}