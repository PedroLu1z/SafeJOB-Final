import React, { useEffect, useState } from 'react'

export default function ListaQuestionario() {
  
    const [questionarios, setQuestionarios] = useState([])

    useEffect (() =>  {
        fetch("http://localhost:8080/SafeJob/api/questionario").then((resp) =>{
            return resp.json()
        }).then((resp) =>{
            setQuestionarios(resp)
            console.log(resp)
        }).catch((error) =>{
            console.log(error)
        })
    }, [])
  
    return (
    <>
    
        <h1>Lista de Candidatos Cadastrados!</h1>

        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Data Emissão</th>
                    <th>Data de Entrega</th>
                    <th>Pergunta</th>
                    <th>Resposta</th>
                    <th>Tipo de Resposta</th>
                </tr>
            </thead>
            <tbody>
                {questionarios.map((questionario) =>
                    <tr key={questionario.idQuestionario}>
                        <td>{questionario.idQuestionario}</td>
                        <td>{questionario.dataEmissao}</td>
                        <td>{questionario.dataEntrega}</td>
                        <td>{questionario.perguntaQuestionario}</td>
                        <td>{questionario.respostaQuestionario}</td>
                        <td>{questionario.tipoRespostaQuestionario}</td>
                    </tr>
                )}
            </tbody>
        </table>



    </>
  )
}
