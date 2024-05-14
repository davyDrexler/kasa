import DefaultPicture from '../../assets/logo/logo-white.png'
import './footer.css'

function Footer() {
    return (
        <div id='footer'>
            <div className='element'>
                <img src={DefaultPicture} alt="logo" height={80} width={80} />
                <h3>© 2024 Kasa. All rights reserved</h3>
            </div>
        </div>
    )
}

export default Footer