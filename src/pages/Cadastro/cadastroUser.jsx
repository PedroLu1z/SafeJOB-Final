import React, { useState, useEffect } from 'react'
import { json, Link, useParams } from 'react-router-dom'
import ImgCadastro from '../../img/img_cadastro.png'
import './cadastro.css'

export default function CadastroCandidato() {

    let { id } = useParams();

    const [novo, setNovo] = useState({
        idCandidato: id,
        nomeCandidato: "",
        generoCandidato: "",
        emailCandidato: "",
        senhaCandidato: "",
        cpfCandidato: "",
        dataNascimento: "",
        telefoneCandidato: "",
        enderecoCandidato:"",
        nivelEscolaridade: "",
        estadoCivil:"",
        rgCandidato:""
    })

    let metodo = "post"

    if (id) {
        metodo = "put"
    }

    const handleChange = e => {
        setNovo({ ...novo, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        fetch(`http://localhost:8080/SafeJob/api/candidato/cadastro`, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            sessionStorage.setItem("candidato-validado")
            window.location = "/candidato-page"
        })
    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8080/SafeJob/api/candidato/cadastro/${id}`)
            .then((resp) =>{
                return(resp.JSON)
            }).then(data=>{
                setNovo(data)
            })
        }
    })


    return (
        <div className="cadastro_container">
            <div className="cadastro_box">
                <div className="left_cadastro">
                    <div className="cadastro_top_link">
                        <Link to='/'>Return Home</Link>
                    </div>

                    <div className="contact_cadastro">
                        <form onSubmit={handleSubmit}>
                            <h3>CADASTRO CANDIDATO</h3>

                            <input type="text" name='nomeCandidato' placeholder='Nome' value={novo.nomeCandidato} onChange={handleChange} required />
                            {/* <input type="text" name='generoCandidato' placeholder='Gênero' value={novo.generoCandidato} onChange={handleChange} required/> */}
                            <select name='generoCandidato' placeholder='Gênero' value={novo.generoCandidato} onChange={handleChange} required>
                                <option>M</option>
                                <option>F</option>
                                <option>NB</option>
                            </select>
                            <input type="text" name='estadoCivil' placeholder='Estado Civil' value={novo.estadoCivil} onChange={handleChange} required/>
                            <input type="date" name='dataNascimento' value={novo.dataNascimento} onChange={handleChange} required/>
                            <input type="email" name='emailCandidato' placeholder='Email' value={novo.emailCandidato} onChange={handleChange} required/>
                            <input type="password" name='senhaCandidato' placeholder='Senha' value={novo.senhaCandidato} onChange={handleChange}  required/>
                            <input type="tel" name='telefoneCandidato' placeholder='Telefone' value={novo.telefoneCandidato} onChange={handleChange} required/>
                            <input type="text" name='enderecoCandidato' placeholder='Endereço' value={novo.enderecoCandidato} onChange={handleChange} required/>
                            <input type="text" name='nivelEscolaridade' placeholder='Escolaridade' value={novo.nivelEscolaridade} onChange={handleChange} required/>
                            <input type="text" name='cpfCandidato' placeholder='CPF' value={novo.cpfCandidato} onChange={handleChange} required/>
                            <input type="text" name='rgCandidato' placeholder='RG' value={novo.rgCandidato} onChange={handleChange} required/>
                            <span>Ja tem uma conta? <Link to='/user-login'>Logue-se aqui</Link></span>
                            <button type='submit' className="btn_cadastro">Cadastre-se</button>
                        </form>
                    </div>
                </div>

                <div className="right_cadastro">
                    <div className="right_img">
                        <img src={ImgCadastro} className='img_cadastro' />
                    </div>
                </div>
            </div>
        </div>
    )
}