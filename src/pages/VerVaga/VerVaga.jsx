import React, { useEffect, useState } from 'react'
import HeaderEmpresa from '../../components/Header-Empresa';
//import DataVaga from './VagaData/dataVaga'
import './vervaga.css'
import { RiShoppingBag3Fill, RiMoneyDollarCircleFill } from 'react-icons/ri'
import { FaSuitcase } from 'react-icons/fa'
import { BsFillClockFill } from 'react-icons/bs'
import EmpresaLogo from './img/facebook-logo.jpg'

const verificar = sessionStorage.getItem('empresa-validado')


export default function VerVaga(props) {


    useEffect(() => {
        if(verificar == null){
          window.location = "/"
        }
    }, []);


    const [vagas, setVagas] = useState([])

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

//
    const handleDelete = (id)=>{
        fetch(`http://localhost:8080/SafeJob/api/empresa/vaga${id}`, {
            method: "delete"
        }).then(()=> {
            window.location = "/"
        })
    }

    return (
        <>
            
            <HeaderEmpresa />
            
            
            
            <div class='main_container'>

                <div className='titulo-vaga'>
                    <h1>Suas Vagas Criadas:</h1>            
                </div>
                
                    
                <div className="container_vaga">
                    
                    {/* <div class="info_vagas">
                        <ul>
                            <li>Desenvolvedor Full-Stack Junior</li>
                            <li>Remoto</li>
                            <li>R$ 1200</li>
                            <li>Venha trabalhar como Desenvolvedor Full-Stack na nossa empresa e ganhe muita experiencia no mercado de trabalho</li>
                            <li>8 Horas</li>
                            <li>Periodo Integral</li>
                        </ul>
                    </div> */}
                    
                    
                    {vagas.map((vaga) =>

                        <ul>
                            <div className="vaga-cadastrada">
                                <header className="header-vaga">
                                    <div className="img-empresa-vaga">
                                        <img src={EmpresaLogo} alt="img-empresa" />
                                    </div>
                                    <div className="info-header-vaga">
                                        <h2>{vaga.tituloVaga}</h2>
                                        <div>
                                            <RiShoppingBag3Fill size={20}/>
                                            <p>{vaga.tipoVaga}</p>
                                        </div>
                                    </div>
                                    <div className="info-vaga">
                                        <div>
                                            <RiMoneyDollarCircleFill size={25}/>
                                            <p>R${vaga.pretencaoSalarial}.0</p>
                                        </div>
                                        <div>
                                            <FaSuitcase size={20}/>
                                            <p>{vaga.horasTrabalho}</p>
                                        </div>
                                        <div>
                                            <BsFillClockFill size={20}/>
                                            <p>{vaga.periodoVaga}</p>
                                        </div>
                                    </div>
                                </header>
                                <div className="desc-vaga">
                                    <p>{vaga.descricaoVaga}</p>
                                </div>
                                <hr />
                            </div>
                        </ul>
                    )} 
                </div>
            </div>
           
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            {/* <div className="container-ver-vaga">
                <div className="card-ver-vaga">
                    <div className="titulo-ver-vaga">
                        <h3>{props.tituloVaga}</h3>
                    </div>
                    <div className="ver-vaga-info">
                        <p>Tipo da Vaga: {props.tipoVaga}</p>
                        <p>Faixa Salarial: {props.fxSalarial}</p>
                        <p>Descrição Vaga: {props.descVaga}</p>
                        <p>Periodo da Vaga: {props.periodoVaga}</p>
                    </div>

                    <div className="editar-btn">
                        <button onClick={props.remove}><X /></button>
                    </div>
                </div>
            </div> */}
        </>
    )
}