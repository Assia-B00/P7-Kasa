import '../styles/Banner.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Banner() {
    return <div className='ks-banner'>
        <img src={logo} alt='Kasa-logo' className='ks-logo' />
        <nav class='nav'>
            <ul class='nav-list'>
                <li class='nav-items'>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/A_propos">À propos</Link>
                </li>
            </ul>
        </nav>
    </div>
}

export default Banner