import React, { useState, useEffect } from 'react';

export default function ListaCadastro() {
    const [candidatos, setCandidatos] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/SafeJob/api/candidato/cadastro").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setCandidatos(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    const handleDelete = (id)=>{
        fetch(`http://localhost:8080/SafeJob/api/candidato/cadastro${id}`, {
            method: "delete"
        }).then(()=> {
            window.location = "/"
        })
    }
    return (
        <>
            <h1>Lista de Candidatos Cadastrados!</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Gênero</th>
                        <th>Nvl.Escolaridade</th>
                        <th>RG</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Data Nascimento</th>
                        <th>Endereço</th>
                        <th>Estado Civil</th>


                    </tr>
                </thead>
                <tbody>
                    {candidatos.map((candidato) =>
                        <tr key={candidato.idCandidato}>
                            <td>{candidato.idCandidato}</td>
                            <td>{candidato.nomeCandidato}</td>
                            <td>{candidato.emailCandidato}</td>
                            <td>{candidato.senhaCandidato}</td>
                            <td>{candidato.generoCandidato}</td>
                            <td>{candidato.nivelEscolaridade}</td>
                            <td>{candidato.rgCandidato}</td>
                            <td>{candidato.cpfCandidato}</td>
                            <td>{candidato.telefoneCandidato}</td>
                            <td>{candidato.dataNascimento}</td>
                            <td>{candidato.enderecoCandidato}</td>
                            <td>{candidato.estadoCivil}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}