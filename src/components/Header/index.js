import React from 'react'

import Person from '../../assets/Vector - user.png'
import Cart from '../../assets/Vector - cart.png'

import {
    Container, ContainerLeft, ContainerRight,
    ContainerText, PageLink, Line, PageLinkExit
} from './styles'

export function Header() {
    return (
        <Container>

            <ContainerLeft>
                <PageLink>
                    Home
                </PageLink>

                <PageLink>
                    Ver Produtos
                </PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink>
                    <img src={Cart} alt='icone-carrinho' />
                </PageLink>
                <Line> </Line>
                <PageLink>
                    <img src={Person} alt='icone-user' />
                </PageLink>

                <ContainerText>
                    <p>
                        Olá, Rodolfo
                    </p>
                    <PageLinkExit>
                        Sair
                    </PageLinkExit>
                </ContainerText>
            </ContainerRight>
        </Container>
    )
}
