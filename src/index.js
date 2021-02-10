import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Contetn-type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log("INTERCEPTOR-REQUEST");
    console.log(request);
    //Edit request config
    return request;
}, error => {
    console.log("INTERCEPTOR-REQUEST-ERROR");
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log("INTERCEPTOR-RESPONSE");
    console.log(response);
    //Edit request config
    return response;
}, error => {
    console.log("INTERCEPTOR-RESPONSE-ERROR");
    console.log(error);
    return Promise.reject(error);
});

//REMOVING INTERCEPTORS
// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
