import React from 'react'
import PropTypes from 'prop-types'
import {Button} from '../Button'

import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardsProducts({ product }) {
    return (
        <Container>
            <Image src={product.url} alt='imagem do produto' />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button>Adicionar</Button>
            </div>
        </Container>
    )
}

CardsProducts.propTypes = {
    product: PropTypes.object
}