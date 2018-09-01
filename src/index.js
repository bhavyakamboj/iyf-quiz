import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from './reducers';
import Details from './components/Details';
import Quiz from './containers/Quiz';
import Welcome from './components/Welcome';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)} >
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/quiz/" component={Quiz}/>
          <Route path="/details" component={Details}/>
          <Route path="/" component={Welcome}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'));
registerServiceWorker();
