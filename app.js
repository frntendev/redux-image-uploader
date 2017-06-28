/**
 * Created by S.Aliakbari on 6/28/2017.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/config/storeConfig'
import FileUploadContainer from './containers/FileUploadContainer';
ReactDOM.render(
    <Provider store={store}>
        <FileUploadContainer />
    </Provider>,
    document.getElementById('app')
);