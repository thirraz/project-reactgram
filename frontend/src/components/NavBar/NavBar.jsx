import "./NavBar.css"

//Components
import { NavLink, Link } from "react-router-dom"
import {
    BsSearch,
    BsHouseDoorFill,
    BsFillPersonFill,
    BsFillCameraFill,
} from "react-icons/bs"

export const NavBar = () => {
    return (
        <nav>
            <Link to="/">ReactGram</Link>
            <form id="search-form">
                <input type="text" placeholder="Search" />
                <BsSearch />
            </form>
            <ul id="nav-links">
                <li>
                    <NavLink to="/">
                        <BsHouseDoorFill />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">Sign In</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Sign Up</NavLink>
                </li>
            </ul>
        </nav>
    )
}
