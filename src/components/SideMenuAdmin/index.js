import React from 'react'

import  ListLinks  from './menu-list'

import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin() {

    return (
        <Container>
            <hr></hr>
            {ListLinks.map(item => (
                <ItemContainer key={item.id}>
                    <item.icon className="icon" />
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>
            ))}
            <hr></hr>
        </Container>
    )
}