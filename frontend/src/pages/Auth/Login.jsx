import "./Auth.css"

//Hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

//Redux
import { login, reset } from "../../slices/authSlice"

//Components
import { Link } from "react-router-dom"
import { Message } from "../../components/Message/Message"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const { loading, error } = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            email,
            password,
        }

        console.log(user)

        dispatch(login(user))
    }

    //Clean all auth states
    useEffect(() => {
        dispatch(reset())
    }, [dispatch])

    return (
        <div id="login">
            <h1>ReactGram</h1>
            <p className="subtitle"> Make login to see some new things</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email || ""}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password || ""}
                />
                {loading ? (
                    <input type="submit" value="Loading..." disabled />
                ) : (
                    <input type="submit" value="Sign In" />
                )}

                {error && <Message msg={error} type="error" />}
            </form>
            <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Don't have an account?
                <br />
                <Link to="/register">Register an account</Link>!
            </p>
        </div>
    )
}
