import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/types'

const initialState = {
    loading: true,
    data: [],
    error: ''
};

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                data: action.payload,
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            };
        default:
            return state;
    }
};