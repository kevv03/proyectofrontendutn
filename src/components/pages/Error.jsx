import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Error.css"

function Error() {
    return (
        <>
            <div className="error">
                <div className="content">
                    <h3>Oops! No se encontró la página que estaba buscando...</h3>
                    <img src="../../images/claqueta_error.png" alt="Página no encontrada" />
                </div>
                <div className="link">
                    <Link to="/" className="hijo">Volver a la página principal</Link>
                </div>
            </div>
        </>
    )
}

export default Error
