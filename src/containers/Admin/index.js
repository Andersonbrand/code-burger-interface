import React from 'react'

import { Container, ContainerItems } from './styles'
import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
import Orders from './Orders'

export function Admin() {

    return (
        <Container>
            <SideMenuAdmin />
            <ContainerItems>
                {/*<Orders />*/}
            </ContainerItems>
            <ListProducts />
        </Container>
    )
}