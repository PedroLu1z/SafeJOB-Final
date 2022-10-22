import React, { useEffect } from 'react';
import Header from '../../components/Header/header'


const verificar = sessionStorage.getItem("candidato-validado")

export default function PerfilCandidato() {

  useEffect(() => {
    if(verificar == null){
        window.location = "/"
    }
  }, []);

  return (
    <>
        <Header/>
        <h2>Olá Candidato!</h2>
    </>
  );
}
