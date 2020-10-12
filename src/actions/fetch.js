import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './types'

export const onFetchPhotos = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_USERS_REQUEST, payload: [] })
        try {
            fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
                .then(response => response.json())
                .then(responseJSON => {
                    dispatch({ type: FETCH_USERS_SUCCESS, payload: responseJSON });
                })
        } catch (error) {
            dispatch({ type: FETCH_USERS_FAILURE, payload: error });
        }
    }
};