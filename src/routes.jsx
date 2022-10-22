import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Sobre from './pages/Sobre/sobre';
import Navbar from './components/NavBar/navbar';
import Home from './pages/Home/home';
import LoginCandidato from './pages/Login/login';
import LoginEmpresa from './pages/LoginEmpresa/loginEmpresa';
import CadastroCandidato from './pages/Cadastro/cadastroUser';
import CadastroEmpresa from './pages/CadastroEmpresa/cadastroEmpresa';
import Candidato from './pages/PaginaCandidato/candidato';
import Vaga from './pages/Vaga/vaga';
import Questionario1 from './pages/Questionario/Questionario1';
import Questionario2 from './pages/Questionario/Questionario2';
import Questionario3 from './pages/Questionario/Questionario3';
import Configuracao from './pages/Configuracao/config'
import Logout from './pages/Logout/sair'
import ListaCadastro from './components/API/ListaCadastro';
import Empresa from './pages/PaginaEmpresa/Empresa';
import NewVaga from './components/VagaState/VagaState';
import VerVaga from './pages/VerVaga/VerVaga';
import CriarProva from './components/ProvaState/ProvaState';
import PerfilVencedor from './pages/PerfilVencedor/PerfilVencedor';
import ListaEmpresa from './components/API/ListaEmpresa';
import ListaQuestionario from './components/API/ListaQuestionario';
import Curriculo from './pages/Curriculo/Curriculo'
import PerfilCandidato from './pages/PerfilCandidato/perfilCandidato'





function RouterApp() {
    return (
        <BrowserRouter>
            {/* 
            <Navbar>
                <Route path='/' element={<Home />} />
                <Route path='/user-login' element={<LoginCandidato />} />
                <Route path='/empresa-login' element={<LoginEmpresa />} />
                <Route path='/about' element={<Sobre />} />
            </Navbar> 
            */}
            <Routes>    
                {/* Rotas Iniciais */}
                <Route path='/navbar' element={<Navbar/>}/>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<Sobre />} />

                 {/*  Rotas Candidato/Usuário  */}
                <Route path='/user-login' element={<LoginCandidato />} />
                <Route path='/user-register' element={<CadastroCandidato />} />
                <Route path='/candidato-page' element={<Candidato />} />
                <Route path="/candidato-perfil" element ={<PerfilCandidato/>}/>
                <Route path='/parfil-vencedor' element={<PerfilVencedor />} />
                <Route path='/vagas-page' element={<Vaga/>}/>
                <Route path='/questionario-page' element={<Questionario1/>}/>
                <Route path="/questionario-page2" element={<Questionario2/>}/>
                <Route path="/questionario-page3" element={<Questionario3/>}/>
                <Route path='/configuracao-page' element={<Configuracao/>}/>
                <Route path='/logout-page' element={<Logout/>}/>
                <Route path='/curriculo-page' element={<Curriculo/>}/>

                {/* Rotas API */}
                <Route path='/tabela-candidato' element={<ListaCadastro/>}/>
                <Route path='/tabela-empresa' element={<ListaEmpresa/>}/>
                <Route path='/editar/:id' element={<CadastroCandidato/>}/>
                <Route path='/tabela-questionario' element={<ListaQuestionario/>}/>

                {/* Rotas Empresa */}
                <Route path='/empresa-login' element={<LoginEmpresa />} />
                <Route path='/empresa-cadastro' element={<CadastroEmpresa />} />
                <Route path='/empresa-page' element={<Empresa/>}/>
                <Route path='/criar-vaga' element={<NewVaga/>}/>
                <Route path="/criar-prova" element={<CriarProva/>}/>
                <Route path='/ver-vaga' element={<VerVaga/>}/>
               
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;