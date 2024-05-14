import { NavLink } from 'react-router-dom'
import DefaultPicture from '../../assets/logo/logo.png'
import './header.css'

function Header() {
    return (
        <div className='header'>
            <img src={DefaultPicture} alt="logo" height={80} width={80} />
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </div>
    )
}

export default Header