import axios from 'axios'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'
export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM'

const URL = 'https://api.giphy.com/v1/gifs/search'
const APIKey = 'RSH5xuo5XmBl7hKvM0LCc1ffdTeUsOIW'

export const getGifs = (searchTerm) => {

    searchTerm = searchTerm.replaceAll(' ', '+')
    return( dispatch => {
        dispatch(fetchStart())
        axios.get(`${URL}?api_key=${APIKey}&q=${searchTerm}`)
        .then(res => {
            dispatch(fetchSuccess(res.data.data))
        })
        .catch(err => {
            dispatch(fetchFail(err))
        })
    })
}

export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = (gifs) => {
    return({type: FETCH_SUCCESS, payload: gifs})
}

export const fetchFail = (error) => {
    error = error.toString()
    console.log(error)

    const errorRegex = /status code (\d+)/
    const statusCode = typeof error === 'string' ? error.match(errorRegex)?.[1] : error?.status

    const errorCodes = {
        '400': 'Bad Request',
        '401': 'Unauthorized',
        '403': 'Forbidden',
        '404': 'Not Found',
        '500': 'Internal Server Error',
        '502': 'Bad Gateway',
        '503': 'Service Unavailable'
    }

    let err = 'Unknown'

    if(statusCode !== null && errorCodes[statusCode]) err = errorCodes[statusCode]

    return({type: FETCH_FAIL, payload: err})
}

export const changeSearch = (entry) => {
    return({type: CHANGE_SEARCH_TERM, payload: entry})
}