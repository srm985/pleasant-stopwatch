import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const startApplication = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
};

if (!window.cordova) {
    startApplication();
} else {
    document.addEventListener('deviceready', startApplication, false);
}

if (module.hot) {
    module.hot.accept();
}
