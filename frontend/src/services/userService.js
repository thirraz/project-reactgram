import { api, requestConfig } from "../utils/config"

//Get user details by token
const profile = async (data, token) => {
    const config = requestConfig("GET", data, token)

    try {
        const res = await fetch(api + "/users/profile", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

//Update user details
const updateProfile = async (data, token) => {
    const config = requestConfig("PUT", data, token, true)

    try {
        const res = await fetch(api + "/users/", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

//Get user details by ID
const getUserDetails = async (id) => {
    const config = requestConfig("GET")

    try {
        const res = await fetch(api + "/users/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

export const userService = {
    profile,
    updateProfile,
    getUserDetails,
}
