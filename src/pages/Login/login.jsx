import { useState } from "react";
import { Link } from "react-router-dom";
import ImgLogin from "../../img/img_cadastro.png";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {


  const [usuario, setUsuario] = useState({
    emailLogin: "",
    senhaLogin: "",
  });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const logar = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    };

    const response = await fetch(
      "http://localhost:8080/SafeJob/api/candidato/login/",
      requestOptions
    );

    const data = await response.json();
    if (data.emailCandidato) {
      sessionStorage.setItem("candidato-validado", data.emailCandidato);
      window.location = "/candidato-page";
    } else {
      window.location = "/user-login";
      alert("LOGIN NÃO ENCONTRADO")
    }
  };

  return (
    <div className="login_container">
      <div className="login_box">
        <div className="left">
          <div className="top_link">
            <Link to="/">Return Home</Link>
          </div>

          <div className="contact_login" id="login-candidato">
            <form onSubmit={logar}>
              <h3>LOGIN CANDIDATO</h3>
              <input
                type="text"
                placeholder="EMAIL"
                name="emailLogin"
                id="emailLogin"
                // required
                value={usuario.emailLogin}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="SENHA"
                name="senhaLogin"
                id="senhaLogin"
                // required
                value={usuario.senhaLogin}
                onChange={handleChange}
              />
              <Link to="/user-register">Cadastrar-se</Link>
              {/* <button id='btn_login' className='btn_login' onClick={() => navigate("/candidato-page")}>Logar</button> */}
              <button type="submit" className="btn_login">
                Logar
              </button>
              {/* <Link to='/candidato-page' className='btn_login' id='btn_login'>Logar</Link> */}
            </form>
          </div>
        </div>

        <div className="right">
          <div className="right_img">
            <picture>
              <img src={ImgLogin} className="img_login" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
