import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import api from '../../../services/api'
import ReactSelect from 'react-select'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import { Container, Label, Input, ButtonStyles, LabelUplod } from './styles'

function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])

    const { register, handleSubmit, control } = useForm()
    const onSubmit = data => console.log(data)

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')
            console.log(data)
            setCategories(data)
        }
        loadCategories()
    }, [])

    return (
        <Container>
            <form noValidate>
                <Label>Nome</Label>
                <Input type='text' {...register('name')} />

                <Label>Preço</Label>
                <Input type='number' {...register('price')} />

                <LabelUplod>
                    {fileName || (
                        <>
                            <CloudUploadIcon />
                            Carregue a imagem do produto
                        </>
                    )}

                    <input
                        type='file'
                        id='image-input'
                        accept='image/png, image/jpeg'
                        {...register('file')}
                        onChange={value => {
                            setFileName(value.target.files[0]?.name)
                        }}
                    />
                </LabelUplod>

                <Controller
                    name='category_id'
                    control={control}
                    render={({ field }) => {
                        return (
                            <ReactSelect
                                {...field}
                                options={categories}
                                getOptionLabel={cat => cat.name}
                                getOptionValue={cat => cat.id}
                                placeholder='Categorias'
                            />
                        )
                    }}
                ></Controller>

                <ButtonStyles>Adicionar Produto</ButtonStyles>
            </form>
        </Container>
    )
}

export default NewProduct