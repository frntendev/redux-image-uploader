/**
 * Created by S.Aliakbari on 6/28/2017.
 */
export const ADD_IMAGE = 'ADD_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const addImage = request => dispatch => {
    dispatch({
        type: ADD_IMAGE,
        payload: request
    })
};
export const removeImage = request => dispatch => {
    dispatch({
        type: REMOVE_IMAGE,
        payload: request
    })
};