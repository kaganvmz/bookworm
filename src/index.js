import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </div>, 
    document.getElementById('root')
);
registerServiceWorker();
