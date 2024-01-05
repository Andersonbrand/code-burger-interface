import styled from 'styled-components'

export const Container = styled.div``

export const ProductsImg = styled.img`
    width: 100%;
`
export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin: 20px 0;
`

export const CategoryButton = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    color: ${props => (props.isActiveCategory ? '#9758a6' : '#9a9a9d')};
    font-size: 17px;
    line-height: 20px;
`