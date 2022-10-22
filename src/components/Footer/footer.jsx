import React from 'react';
import './footer.css'

export default function Footer() {
    return (
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
    )
}