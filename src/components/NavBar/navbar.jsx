import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function () {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className='links' id={showLinks ? 'hidden' : ''}>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>Sobre</Link>
                    <Link to='/user-login'>Iniciar Sessão</Link>
                    <Link to='/empresa-login'>Sou uma Empresa</Link>
                </div>
                <div>
                    <button onClick={() => setShowLinks(!showLinks)}>Open</button>
                </div>
            </div>
        </div>
    )
}