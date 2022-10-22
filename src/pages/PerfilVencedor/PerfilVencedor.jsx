import React from 'react'
import Header from '../../components/Header/header'
//import './perfil-vencedor.css'
import './scrollbar.css'



export default function Candidato() {
    return (
        <>
            <Header />
            <div className='body_candidato'>
                <div className="cartao_candidato">
                    <div className="infos_candidato">
                        <div>
                            <h1 className="h1_candidato">Lucas Sato</h1>
                            <h2 className='h2_candidato'>Comunicacao, Aprendizado Rapido</h2>
                        </div>
                    </div>

                    <div></div>

                    <div className='info-candidato-page'>

                        <div className="info-skills">
                            <span class="info_candidato">20 anos |  Developer Junior</span>
                            <span class="skills">Trabalho em Equipe</span>
                        </div>
                        
                        <div className="biografia">
                            <h2>Biografia</h2>
                            <button class="btn_enviar_proposta"><span>Enviar Proposta</span></button>
                        </div>

                        <div></div>

                        <div className="texto_candidato">
                            <p>Empenhado e extremamente motivado. Busco por mais experiência em desenvolvimento web, e possuo um conhecimento holístico em design gráfico. 
                                Não tenho medo de ter novas experiências e desafios, pois tenho a intenção de melhorar a cada dia. Busco oportunidades de demonstrar minhas habilidades, 
                                e também aprimorar elas sempre. Entendo que manter uma constância vai me colocar em um outro patamar. 
                                Atualmente estou adquirindo conhecimentos mais aprofundados em aplicações WEB Front-end e Back-end com Java, Express, ReactJS e SQL
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}