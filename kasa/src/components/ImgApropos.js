import '../styles/FirstImage.css'
import img_apropos from '../assets/img_a_propos.png'

function ImgApropos() {
    return <div className='ks-img_apropos-container'>
        <img src={img_apropos} alt='Kasa-first_image' className='ks-img_apropos' />
    </div>
}

export default ImgApropos