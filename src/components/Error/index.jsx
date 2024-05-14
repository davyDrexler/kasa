import { NavLink } from 'react-router-dom';
import './error.css'

function Error() {
        
  return (
    <div className='error'>
      <div className='info'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </div>
      <div className='link'>
        <NavLink className='return' to="/">Retourner sur la page d’accueil</NavLink>
      </div>
    </div>
  );
}

export default Error;
