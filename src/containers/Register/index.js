import React from 'react'
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import Button from '../../components/Button'
import api from '../../services/api'
import LogoRegister from '../../assets/logo-register.svg'
import Logo from '../../assets/burger-Logo.svg'

import { Container, ContainerItens, Label, Input, SingInLink, RegisterImage, ErrorMessage } from './styles'

function Register() {

    const schema = Yup.object().shape({
        name: Yup.string().required("O seu nome é obrigatório"),
        email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
        password: Yup.string().required("A senha é obrigatória").min(6, "A senha deve ter no minímo 6 digitos"),
        confirmPassword: Yup.string().required("A confirmaçao de senha é obrigatória")
        .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async clientData => {
        const response = await api.post('users', {
            name: clientData.name,
            email: clientData.email,
            password: clientData.password
        })

        console.log(response)
    }

    return (
        <Container>
            <RegisterImage src={LogoRegister} alt="RegisterImage" />
            <ContainerItens>
                <img src={Logo} alt="burger-Logo" />
                <h1>Cadastre-se</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>

                    <Label error={errors.name?.message}>Nome</Label>
                    <Input type="text" {...register("name")} error={errors.name?.message} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label error={errors.email?.message}>Email</Label>
                    <Input type="email" {...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label error={errors.password?.message}>Password</Label>
                    <Input type="password" {...register("password")} error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
                    <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                    <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }} >Sing Up</Button>
                </form>
                <SingInLink>Já possui conta? <a href="https://google.com">Sing In</a></SingInLink>
            </ContainerItens>
        </Container>
    )
}

export default Register