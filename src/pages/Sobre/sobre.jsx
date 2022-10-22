import React from 'react'
import Navbar from '../../components/NavBar/navbar'
import './sobre.css'
export default function Sobre() {
    return (
        <>
            <Navbar />
            <div className='container_principal_sobre'>
                <div className="conteudo_sobre">
                    <div className="chamariz_sobre">
                        <h1>Quem Somos Nós?</h1>
                    </div>

                    <div className="descricao_sobre">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus quo, quis, excepturi officia dignissimos odio error nostrum maiores, inventore qui cum nisi? Unde eaque sequi dolorem accusamus, tenetur ex?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil doloremque, fuga quaerat cum tenetur harum dolorem placeat, quam ducimus rerum distinctio? Ratione illo impedit voluptates facere cumque? Magni, libero.</p>
                    </div>
                </div>
            </div>
        </>
    )
}