import React, { useEffect, useState } from "react";
import HeaderEmpresa from "../../components/Header-Empresa";
import { useForm } from "react-hook-form";

import "./criarvaga.css";
import { useParams } from "react-router-dom";



const verificar = sessionStorage.getItem('empresa-validado')


export default function NewVaga(props) {


  useEffect(() => {
    if(verificar == null){
      window.location = "/"
    }
  }, []);


  let { id } = useParams();

  const [novo, setNovo] = useState({
    idVaga: id,
    tituloVaga: "",
    tipoVaga: "",
    pretencaoSalarial: "",
    descricaoVaga: "",
    horasTrabalho: "",
    periodoVaga: "",
  });

  let metodo = "post";

  if (id) {
    metodo = "put";
  }

  const handleChange = (e) => {
    setNovo({ ...novo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/SafeJob/api/empresa/vaga`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novo),
    }).then(() => {
      window.location = "/ver-vaga";
    });
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/SafeJob/api/empresa/vaga${id}`)
        .then((resp) => {
          return resp.JSON;
        })
        .then((data) => {
          setNovo(data);
        });
    }
  },[id]);

  return (
    <>
      <HeaderEmpresa />
      <div className="cont-criar-vaga">
        <div className="conteudo-form-vaga">
          <div className="h1-form-vaga">
            <h2>Cadastro de Vagas</h2>
          </div>
          <form action="" className="form-vaga" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Titulo da Vaga</label>
              <div>
                <input
                  type="text"
                  name="tituloVaga"
                  required
                  value={novo.tituloVaga}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>

            <label htmlFor="">Tipo da Vaga</label>
              <div>
                <input
                  type="text"
                  name="tipoVaga"
                  value={novo.tipoVaga}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="">Faixa Salarial</label>
              <div>
                <input
                  type="text"
                  name="pretencaoSalarial"
                  required
                  value={novo.pretencaoSalarial}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>

              <label htmlFor="">Descrição Vaga</label>
              <div>
                <textarea
                  name="descricaoVaga"
                  cols="70"
                  rows="3"
                  value={novo.descricaoVaga}
                  onChange={handleChange}
    
                ></textarea>
              </div>
            </div>

            <div>
              <label htmlFor="">Periodo da Vaga</label>
              <div>
                <input
                  type="text"
                  name="periodoVaga"
                  value={novo.periodoVaga}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="">Horas de Trabalho</label>
              <div>
                <input
                  type="text"
                  name="horasTrabalho"
                  value={novo.horasTrabalho}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>


            <button className="cadastrar-vaga" type="submit">
              Criar Vaga
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
