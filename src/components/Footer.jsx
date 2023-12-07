import React from 'react'
import "../styles/Footer.css"

function Footer() {
    return (
        <>
            <section className="footer">
                <section className="social">
                    <h4>Seguinos en nuestras redes</h4>
                    <div>
                        <a href="https://www.instagram.com">‣Instagram</a>
                        <a href="https://www.facebook.com">‣Facebook</a>
                        <a href="https://www.twitter.com">‣Twitter</a>
                    </div>
                </section>
                <section className="our">
                    <h4>Acerca de nosotros</h4>
                    <div>
                        <p>Podés contactarnos a través de nuestras redes sociales o a través de nuestro correo de contacto <span className="span">contacto@thebestmovies.com</span></p>
                    </div>
                    <div>
                        <p>Precios</p>
                        <ul>
                            <li>SALAS 2D - $1950</li>
                            <li>SALAS 3D - $2450</li>
                            <li>SALAS 4D - $3000</li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Footer