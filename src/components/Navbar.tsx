import './styles/Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to='/'>Inserisci</NavLink>
        <NavLink to='/table'>Tabella</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
    </div>
  )
}

export default Navbar
