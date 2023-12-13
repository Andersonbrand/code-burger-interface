import React from 'react'

import LoginImg from '../../assets/Login-image.svg'
import Logo from '../../assets/burger-Logo.svg'

import { Container, ContainerItens, Label, Input, Button, SingInLink, LoginImage} from './styles'

function Login() {
    return (
        <Container>
            <LoginImage src={LoginImg} alt="Login-Img">
                <ContainerItens>
                    <img src={Logo} alt="burger-Logo" />

                    <h1>Login</h1>

                    <Label>Email</Label>
                    <Input />

                    <Label>Password</Label>
                    <Input />

                    <Button>Sing In</Button>

                    <SingInLink>Não possui conta? <button>Sing Up</button></SingInLink>
                </ContainerItens>
            </LoginImage>
        </Container>
    )
}

export default Login