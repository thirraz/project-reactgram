import './NavBar.css'

//Components
import { NavLink, Link } from 'react-router-dom'
import {
    BsSearch,
    BsHouseDoorFill,
    BsFillPersonFill,
    BsFillCameraFill,
} from 'react-icons/bs'

export const NavBar = () => {
    return (
        <nav>
            <Link to="/">ReactGram</Link>
            <form>
                <BsSearch />
                <input type="text" />
            </form>
            <ul className="nav-links">
                <NavLink to="/">
                    <BsHouseDoorFill />
                </NavLink>
                <NavLink to="/login">Sign In</NavLink>
                <NavLink to="/register">Sign Up</NavLink>
            </ul>
        </nav>
    )
}
