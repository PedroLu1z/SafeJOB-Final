import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

export default function ListaEmpresa() {
  
    const [empresas, setEmpresas] = useState([])

    useEffect (() => {
        fetch("http://localhost:8080/SafeJob/api/empresa/cadastro").then((resp) =>{
            return resp.json()

        }).then((resp) =>{
            setEmpresas(resp)
            console.log(resp)
        }).catch((error) =>{
            console.log(error)
        })
    }, [])
  
    return (
    <>
        <h1>Lista de Empresas Cadastradas!</h1>

        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Cnpj</th>
                    <th>Endereço</th>
                    <th>Numero</th>
                    <th>Email</th>
                    <th>Senha</th>


                </tr>
            </thead>
            <tbody>
                {empresas.map((empresa) =>
                    <tr key={empresa.idEmpresa}>
                        <td>{empresa.idEmpresa}</td>
                        <td>{empresa.nomeEmpresa}</td>
                        <td>{empresa.cnpjEmpresa}</td>
                        <td>{empresa.enderecoEmpresa}</td>
                        <td>{empresa.numeroEmpresa}</td>
                        <td>{empresa.emailEmpresa}</td>
                        <td>{empresa.senhaEmpresa}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
  )
}
