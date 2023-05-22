import '../styles/First_image.css'
import first_image from '../assets/first_image.png'

function FirstImage() {
    return <div className='ks-first_image-container'>
        <img src={first_image} alt='Kasa-first_image' className='ks-first_image' />
        <h1 className='ks-first_image-h1'>Chez vous, partout et ailleurs</h1>
    </div>
}

export default FirstImage

