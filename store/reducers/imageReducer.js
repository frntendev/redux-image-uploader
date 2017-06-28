/**
 * Created by S.Aliakbari on 6/28/2017.
 */
import {ADD_IMAGE, REMOVE_IMAGE} from '../../actions/imageActions';

export const images = (state = [], action) => {
    switch (action.type) {
        case ADD_IMAGE: {
            return [
                ...state,
                action.payload
            ];
        }
        case REMOVE_IMAGE: {
            return state.filter((item, index) => index !== action.payload);
        }
        default:
            return state;
    }
};