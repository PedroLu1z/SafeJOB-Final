import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/header'

import '../PerfilVencedor/scrollbar.css'
import './candidato.css'

import {IoShareSocialSharp} from 'react-icons/io5'
import {BsInfoCircle} from 'react-icons/bs'
import FotoPerfil from '../../img/foto-perfil.png'
import LogoEmpresa from '../../img/logo-empresa.png'
import { Link } from "react-router-dom";


const verificar = sessionStorage.getItem("candidato-validado")


export default function Candidato() {

    useEffect(() => {
        if(verificar == null){
            window.location = "/"
        }
    }, []);

    const [vaga, setVagas] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/SafeJob/api/empresa/vaga").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setVagas(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    


    return (
        <>
            <Header />
            <main className='main-container'>
                <div className='container-principal'>
                    
                    <div className='cartao'>
                        <div class="minhas-informacoes">
                            <img src={FotoPerfil} alt="foto de perfil" />
                            <h1 class="nome">Nome do Candidato</h1>
                            <h2 class="cargo">Desenvolvedor Frontend Júnior</h2>
                        </div>

                        <div class="conteudo">
                            <ul class="abas">
                            <li class="aba selecionado" id="sobre-mim">
                                <BsInfoCircle></BsInfoCircle>
                            </li>
                            <li class="aba" id="minhas-redes" >
                                <IoShareSocialSharp></IoShareSocialSharp>
                            </li>
                            </ul>

                            <div class="informacoes-abas">
                            <div class="informacao selecionado" id="informacao-sobre-mim">
                                <h3 class="sub-titulo">Sobre</h3>

                                <div class="descricao">
                                <p>
                                    Sou uma pessoa apaixonada pela área de tecnologia desde que eu tinha 12
                                    anos. Sempre tive o sonho de trabalhar com T.I e
                                    atualmente sonho em trabalhar com programação(principalmente Front-End) e pretendo colocar esse sonho em prática estudando
                                    <span>HTML, CSS, JavaScript e React</span>. Fã de café (até demais), e meus
                                    principais hobbies são jogar Basquete, jogar MMO RPGS e assistir séries.
                                </p>
                                </div>
                            </div>

                                <div class="informacao" id="informacao-minhas-redes">
                                    <h3 class="sub-titulo">Minhas redes</h3>

                                    <ul class="redes-sociais">
                                        <li>
                                            <a href="#" target="_blank" class="curriculo">Currículo</a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" class="linkedin">LinkedIn</a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" class="github">GitHub</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                            <div className='container-vagas'>
                                <div className='tipo-vagas'>
                                    <h2>Recomendações para você</h2>
                                    <h3>São Paulo, São Paulo, Brasil</h3>
                                </div>
                                
                            {vaga.map((v) => 
                            
                                <div className='logo_empresa'>
                                    <img src={LogoEmpresa}/>
                                
                                    <div className='vagas-disponiveis'>
                                        <Link to='/vagas-page'><h2 className='titulo-vagas'>{v.tituloVaga} </h2></Link>
                                        <p className='nomeEmpresa'></p>
                                        <p className='enderecoEmpresa'>São Paulo, São Paulo, Brasil({v.tipoVaga})</p>
                                        <p className='tipoVaga'>PJ - Periodo {v.periodoVaga}</p>
                                    </div>
                                </div>
                            )}
                                {/* <div className='logo_empresa'>
                                    <img src={LogoEmpresa}/>
                                
                                    <div className='vagas-disponiveis'>
                                        <h2 className='titulo-vagas'>Banco de Talentos - Jovem Aprendiz (Barueri - São Paulo)</h2>
                                        <p className='nomeEmpresa'></p>
                                        <p className='enderecoEmpresa'>Coritiba, Brasil(Presencial)</p>
                                        <p className='tipoVaga'>CLT- Integral</p>
                                    </div>
                                </div>
                                <div className='logo_empresa'>
                                    <img src={LogoEmpresa}/>
                                
                                    <div className='vagas-disponiveis'>
                                        <h2 className='titulo-vagas'>Application Developer - EAI (Remoto)</h2>
                                        <p className='nomeEmpresa'></p>
                                        <p className='enderecoEmpresa'> Uberlândia, Minas Gerais, Brasil(Presencial)</p>
                                        <p className='tipoVaga'>CLT</p>
                                    </div>
                                </div>
                                <div className='logo_empresa'>
                                    <img src={LogoEmpresa}/>
                                
                                    <div className='vagas-disponiveis'>
                                        <h2 className='titulo-vagas'>Desenvolvedor Pleno (Híbrido)</h2>
                                        <p className='nomeEmpresa'></p>
                                        <p className='enderecoEmpresa'>São Paulo, São Paulo, Brasil(Remoto)</p>
                                        <p className='tipoVaga'>PJ</p>
                                    </div>
                                </div>
                                <div className='logo_empresa'>
                                    <img src={LogoEmpresa}/>
                                
                                    <div className='vagas-disponiveis'>
                                        <h2 className='titulo-vagas'>Desenvolvedor Pleno (Híbrido)</h2>
                                        <p className='nomeEmpresa'></p>
                                        <p className='enderecoEmpresa'>Rio de Janeiro, Brasil(Presencial)</p>
                                        <p className='tipoVaga'>PJ - Periodo Integral</p>
                                    </div>
                                </div> */}
                                
                            </div>

                            
                </div>    
            </main>
        </>
    )
}