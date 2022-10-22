import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UnknowUser from "../../pages/VerVaga/img/foto-perfil.png";
import { BiLogOut } from "react-icons/bi";
import { IoMdClipboard } from "react-icons/io";
import { BiHomeAlt } from "react-icons/bi";
import IconPerfil from "../../img/foto-perfil.png";

const logout = () => {
  sessionStorage.removeItem("candidato-validado")
  window.location = '/'
}


export default function Header() {
  return (
    <header className="main-content_header">
      <nav class="nav">
        <div>
          <h1>SafeJob</h1>
        </div>

        <ul class="nav-icons">
          <li>
            <Link to="/candidato-page">
              <BiHomeAlt size={30} color="white" />
            </Link>
          </li>
          <li>
            <Link to="/questionario-page">
              <IoMdClipboard size={30} color="white" />
            </Link>
          </li>
          <li>
            <div class="icon-perfil">
              <img src={IconPerfil}></img>
            </div>
          </li>

          <li>
            <Link className="logout-header" onClick={logout}>
              <BiLogOut size={30} color="white"></BiLogOut>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

{
  /* <button className='logout-header' onClick={() => navigate("/user-login")}>Sair</button> */
}
