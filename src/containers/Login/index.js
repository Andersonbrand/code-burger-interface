import React from 'react'

import loginImg from '../../assets/Login-image.svg'
import Logo from '../../assets/burger-Logo.svg'

import { Container, LoginImage, ContainerItens, Label, Input, Button, SingInLink } from './styles'

function Login() {
    return (
        <Container>
            <LoginImage src={loginImg} alt="login-image">
                <ContainerItens>
               
                    <img src={Logo} alt="burger-Logo" />
                    <h1>Login</h1>

                    <Label>Email</Label>
                    <Input />

                    <Label>Email</Label>
                    <Input />

                    <Button>SingIn</Button>

                    <SingInLink>Não possui conta? <a>SingUp</a></SingInLink>
                </ContainerItens>
            </LoginImage>
        </Container>
    )
}

export default Login