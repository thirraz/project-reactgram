import "./NavBar.css"

//Components
import { NavLink, Link } from "react-router-dom"
import {
    BsSearch,
    BsHouseDoorFill,
    BsFillPersonFill,
    BsFillCameraFill,
} from "react-icons/bs"

//Hooks
import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

//Redux
import { logout, reset } from "../../slices/authSlice"

export const NavBar = () => {
    const { auth } = useAuth()
    const { user } = useSelector((state) => state.auth)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
    }

    return (
        <nav>
            <Link to="/">ReactGram</Link>
            <form id="search-form">
                <input type="text" placeholder="Search" />
                <BsSearch />
            </form>
            <ul id="nav-links">
                {auth ? (
                    <>
                        <li>
                            <NavLink to="/">
                                <BsHouseDoorFill />
                            </NavLink>
                        </li>
                        {user && (
                            <li>
                                <NavLink to={`/users/${user._id}`}>
                                    <BsFillCameraFill />
                                </NavLink>
                            </li>
                        )}
                        <NavLink to="/profile">
                            <BsFillPersonFill />
                        </NavLink>
                        <li>
                            <span onClick={handleLogout}>Exit</span>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to="/login">Sign In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Sign Up</NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}
