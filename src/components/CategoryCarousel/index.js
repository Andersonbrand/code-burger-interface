import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/CATEGORIAS.png'
import { Container, CategoryImg, ContainerItens, Image, Button } from './styles'
import api from '../../services/api'

export function CategoryCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <CategoryImg src={Category} alt='logo da categoria' />

            <Carousel itemsToShow={4} style={{ width: '90%' }}>
                {categories &&
                    categories.map(category => (
                        <ContainerItens key={category.id}>
                            <Image src={category.url} alt='foto da categoria' />
                            <Button to={{
                                pathname: '/produtos',
                                state: { categoryId: category.id }
                                }}
                            >
                                {category.name}
                            </Button>
                        </ContainerItens>
                    ))
                }
            </Carousel>
        </Container>
    )
}