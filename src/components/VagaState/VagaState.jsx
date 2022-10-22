import React, { useState } from 'react';
import NewVaga from '../../pages/CriarVaga/NewVaga';
import VerVaga from '../../pages/VerVaga/VerVaga';

const initialValue = {
    tituloVaga: '',
    tipoVaga: '',
    faixaSalarialVaga: '',
    descricaoVaga: '',
    periodoVaga: ''
}

export default function VagaState() {

    const [vaga, setVaga] = useState([
    ])

    const [nVaga, setNVaga] = useState(initialValue)

    const addVaga = e =>{
        e.preventDefault()

        setNVaga(initialValue)
        setVaga([...vaga, nVaga])
        showVaga()
    }

    const captura = e=>{
        e.preventDefault()
        const {value, name} = e.target

        if(name === 'tituloVaga'){
            setNVaga({
                'tituloVaga': value,
                'tipoVaga': nVaga.tipoVaga,
                'faixaSalarialVaga': nVaga.faixaSalarialVaga,
                'descricaoVaga': nVaga.descricaoVaga,
                'periodoVaga': nVaga.periodoVaga
            })
        }else if(name === 'tipoVaga'){
            setNVaga({
                'tituloVaga': nVaga.tituloVaga,
                'tipoVaga': value,
                'faixaSalarialVaga': nVaga.faixaSalarialVaga,
                'descricaoVaga': nVaga.descricaoVaga,
                'periodoVaga': nVaga.periodoVaga
            })
        }else if(name === 'faixaSalarialVaga'){
            setNVaga({
                'tituloVaga': nVaga.tituloVaga,
                'tipoVaga': nVaga.tipoVaga,
                'faixaSalarialVaga': value,
                'descricaoVaga': nVaga.descricaoVaga,
                'periodoVaga': nVaga.periodoVaga
            })
        }
        else if(name=== 'descricaoVaga'){
            setNVaga({
                'tituloVaga': nVaga.tituloVaga,
                'tipoVaga': nVaga.tipoVaga,
                'faixaSalarialVaga': nVaga.faixaSalarialVaga,
                'descricaoVaga': value,
                'periodoVaga': nVaga.periodoVaga
            })
        }
        else if(name === 'periodoVaga'){
            setNVaga({
                'tituloVaga': nVaga.tituloVaga,
                'tipoVaga': nVaga.tipoVaga,
                'faixaSalarialVaga': nVaga.faixaSalarialVaga,
                'descricaoVaga': nVaga.descricaoVaga,
                'periodoVaga': value
            })
        }
    }

    const showVaga = () => console.log(vaga)

    const removerVaga = (v)  => {
        let lista = vaga  
        lista = lista.filter((t) => t!== v)
        setVaga(lista)
    }

    return (
        <>
            <NewVaga
                capData = {captura}
                addData = {addVaga}
                newData = {nVaga}
                show = {showVaga}
            />

            {vaga.map((v,i) => (
                <VerVaga
                tituloVaga = {v.tituloVaga}
                tipoVaga = {v.tipoVaga}
                fxSalarial = {v.faixaSalarialVaga}
                descVaga = {v.descVaga}
                periodoVaga = {v.periodoVaga}
                remove = {removerVaga.bind(this, v)}
                />
            ))}
        </>
    )
}