import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, CHANGE_SEARCH_TERM, getGifs } from '../actions'

const initialState = {
    gifs: [],
    loading: false,
    error: '',
    search: 'coding'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                gifs: action.payload,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        case CHANGE_SEARCH_TERM:
            return {
                ...state,
                loading: false,
                error: '',
                search: action.payload
            }
        default:
            return state
    }
}

export default reducer