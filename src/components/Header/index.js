import React from 'react'
import { useUser } from '../../hooks/UserContext'

import Person from '../../assets/Vector - user.png'
import Cart from '../../assets/Vector - cart.png'
import { useHistory } from 'react-router-dom'

import {
    Container, ContainerLeft, ContainerRight,
    ContainerText, PageLink, Line, PageLinkExit
} from './styles'

export function Header() {
    const { logout } = useUser
    const { push, location: { pathname }
    } = useHistory()

    const logoutUser = () => {
        logout()
        push('/login')
    }

    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}>Home</PageLink>
                <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('/produtos')}>Ver Produtos</PageLink>
            </ContainerLeft>

            <ContainerRight>

                <PageLink onClick={() => push('/carrinho')}><img src={Cart} alt='icone-carrinho' /></PageLink>

                <Line> </Line>

                <PageLink><img src={Person} alt='icone-user' /></PageLink>

                <ContainerText>
                    <p>
                        Olá, Rodolfo
                    </p>
                    <PageLinkExit onClick={logoutUser}>
                        Sair
                    </PageLinkExit>
                </ContainerText>

            </ContainerRight>
        </Container>
    )
}
