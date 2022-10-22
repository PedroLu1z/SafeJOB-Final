import React, { useState } from 'react';
import CriarProva from '../../pages/CriarProva/CriarProva'

const initialValue = {
    questao: "",
    alternativaA:'',
    alternativaB:'',
    alternativaC:'',
    alternativaD: '',
    resposta: ''
}

export default  function ProvaState() {

    const [prova, setProva] = useState([])

    const [nProva, setNProva] = useState(initialValue)

    function addProva(ev) {
        ev.preventDefault()
        setProva([...prova, nProva])
        showProva()
    }

    function capDataForm (ev) {
        ev.preventDefault()
        const {name, value} = ev.target

        if(name == "questaoProva") {
            setNProva({
                questao: value,
                alternativaA: nProva.alternativaA,
                alternativaB:nProva.alternativaB,
                alternativaC:nProva.alternativaC,
                alternativaD: nProva.alternativaD,
                resposta: nProva.resposta
            })
        }
        else if(name == "alternativaA") {
            setNProva({
                questao: nProva.questao,
                alternativaA: value,
                alternativaB:nProva.alternativaB,
                alternativaC:nProva.alternativaC,
                alternativaD: nProva.alternativaD,
                resposta: nProva.resposta
            })
        }
        else if(name == "alternativaB") {
            setNProva({
                questao: nProva.questao,
                alternativaA: nProva.alternativaA,
                alternativaB: value,
                alternativaC:nProva.alternativaC,
                alternativaD: nProva.alternativaD,
                resposta: nProva.resposta
            })
        }
        else if(name == "alternativaC") {
            setNProva({
                questao: nProva.questao,
                alternativaA: nProva.alternativaA,
                alternativaB: nProva.alternativaB,
                alternativaC: value,
                alternativaD: nProva.alternativaD,
                resposta: nProva.resposta
            })
        }
        else if(name == "alternativaD") {
            setNProva({
                questao: nProva.questao,
                alternativaA: nProva.alternativaA,
                alternativaB: nProva.alternativaB,
                alternativaC:nProva.alternativaC,
                alternativaD: value,
                resposta: nProva.resposta
            })
        }
        else if(name == "resposta") {
            setNProva({
                questao: nProva.questao,
                alternativaA: nProva.alternativaA,
                alternativaB: nProva.alternativaB,
                alternativaC:nProva.alternativaC,
                alternativaD: nProva.alternativaD,
                resposta: ev.target.value
            })
        }

    }
    function showProva() {
        console.log(prova)
    }

  return (
    <>
        <CriarProva
            newData = {nProva}
            capChange = {capDataForm}
            addData = {addProva}
        />
    </>
  );
}

