import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ImgCadastro from '../../img/img_cadastro.png'
import './cadastroEmpresa.css'

export default function CadastroEmpresa(){
    
    let {id} = useParams()
    
    const [novo, setNovo] = useState({
        idEmpresa:id,
        nomeEmpresa:"",
        cnpjEmpresa:"",
        enderecoEmpresa:"",
        emailEmpresa:"",
        senhaEmpresa:"",
    })

    let metodo = "post"

    if(id){
        metodo = "put"
    }

    const handleChange = e => {
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()

        fetch(`http://localhost:8080/SafeJob/api/empresa/cadastro`,{
            method: metodo,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(novo)
        }).then(() =>{
            sessionStorage.setItem("empresa-validado")
            window.location = "/empresa-page"
        })
    }


    useEffect(() =>{
        if(id){
            fetch(`http://localhost:8080/SafeJob/api/empresa/cadastro${id}`)
            .then((resp) =>{
                return(resp.json())
            }).then(data =>{
                setNovo(data)
            })
        }
    })

    return(
        <div className="empresa__container">
            <div className="empresa__box">
                <div className="left__empresa">
                    <div className="empresa__top_link">
                        <Link to='/'>Return Home</Link>
                    </div>

                    <div className="empresa__contact">
                        <form onSubmit={handleSubmit}>
                            <h3>CADASTRO EMPRESA</h3>

                            <input type="text" value={novo.nomeEmpresa} onChange={handleChange} name='nomeEmpresa' placeholder='Nome da Empresa' required/>
                            <input type="text" value={novo.enderecoEmpresa} onChange={handleChange} name='enderecoEmpresa' placeholder='Endereço da Empresa' required/>
                            <input type="email" value={novo.emailEmpresa} onChange={handleChange} name='emailEmpresa' placeholder='Email empresarial' required/>
                            <input type="text" value={novo.cnpjEmpresa} onChange={handleChange} name='cnpjEmpresa' placeholder='CNPJ' required/>
                            <input type="password" value={novo.senhaEmpresa} onChange={handleChange} name='senhaEmpresa' placeholder='Senha' required/>
                            <span>Ja tem uma conta?<Link to='/empresa-login'>Logue-se aqui</Link></span>
                            <button type='submit' class='btn_cadastro'>Cadastrar-se</button>
                        </form>
                    </div>
                </div>

                <div className="right__empresa">
                    <div className="right_img__empresa">
                        <img src={ImgCadastro} className='img_cadastro__empresa' />
                    </div>
                </div>
            </div>
        </div>
    )
}