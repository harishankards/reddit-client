import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory} from 'react-router';

import './index.css';
import App from './App';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes history = {browserHistory} />,
 document.getElementById('root'));
registerServiceWorker();
