import axios from 'axios'

const axiosGet = async (url, token, wstoken) => {
    const headers = {
        Authorization: token,
        Accept: 'application/json'
    }
    const response = await axios(
        {
            method: 'GET',
            url,
            headers: {
                ...headers,
                ...(wstoken ? { WSToken: wstoken } : {})
            }
        }
    )

    return response
}

const axiosPost = async (url, token, data, wstoken)  => {
    const headers = {
        Authorization: token,
        Accept: 'application/json'
    }
    const response = await axios(
        {
            method: 'POST',
            url,
            headers: {
                ...headers,
                ...(wstoken ? { WSToken: wstoken } : {})
            },
            data: data || { }
        }
    )

    return response
}

const axiosPut = async (url, token, data, wstoken) => {
    const headers = {
        Authorization: token,
        Accept: 'application/json'
    }
    const response = await axios(
        {
            method: 'PUT',
            url,
            headers: {
                ...headers,
                ...(wstoken ? { WSToken: wstoken } : {})
            },
            data: data || { }
        }
    )

    return response
}

const axiosDelete = async (url, token, wstoken) => {
    const headers = {
        Authorization: token,
        Accept: 'application/json'
    }
    const response = await axios(
        {
            method: 'DELETE',
            url,
            headers: {
                ...headers,
                ...(wstoken ? { WSToken: wstoken } : {})
            }
        }
    )

    return response
}

export { axiosGet, axiosPost, axiosPut, axiosDelete }