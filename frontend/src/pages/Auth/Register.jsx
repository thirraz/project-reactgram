import './Auth.css'

//Components
import { Link } from 'react-router-dom'

//Hooks
import { useState, useEffect } from 'react'

export const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name,
            email,
            password,
            confirmPassword,
        }
        console.log(user)
    }

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
                    value={name || ''} //
                />
                {/*e-mail field */}
                <input
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email || ''}
                />
                {/*password field */}
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password || ''}
                />
                {/*confirm password field */}
                <input
                    type="password"
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword || ''}
                />
                <input type="submit" value="Sign Up" />
            </form>
            <p>
                Already have an account? <Link to="/login">Create one</Link>!
            </p>
        </div>
    )
}
