/**
 * Created by S.Aliakbari on 6/28/2017.
 */
import {createStore,applyMiddleware} from 'redux';
import appReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export const store = configureStore();
console.log(store.getState());
export function configureStore(initialState) {
    const store = createStoreWithMiddleware(
        appReducer,
    );
    return store;
}
