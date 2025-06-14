import { NavLink } from 'react-router'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='navbar-container'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/explore">Explore</NavLink>
                <NavLink to="/socket-manager">Socket Manager</NavLink>
            </div>
        </>
    )
}

export default Header