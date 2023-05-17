import '../styles/Banner.css'
import K from '../assets/K.png'
import Maison from '../assets/Maison.png'
import S from '../assets/S.png'
import A from '../assets/A.png'
function Banner() {
    return <div className='ks-banner'>
                    <img src={K} alt='Kasa' className='ks-logo' />
                    <img src={Maison} alt='Kasa' className='ks-logo' />
                    <img src={S} alt='Kasa' className='ks-logo' />
                    <img src={A} alt='Kasa' className='ks-logo' />
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
}

export default Banner