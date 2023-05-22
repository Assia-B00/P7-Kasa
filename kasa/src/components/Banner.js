import '../styles/Banner.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Banner() {
    return <div className='ks-banner'>
        <img src={logo} alt='Kasa-logo' className='ks-logo' />
        <nav className='nav'>
            <ul className='nav-list'>
                <li>
                    <Link className='nav-items' to="/">Accueil</Link>
                </li>
                <li>
                    <Link className='nav-items' to="/A_propos">À propos</Link>
                </li>
            </ul>
        </nav>
    </div>
}

export default Banner