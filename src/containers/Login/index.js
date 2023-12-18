import React from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'

import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { useUser } from '../../hooks/UserContext'
import Button from '../../components/Button'
import api from '../../services/api'
import LoginImg from '../../assets/Login-image.svg'
import Logo from '../../assets/burger-Logo.svg'

import { Container, ContainerItens, Label, Input, SingInLink, LoginImage, ErrorMessage } from './styles'

function Login() {
    const { putUserData } = useUser()

    const schema = Yup.object().shape({
        email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
        password: Yup.string().required("A senha é obrigatória").min(6, "A senha deve ter no minímo 6 digitos"),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Verificando seus dados.',
                success: 'Login realizado com sucesso!',
                error: 'Algo de errado aconteceu, verifique suas informações!'
            }
        )
        putUserData(data)
    }


    return (
        <Container>
            <LoginImage src={LoginImg} alt="Login-Img" />
            <ContainerItens>
                <img src={Logo} alt="burger-Logo" />
                <h1>Login</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>

                    <Label>Email</Label>
                    <Input type="email" {...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Password</Label>
                    <Input type="password" {...register("password")} error={errors.email?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type="submit" style={{ marginTop: 60, marginBottom: 30 }} >Sing In</Button>
                </form>
                <SingInLink>Não possui conta? <a href="https://google.com">Sing Up</a></SingInLink>
            </ContainerItens>
        </Container>
    )
}

export default Login