import styled from 'styled-components'

import Background from '../../assets/Background.svg'

export const Container = styled.div`
        height: 100vh;
        width: 100vw;
        background: url('${Background}');
        display: flex;
        justify-content: center;
        align-items: center;
`

export const RegisterImage = styled.img`
        height: 95%;
`

export const ContainerItens = styled.div`
        background: #373737;
        border-radius: 0px 10px 10px 0px;
        height: 95%;
        padding: 25px 75px;
        display: flex;
        flex-direction: column;
        justify-content: center;

    form{
        display: flex;
        flex-direction: column;
    }

    h1{
        font-size: 24px;
        font-weight: 500;
        line-height: 28px;
        color: #FFFFFF;
        text-align: center;
        margin-top: 5px;
    }
`

export const Label = styled.p`
        font-style: normal;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        color: #ffffff;
        margin-top: ${props => (props.error ? '12px' : '28px')};
        margin-bottom: 5px;
`

export const Input = styled.input`
        width: 391.42px;
        height: 38.32px;
        border-radius: 5px;
        background: #FFFFFF;
        box-shadow: 3px 3px 10px 0px #4A90E230;
        border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
        padding-left: 10px;
`

export const SingInLink = styled.a`
        background: transparent;
        color: #ffffff;
        border: none;
        font-style: normal;
        font-size: 14px;
        font-weight: 300px;
        line-height: 16px;

    a{
        background: transparent;
        color: #ffffff;
        border: none;
        cursor: pointer;
        text-decoration: underline;

        &:hover{
            opacity: 0.8;
        }
    
        &:active{
            opacity: 0.8;
        }
    }
`