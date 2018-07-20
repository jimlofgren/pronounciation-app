import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const images = [
    {
        text: "sparka",
        imageUrl: "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_960_720.jpg"
    },
    {
        text: "spaghetti",
        imageUrl: "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg"
    }
];

const state = {
    data: {
        image: images[1]
    }
};

ReactDOM.render(<App {...state}/>, document.getElementById('root'));
registerServiceWorker();
