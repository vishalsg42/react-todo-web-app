import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Routes
import Routes from './Routes/index';

// Redux
import { Provider  } from "react-redux";
import store   from './Reducers/index';

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
