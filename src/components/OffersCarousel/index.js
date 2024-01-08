import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Offers from '../../assets/OFERTAS.png'
import { Container, CategoryImg, ContainerItens, Image, Button } from './styles'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'

export function OffersCarousel() {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffers = data.filter(product => product.offer).map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })

            setOffers(onlyOffers)
        }

        loadOffers()
    }, [])

    return (
        <Container>
            <CategoryImg src={Offers} alt='logo da oferta' />

            <Carousel itemsToShow={4} style={{ width: '90%' }}>
                {offers &&
                    offers.map(product => (
                        <ContainerItens key={product.id}>
                            <Image src={product.url} alt='foto do produto' />
                            <p>{product.name}</p>
                            <p>{product.formatedPrice}</p>
                            <Button>Peça agora</Button>
                        </ContainerItens>
                    ))
                }
            </Carousel>
        </Container>
    )
}