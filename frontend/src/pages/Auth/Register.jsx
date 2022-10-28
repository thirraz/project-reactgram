import "./Auth.css"

//Components
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Message } from "../../components/Message/Message"

//Hooks
import { useState, useEffect } from "react"

//Redux
import { register, reset } from "../../slices/authSlice"

export const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch()

    const { loading, error } = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name,
            email,
            password,
            confirmPassword,
        }
        console.log(user)

        dispatch(register(user))
    }

    //Clean all auth states
    useEffect(() => {
        dispatch(reset())
    }, [dispatch])

    return (
        <div id="register">
            <h1>ReactGram</h1>
            <p className="subtitle">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Sign Up to see photos of your friends! It's free!
            </p>
            <form id="form" onSubmit={handleSubmit}>
                {/*name field */}
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name || ""} //
                />
                {/*e-mail field */}
                <input
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email || ""}
                />
                {/*password field */}
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password || ""}
                />
                {/*confirm password field */}
                <input
                    type="password"
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword || ""}
                />
                {loading ? (
                    <input type="submit" value="Loading..." disabled />
                ) : (
                    <input type="submit" value="Sign Up" />
                )}

                {error && <Message msg={error} type="error" />}
            </form>
            <p>
                Already have an account? <Link to="/login">Create one</Link>!
            </p>
        </div>
    )
}
