import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderEmpresa from "../../components/Header-Empresa/index";
import "./prova.scss";


const verificar = sessionStorage.getItem('empresa-validado')


export default function CriarProva(props) {

  useEffect(() => {
    if(verificar == null){
      window.location = "/"
    }
  }, []);


  let { id } = useParams();

  const [novo, setNovo] = useState({
    idEmpresa: id,
    nomeEmpresa: "",
    cnpjEmpresa: "",
    enderecoEmpresa: "",
    emailEmpresa: "",
    senhaEmpresa: "",
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

    fetch(`http://localhost:8080/SafeJob/api/empresa/cadastro`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novo),
    }).then(() => {
      window.location = "/empresa-login";
    });
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/SafeJob/api/empresa/cadastro${id}`)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setNovo(data);
        });
    }
  });

  return (
    <>
      <HeaderEmpresa />
      <form action="" className="cont-criar-prova" onSubmit={props.addData}>
        <div className="big-cont-prova">
          <div>
            <div>
              <label>Questão</label>
              <div>
                <input
                  type="text"
                  name="questaoProva"
                  value={props.newData.questaoProva}
                  onChange={props.capChange}
                />
              </div>
            </div>
            <div>
              <label>Alternativas</label>
              <div>
                <label>Alternativa A</label>
                <input
                  name="alternativaA"
                  type="text"
                  value={props.newData.alternativaA}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa B</label>
                <input
                  name="alternativaB"
                  type="text"
                  value={props.newData.alternativaB}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa C</label>
                <input
                  name="alternativaC"
                  type="text"
                  value={props.newData.alternativaC}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa D</label>
                <input
                  name="alternativaD"
                  type="text"
                  value={props.newData.alternativaD}
                  onChange={props.capChange}
                />
              </div>
            </div>
            <div>
              <label>Resposta</label>
              <div>
                <select
                  name="respostaProva"
                  id="select"
                  value={props.newData.respostaProva}
                  onChange={props.capChange}
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <div>
              <label>Questão</label>
              <div>
                <input
                  type="text"
                  name="questaoProva"
                  value={props.newData.questaoProva}
                  onChange={props.capChange}
                />
              </div>
            </div>
            <div>
              <label>Alternativas</label>
              <div>
                <label>Alternativa A</label>
                <input
                  name="alternativaA"
                  type="text"
                  value={props.newData.alternativaA}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa B</label>
                <input
                  name="alternativaB"
                  type="text"
                  value={props.newData.alternativaB}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa C</label>
                <input
                  name="alternativaC"
                  type="text"
                  value={props.newData.alternativaC}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa D</label>
                <input
                  name="alternativaD"
                  type="text"
                  value={props.newData.alternativaD}
                  onChange={props.capChange}
                />
              </div>
            </div>
            <div>
              <label>Resposta</label>
              <div>
                <select
                  name="respostaProva"
                  id="select"
                  value={props.newData.respostaProva}
                  onChange={props.capChange}
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <div>
              <label>Questão</label>
              <div>
                <input
                  type="text"
                  name="questaoProva"
                  value={props.newData.questaoProva}
                  onChange={props.capChange}
                />
              </div>
            </div>
            <div>
              <label>Alternativas</label>
              <div>
                <label>Alternativa A</label>
                <input
                  name="alternativaA"
                  type="text"
                  value={props.newData.alternativaA}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa B</label>
                <input
                  name="alternativaB"
                  type="text"
                  value={props.newData.alternativaB}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa C</label>
                <input
                  name="alternativaC"
                  type="text"
                  value={props.newData.alternativaC}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa D</label>
                <input
                  name="alternativaD"
                  type="text"
                  value={props.newData.alternativaD}
                  onChange={props.capChange}
                />
              </div>
            </div>
            <div>
              <label>Resposta</label>
              <div>
                <select
                  name="respostaProva"
                  id="select"
                  value={props.newData.respostaProva}
                  onChange={props.capChange}
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <div>
              <label>Questão</label>
              <div>
                <input
                  type="text"
                  name="questaoProva"
                  value={props.newData.questaoProva}
                  onChange={props.capChange}
                />
              </div>
            </div>
            <div>
              <label>Alternativas</label>
              <div>
                <label>Alternativa A</label>
                <input
                  name="alternativaA"
                  type="text"
                  value={props.newData.alternativaA}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa B</label>
                <input
                  name="alternativaB"
                  type="text"
                  value={props.newData.alternativaB}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa C</label>
                <input
                  name="alternativaC"
                  type="text"
                  value={props.newData.alternativaC}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa D</label>
                <input
                  name="alternativaD"
                  type="text"
                  value={props.newData.alternativaD}
                  onChange={props.capChange}
                />
              </div>
            </div>
            <div>
              <label>Resposta</label>
              <div>
                <select
                  name="respostaProva"
                  id="select"
                  value={props.newData.respostaProva}
                  onChange={props.capChange}
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <div>
              <label>Questão</label>
              <div>
                <input
                  type="text"
                  name="questaoProva"
                  value={props.newData.questaoProva}
                  onChange={props.capChange}
                />
              </div>
            </div>
            <div>
              <label>Alternativas</label>
              <div>
                <label>Alternativa A</label>
                <input
                  name="alternativaA"
                  type="text"
                  value={props.newData.alternativaA}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa B</label>
                <input
                  name="alternativaB"
                  type="text"
                  value={props.newData.alternativaB}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa C</label>
                <input
                  name="alternativaC"
                  type="text"
                  value={props.newData.alternativaC}
                  onChange={props.capChange}
                />
              </div>
              <div>
                <label>Alternativa D</label>
                <input
                  name="alternativaD"
                  type="text"
                  value={props.newData.alternativaD}
                  onChange={props.capChange}
                />
              </div>
            </div>
            <div>
              <label>Resposta</label>
              <div>
                <select
                  name="respostaProva"
                  id="select"
                  value={props.newData.respostaProva}
                  onChange={props.capChange}
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="btn__criar__prova">
          <button type="submit">Cadastrar</button>
          <button>Ver</button>
        </div>
      </form>
    </>
  );
}
