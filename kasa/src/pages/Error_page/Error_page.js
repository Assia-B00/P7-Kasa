import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Footer from '../../components/Footer'
import '../../styles/Error_page.css'

function ErrorPage() {
    return (
        <Fragment>

            <div className='error commun-error'>
                <span className='number'>404</span>
                <h4>Oups! La page que vous demandez n'existe pas.</h4>
                <p ><Link className='link-error' to="/">Retourner sur la page d’accueil</Link></p>
            </div>

            <Footer />
        </Fragment>
    )
}

export default ErrorPage
