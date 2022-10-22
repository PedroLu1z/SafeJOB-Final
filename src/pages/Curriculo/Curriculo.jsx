import React, { useEffect, useState } from "react";
import IconPerfil from "../../pages/Questionario/img/foto-perfil.png";
import { Link, useParams } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { IoMdClipboard } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import "./curriculo.css";

export default function Curriculo() {
  let { id } = useParams();

  const [novo, setNovo] = useState({
    idCandidato: id,
    nomeCandidato: "",
    cpfCandidato: "",
    generoCandidato: "",
    dataNascimento: "",
    estadoCivil: "",
    descricaoCurriculo: ""
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

    fetch(`http://localhost:8080/SafeJob/api/candidato/info`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novo),
    }).then(() => {
      // window.location = "/candidato-page";
    });
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/SafeJob/api/candidato/info${id}`)
        .then((resp) => {
          return resp.JSON;
        })
        .then((data) => {
          setNovo(data);
        });
    }
  }, [id]);




  const [xp, setXp] = useState({
    idExpPro:"",
    tempoAtuacao:"",
    ensinoBase:"",
    ensinoSuperior:"",
  });

  const handleChangeXp = (e) => {
    setXp({ ...xp, [e.target.name]: e.target.value });
  };

  const handleSubmitXp = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/SafeJob/api/candidato/experiencia`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(xp),
    }).then(() => {
      window.location = "/candidato-page";
    });
  };


  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/SafeJob/api/candidato/experiencia${id}`)
        .then((resp) => {
          return resp.JSON;
        })
        .then((data) => {
          setNovo(data);
        });
    }
  }, [id]);

  
  function allHandleSubmit() {
    handleSubmit();
    handleSubmitXp();
  }



  return (
    <>
      <nav class="nav">
        <div>
          <h1>SafeJob</h1>
        </div>

        <ul class="nav-icons">
          <li>
            <Link to="/candidato-page">
              <BiHomeAlt size={30} color="white" />
            </Link>
          </li>
          <li>
            <Link to="/questionario-page">
              <IoMdClipboard size={30} color="white" />
            </Link>
          </li>
          <li>
            <div class="icon-perfil">
              <img src={IconPerfil}></img>
            </div>
          </li>

          <li>
            <Link to="/" className="logout-header">
              <BiLogOut size={30} color="white"></BiLogOut>
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <div class="container-main-curriculo">
          <div class="form-container">
            <form className="form-criar-curriculo">
              <h2>Crie seu Curriculo!!</h2>

              <h2>Dados Pessoais</h2>
              <div className="infos-candidato">
                <div>
                  <input
                    type="text"
                    name="nomeCandidato"
                    placeholder="Nome"
                    value={novo.nomeCandidato}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <input
                    type="number"
                    name="cpfCandidato"
                    placeholder="CPF"
                    value={novo.cpfCandidato}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="genCandidato"
                    placeholder="Gênero"
                    value={novo.genCandidato}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <input
                    type="date"
                    name="dataNascimento"
                    placeholder="Data de Nascimento"
                    value={novo.dataNascimento}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="estadoCivil"
                    placeholder="Estado Civil"
                    value={novo.estadoCivil}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    name="descricaoCurriculo"
                    placeholder="Descrição do Curriculo"
                    value={novo.descricaoCurriculo}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <h2>Experiência Profissional</h2>
              <div className="exp-form-candidato">
                <div>
                  <input
                    type="number"
                    name="tempoAtuacao"
                    placeholder="Tempo de Atuação"
                    value={xp.tempoAtuacao}
                    onChange={handleChangeXp}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="ensinoBase"
                    placeholder="Ensino Base"
                    value={xp.ensinoBase}
                    onChange={handleChangeXp}
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="ensinoSuperior"
                    placeholder="Ensino Superior"
                    value={xp.ensinoSuperior}
                    onChange={handleChangeXp}
                    required
                  />
                </div>
              </div>

              <div class="container_botao">
                
                <Link to='/candidato-page'>
                  <button type="submit" className="btn_enviar_curriculo">
                    Enviar Curriculo
                  </button>
                </Link>
                
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
