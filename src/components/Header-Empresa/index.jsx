import React from 'react'
import { Link } from 'react-router-dom'
import './headerEmpresa.css'
import { BiLogOut } from "react-icons/bi";
import { IoMdClipboard } from "react-icons/io";
import { BiHomeAlt } from "react-icons/bi";
import IconPerfil from "../../img/foto-perfil.png";


export default function HeaderEmpresa() {

    const logout = () => {
        sessionStorage.removeItem("empresa-validado")
        window.location = '/'
    }

    return (
        <header className="main-content_header">
            <nav class="nav">
                <div>
                <h1>SafeJob</h1>
                </div>

                <ul class="nav-icons">
                <li>
                    <Link to="/empresa-page">
                    <BiHomeAlt size={30} color="white" />
                    </Link>
                </li>
                <li>
                    <Link className="logout-header" onClick={logout}>
                    <BiLogOut size={30} color="white"></BiLogOut>
                    </Link>
                </li>
                <li>
                    <div class="icon-perfil">
                    <img src={IconPerfil}></img>
                    </div>
                </li>

                </ul>
            </nav>
        </header>
        )
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    // <header className='header-empresa'>
    //     <div className="nav-bar-empresa">
    //         <div className="left-side-empresa">

    //             <div className="logo-safejob">
    //                 <h2>Safe <span>JOB</span></h2>
    //             </div>

    //             <nav className="links-empresa">
    //                 <Link to='/empresa-page'>Perfil</Link>
    //                 {/* <Link to='/ver-vaga'>Ver Vaga</Link> */}
    //                 <Link to='/criar-prova'>Criar Prova</Link>
    //                 <Link to='/criar-vaga'>Criar Vaga</Link>
    //                 <Link to='/ver-vaga'>Vagas Criadas</Link>
    //                 <Link className='logout-empresa-header' onClick={logout}>Sair</Link>

    //             </nav>
    //         </div>

        
        
    //     </div>
    // </header>