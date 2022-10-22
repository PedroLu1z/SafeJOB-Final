import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import Navbar from '../../components/NavBar/navbar';

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className='container_principal_home'>
                <div className="conteudo_home">
                    <div className="titulo_chamariz">
                        <h1>Safe <span>JOB</span></h1>
                    </div>

                    <p className='descricao_projeto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ipsa omnis hic, dolorem ea ex voluptatibus dicta optio harum corrupti sequi repellendus recusandae alias nisi voluptatum, quas ipsam voluptas earum! <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam animi reprehenderit quibusdam accusamus fugit quasi aperiam consectetur, quae molestiae perspiciatis ea facilis alias quod et dolorum eaque quo! Perspiciatis, tempore.</p>

                    <Link to='/user-register'> Faça Parte da Familia SafeJOB</Link>
                </div>

                <footer>
                    <div className="main-content">
                        <div className="center box">
                            <h2>Endereço</h2>
                            <div className="content-footer">
                                <div className="place">
                                    <span className='fas fa-map-marker'></span>
                                    <span className='text'>Av. Paulista 1106, São Paulo, SP</span>
                                </div>

                                <div className="phone">
                                    <span className='fas fa-phone-alt'></span>
                                    <span className='text'>(xx) xxxxx-xxxx</span>
                                </div>

                                <div className="email">
                                    <span className='fas fa-envelope'></span>
                                    <span className='text'>smashcode@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="right box">
                            <h2>Contato</h2>
                            <div className="content-footer">
                                <form action="#">
                                    <div className="email">
                                        <div className="text">Email *</div>
                                        <input type="email" required />
                                    </div>

                                    <div className="msg">
                                        <div className="tex">Mensagem *</div>
                                        <textarea cols="25" rows="2" required></textarea>
                                    </div>
                                    <div className="btn">
                                        <button type='submit'>Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="center">
                            <span className='credit'>Criado por <a href="#">SJ</a></span>
                            <span className='far fa-copyright'> 2022 Todos os direitos reservados</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home;