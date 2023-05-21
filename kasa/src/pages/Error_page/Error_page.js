import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Footer from '../../components/Footer'

function ErrorPage() {
    return (
        <Fragment>

            <div className='error commun-error'>
                <span>404</span>
                <h4>Oups! La page que vous demandez n'existe pas.</h4>
                <p><Link to="/">Retourner sur la page d’accueil</Link></p>
            </div>

            <Footer />
        </Fragment>
    )
}

export default ErrorPage
