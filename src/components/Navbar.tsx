import './styles/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'>Inserisci</Link>
        <Link to='/table'>Tabella</Link>
        <Link to='/dashboard'>Dashboard</Link>
    </div>
  )
}

export default Navbar
