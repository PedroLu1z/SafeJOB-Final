import React, { useEffect } from "react";
import "./questionario.css";
import IconPerfil from "./img/foto-perfil.png";
import { Link } from "react-router-dom";
import {BiHomeAlt} from 'react-icons/bi'
import {IoMdClipboard} from 'react-icons/io'
import {BiLogOut} from 'react-icons/bi'

const verificar = sessionStorage.getItem("candidato-validado")


export default function Questionario() {

    useEffect(() => {
        if(verificar == null){
            window.location = "/"
        }
    }, []);

  return (
    <>
            <nav class="nav">
                  <div>
                  <h1>SafeJob</h1>
                  </div>

                  <ul class="nav-icons">
                  <li>
                      <Link to="/candidato-page">
                      <BiHomeAlt size={30} color="white"/>
                      </Link>
                  </li>
                  <li>
                      <Link to="/questionario-page">
                      <IoMdClipboard size={30} color="white"/>
                      </Link>
                  </li>
                  <li>
                      <div class="icon-perfil">
                      <img src={IconPerfil}></img>
                      </div>
                  </li>

                  <li>
                      <Link to='/' className='logout-header'>
                          <BiLogOut size={30} color="white"></BiLogOut>
                      </Link>
                  </li>

                  </ul>
            </nav>

      <main>
        <div class="questionario">
          <div class="titulo">
            <h1>Questionário de Personalidade</h1>
          </div>

          <hr class="linha" />

          <div class="perguntas">
            <div class="titulo-perguntas">
              <h3>Meu trabalho é Significativo.</h3>
            </div>
            <div class="container-perguntas">
                <div class="concordo">
                    <h2 id="concordo">Concordo</h2>
                </div>
                <div class="opcoes">
                    <div id="concordo-maximo"></div>
                    <div id="concordo-medio"></div>
                    <div id="concordo-minimo"></div>
                    <div id="neutro"></div>
                    <div id="discordo-minimo"></div>
                    <div id="discordo-medio"></div>
                    <div id="discordo-maximo"></div>
                </div>
                <div class="discordo">
                    <h2 id="discordo">Discordo</h2>
                </div>
            </div>
          </div>
            <div class="perguntas">
                    <div class="titulo-perguntas">
                    <h3>Eu me sinto animado para trabalhar.</h3>
                    </div>
                    <div class="container-perguntas">
                        <div class="concordo">
                            <h2 id="concordo">Concordo</h2>
                        </div>
                        <div class="opcoes">
                            <div id="concordo-maximo"></div>
                            <div id="concordo-medio"></div>
                            <div id="concordo-minimo"></div>
                            <div id="neutro"></div>
                            <div id="discordo-minimo"></div>
                            <div id="discordo-medio"></div>
                            <div id="discordo-maximo"></div>
                        </div>
                        <div class="discordo">
                            <h2 id="discordo">Discordo</h2>
                        </div>
                    </div>
            </div>

            <div class="perguntas">
                <div class="titulo-perguntas">
                <h3>Eu gosto de usar ferramentas de organização como agendas e listas..</h3>
                </div>
                <div class="container-perguntas">
                    <div class="concordo">
                        <h2 id="concordo">Concordo</h2>
                    </div>
                    <div class="opcoes">
                        <div id="concordo-maximo"></div>
                        <div id="concordo-medio"></div>
                        <div id="concordo-minimo"></div>
                        <div id="neutro"></div>
                        <div id="discordo-minimo"></div>
                        <div id="discordo-medio"></div>
                        <div id="discordo-maximo"></div>
                    </div>
                    <div class="discordo">
                        <h2 id="discordo">Discordo</h2>
                    </div>
                </div>
            </div>

            <div class="perguntas">
                <div class="titulo-perguntas">
                <h3>Mesmo um pequeno erro pode fazer com que eu duvide de minhas habilidades e conhecimentos gerais.</h3>
                </div>
                <div class="container-perguntas">
                    <div class="concordo">
                        <h2 id="concordo">Concordo</h2>
                    </div>
                    <div class="opcoes">
                        <div id="concordo-maximo"></div>
                        <div id="concordo-medio"></div>
                        <div id="concordo-minimo"></div>
                        <div id="neutro"></div>
                        <div id="discordo-minimo"></div>
                        <div id="discordo-medio"></div>
                        <div id="discordo-maximo"></div>
                    </div>
                    <div class="discordo">
                        <h2 id="discordo">Discordo</h2>
                    </div>
                </div>
            </div>
            
            <div class="perguntas">
                <div class="titulo-perguntas">
                <h3>Eu gosto de participar de atividades em grupo.</h3>
                </div>
                <div class="container-perguntas">
                    <div class="concordo">
                        <h2 id="concordo">Concordo</h2>
                    </div>
                    <div class="opcoes">
                        <div id="concordo-maximo"></div>
                        <div id="concordo-medio"></div>
                        <div id="concordo-minimo"></div>
                        <div id="neutro"></div>
                        <div id="discordo-minimo"></div>
                        <div id="discordo-medio"></div>
                        <div id="discordo-maximo"></div>
                    </div>
                    <div class="discordo">
                        <h2 id="discordo">Discordo</h2>
                    </div>
                </div>
            </div>

            <div class='container-botao'>

            <Link to="/questionario-page">
              <button type="button" class='botao bounce-effect' onClick="backToTop();"><span>Anterior</span></button>
            </Link>

            <Link to="/questionario-page3">
              <button type="button" class='botao bounce-effect' onClick="backToTop();"><span>Próximo</span></button>
            </Link>
              <img></img>
            
            </div>

        </div>
        
      </main>
    </>
  );
}
