import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImgLogin from '../../img/img_cadastro.png'
import './loginEmpresa.css'

export default function LoginEmpresa (){

    const [empresa, setEmpresa] = useState({
        emailLogin: "",
        senhaLogin: "",
      });
    
      const handleChange = (e) => {
        setEmpresa({ ...empresa, [e.target.name]: e.target.value });
      };
    
      const logar = async (e) => {
        e.preventDefault();
    
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(empresa),
        };
    
        const response = await fetch(
          "http://localhost:8080/SafeJob/api/empresa/login/",
          requestOptions
        );
    
        const data = await response.json();
        if (data.nomeEmpresa) {
          sessionStorage.setItem("empresa-validado", data.emailEmpresa);
          window.location = "/empresa-page";
        } else {
          window.location = "/empresa-login";
          alert("LOGIN NÃO ENCONTRADO")
        }
      };

    return(
        <div className='empresa_container'>
           <div className="empresa_box">
                <div className="left_empresa">
                    <div className="empresa_top_link">
                        <Link to='/'>Return Home</Link>
                    </div>

                    <div className="empresa_contact" id='login-empresa'>
                        <form onSubmit={logar}>
                            <h3>LOGIN EMPRESARIAL</h3>
                            <input type="text" placeholder='EMAIL EMPRESARIAL' required name='emailLogin' value={empresa.emailLogin} onChange={handleChange}/>
                            <input type="password" placeholder='SENHA' required name="senhaLogin" value={empresa.senhaLogin} onChange={handleChange} />
                            <Link to='/empresa-cadastro'>Cadastre-se</Link>
                            <button type='submit' className='btn_empresa_login'>Logar</button>
                            {/* <Link className='btn_empresa_login' to='/empresa-page'>Logar</Link> */}
                        </form>
                    </div>
                </div>

                <div className="right_empresa">
                    <div className="right_img">
                        <picture>
                            <img src={ImgLogin} className='img_login_empresa' />
                        </picture>
                    </div>
                </div>
           </div>
        </div>
    )
}