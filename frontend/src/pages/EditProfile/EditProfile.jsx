import "./EditProfile.css"

import { uploads } from "../../utils/config"

//Hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

//Redux
import { profile, updateProfile, resetMessage } from "../../slices/userSlice"

//Components
import { Message } from "../../components/Message/Message"

export const EditProfile = () => {
    const dispatch = useDispatch()

    const { user, message, error, loading } = useSelector((state) => state.user)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [bio, setBio] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    // Load user data
    useEffect(() => {
        dispatch(profile())
    }, [dispatch])

    // fill user form
    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
            setBio(user.bio)
        }
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Gather user data from states
        const userData = {
            name,
        }

        if (profileImage) {
            userData.profileImage = profileImage
        }

        if (bio) {
            userData.bio = bio
        }

        if (password) {
            userData.password = password
        }

        // build form data
        const formData = new FormData()

        Object.keys(userData).forEach((key) =>
            formData.append(key, userData[key]),
        )
        dispatch(updateProfile(formData))

        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)
    }

    const handleFile = (e) => {
        // image preview
        const image = e.target.files[0]

        setPreviewImage(image)

        // change image state
        setProfileImage(image)
    }

    return (
        <div id="edit-profile">
            <h1>Edit your informations</h1>
            <p className="subtitle">
                Add an image to your profile and tell more about you
            </p>

            {(user.profileImage || previewImage) && (
                <img
                    className="profile-image"
                    src={
                        previewImage
                            ? URL.createObjectURL(previewImage)
                            : `${uploads}/users/${user.profilImage}`
                    }
                    alt={user.name}
                />
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name || ""}
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    disabled
                    value={email || ""}
                />
                <label>
                    <span>Profile Image</span>
                    <input type="file" onChange={handleFile} />
                </label>

                <label>
                    <span>Bio: </span>
                    <input
                        type="text"
                        placeholder="Type your biography here"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio || ""}
                    />
                </label>

                <label>
                    <span>Do you want change the password?</span>
                    <input
                        type="password"
                        placeholder="Type your new password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password || ""}
                    />
                </label>
                {loading ? (
                    <input type="submit" value="Loading..." disabled />
                ) : (
                    <input type="submit" value="Update" />
                )}
                {error && <Message msg={error} type="error" />}
                {message && <Message msg={message} type="success" />}
            </form>
        </div>
    )
}
