import "./Profile.css"

import { uploads } from "../../utils/config"

//Components
import { Message } from "../../components/Message/Message"
import { Link } from "react-router-dom"
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs"

//Hook
import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

//Redux
import { getUserDetails } from "../../slices/userSlice"

export const Profile = () => {
    const { id } = useParams()

    const dispatch = useDispatch()

    const { user, loading } = useSelector((state) => state.user)
    const { user: userAuth } = useSelector((state) => state.auth)

    //New form and edit form refs
    const newPhotoForm = useRef()
    const editPhotoForm = useRef()

    //Load user data
    useEffect(() => {
        dispatch(getUserDetails(id))
    }, [dispatch, id])

    const handleSubmit = (e) => {
        e.prevendDefault()
    }

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="profile">
            <section className="profile-header">
                {user.profileImage && (
                    <img
                        src={`${uploads}/users/${user.profileImage}`}
                        alt={user.name}
                    />
                )}
                <div className="profile-description">
                    <h1>{user.name}</h1>
                    <p>{user.bio}</p>
                </div>
            </section>
            {id === userAuth._id && (
                <>
                    <div className="new-photo" ref={newPhotoForm}>
                        <h3>Share your best moments!</h3>
                        <form onSubmit={handleSubmit}>
                            <label>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <span>Photo's Title</span>
                                <input
                                    type="text"
                                    placeholder="Type title here"
                                />
                            </label>
                            <label>
                                <span>Image:</span>
                                <input type="file" />
                            </label>
                            <input type="submit" value="Post" />
                        </form>
                    </div>
                </>
            )}
        </div>
    )
}
