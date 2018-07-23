import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample} from 'underscore';

const images = [
    {
        text: "spaghetti",
        imageUrl: "https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b62378793198b7e3934d04f96dac9e3e&auto=format&fit=crop&w=1050&q=80"
    },
    {
        text: "kaka",
        imageUrl: "https://images.unsplash.com/photo-1520406089332-69976b2722f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d97b705c518eb888f833401e69f42b77&auto=format&fit=crop&w=1049&q=80"
    },
    {
        text: "ko",
        imageUrl: "https://images.unsplash.com/photo-1467217322460-5f03dc33a28e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fd8c223fa37d553ad9c792186bf3a9a3&auto=format&fit=crop&w=1950&q=80"
    },
    {
        text: "simma",
        imageUrl: "https://images.unsplash.com/photo-1506322845680-6e3e1a5b1de1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cce7bb6598e36e284720a0799bab43da&auto=format&fit=crop&w=969&q=80"
    },
];

function getGameData(images) {
    const randomImages = shuffle(images).slice(0,1);
    const randomImage = sample(randomImages);

    return randomImage
}

const state = {
    data: {
        image: getGameData(images)
    }
};

ReactDOM.render(<App {...state}/>, document.getElementById('root'));
registerServiceWorker();
