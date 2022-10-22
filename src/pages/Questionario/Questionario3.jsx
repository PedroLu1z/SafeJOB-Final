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
              <h3>Eu tenho objetivos pessoais.</h3>
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
                    <h3>Eu estou interessado em tantas coisas que acho difícil escolher o que tentar em seguida.</h3>
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
                <h3>Eu me considero mais prático do que criativo.</h3>
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
                <h3>As pessoas raramente conseguem me aborrecer.</h3>
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
                <h3>Meu estilo de trabalho aproxima-se mais de picos de energia aleatórios do que uma abordagem metódica e organizada.</h3>
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

            <Link to="/questionario-page2">
              <button type="button" class='botao bounce-effect' onClick="backToTop();"><span>Anterior</span></button>
            </Link>

            <Link to="/curriculo-page">
              <button type="button" class='botao bounce-effect' ><span>Finalizar</span></button>
            </Link>
            </div>

        </div>
        
      </main>
    </>
  );
}
