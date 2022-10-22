import React, { useEffect } from 'react';
import HeaderEmpresa from '../../components/Header-Empresa';
import './empresa.css'
import { Link } from 'react-router-dom';
import {TfiWrite} from 'react-icons/tfi'
import {MdOutlineSpaceDashboard} from 'react-icons/md'
import {MdOutlineAssignment} from 'react-icons/md'


const verificar = sessionStorage.getItem('empresa-validado')


export default function Empresa() {

    useEffect(() => {
        if(verificar == null){
            window.location = "/"
        }
    }, []);
    
    return (
        <> 
            <HeaderEmpresa />
            
            <div className="body-empresa">
                <div className="conteudo-empresa">  
                    <div className="card-welcome-empresa">
                        <h2 className='welcome-empresa'>BEM VINDO <span className='empresa-nome'>EMPRESA</span>!</h2>
                        <p className='empresa-subtitulo'>A SafeJob te ajuda a encontrar o candidato perfeito para o seu time.</p>
                        <button className='empresa-botao'>Vamos Começar</button>
                    </div>
                </div>

                <div className='empresa-cartao-container'>

                    <div className='empresa-cartao'>
                        <TfiWrite size={30}></TfiWrite>
                        <h3 className='cartao-titulo' onClick={<Link to='/criar-prova'></Link>}>Criar Prova</h3>
                        <p className='cartao-descricao'>Aqui você pode criar uma prova para que os candidatos a sua vaga respondam</p>
                    </div>
                    <div className='empresa-cartao'>
                        <MdOutlineAssignment size={40}></MdOutlineAssignment>
                        <h3 className='cartao-titulo' onClick={<Link to='/criar-vaga'></Link>}>Criar Vaga</h3>
                        <p className='cartao-descricao'>Aqui você pode criar uma vaga para que os candidatos mandem curriculos para a ánalise</p>
                    </div>
                    <div className='empresa-cartao'>
                        <MdOutlineSpaceDashboard size={45}></MdOutlineSpaceDashboard>
                        <h3 className='cartao-titulo' onClick={<Link to='/ver-vaga'></Link>}>Vagas Criadas</h3>
                        <p className='cartao-descricao'>Veja as vagas criadas pela sua empresa!</p>
                    </div>
                </div>
            </div>
        </>
        
    )
}