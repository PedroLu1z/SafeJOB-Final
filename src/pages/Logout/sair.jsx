import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/header'
export default function Sair(){
    return(
    <>
        <Header/>
        <div>
            <h1><Link to='/user-login'></Link></h1>
        </div>
     </>
    )
}