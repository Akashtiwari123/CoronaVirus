import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import reducer from "./Reducer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

function Main(){
    const store=createStore(reducer)

return(
    <div>
        <Provider store={store}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
        </Provider>
        </div>
)

}

ReactDOM.render(<Main/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();