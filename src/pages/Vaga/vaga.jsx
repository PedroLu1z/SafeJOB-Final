import React from 'react'
import Header from '../../components/Header/header'
import './vaga.css'
import { Link, useParams } from "react-router-dom";

export default function Vaga() {
    return (
        <>
            <Header />
            <div className='main_content_vaga'>
                <div className='conteudo_vaga'>
                    <div className="left-side_vaga">
                        <div className="titulo_vaga">
                            <h1>Desenvolvedor Front End Junior - Remoto</h1>
                        </div>

                        <div className="sub-titulo_vaga">
                            <h4>Remoto</h4>
                            <h4>Faixa Salarial: R$ 3.000 / R$ 5.000</h4>
                            <h4>Senioridade: Junior</h4>
                        </div>


                        <div className="descricao_vaga">
                            <div className="nome_empresa">
                                <h4 className='empresa_titulo'>Empresa</h4>
                                <h3 className='empresa_contratante'><a href="https://www.ibm.com/br-pt" target='_blank'>IBM</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Natus ea, placeat rerum nisi voluptas porro, <br /> tenetur delectus nihil necessitatibus, sapiente velit labore</p>
                            </div>
                        </div>

                        <div className="requisitos_vaga">
                            <h3>Requisitos</h3>

                            <p>Tecnologias Desejaveis</p>

                            <div className="tecnologias_vaga">
                                <button className="requisito1">Java</button>
                                <button className="requisito2">React Js</button>
                            </div>
                        </div>
                        
                        <div className="btn_candidatar_vaga">
                            <Link to='/curriculo-page'><button>Me candidatar</button></Link>
                        </div>

                    </div>
                    <div className="right-side_vaga">
                        <div className="box_right_vaga">
                            <div className="titulo_right_vaga">
                                <h2>Cientista de Dados</h2>
                            </div>

                            <div className="sub-titulo_right_vaga">
                                <h4>Remoto</h4>
                                <h4>R$ 7.000 - 8.000</h4>
                            </div>
                            
                            <div className="descricao-right-vaga">
                                
                            </div>


                            <div className="right_tecnologias_vagas-line1">
                                <button className="right-requisito1">Python</button>
                                <button className="right-requisito2">SQL</button>
                            </div>

                            <div className="right_tecnologias_vagas-line2">
                                <button className="right-requisito3">Node JS</button>
                                <button className="right-requisito4">Watson</button>
                            </div>

                            <div className="right_candidatar">
                                <Link to='/curriculo-page'><button>Me candidatar</button></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}