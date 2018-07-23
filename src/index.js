import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample} from 'underscore';

const images = [
    {
        text: "sparka",
        imageUrl: "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_960_720.jpg"
    },
    {
        text: "spaghetti",
        imageUrl: "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg"
    },
    {
        text: "kaka",
        imageUrl: "https://images.unsplash.com/photo-1520406089332-69976b2722f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d97b705c518eb888f833401e69f42b77&auto=format&fit=crop&w=1049&q=80"
    },
    {
        text: "ko",
        imageUrl: "https://cdn.pixabay.com/photo/2016/10/04/23/52/cow-1715829_960_720.jpg"
    },
    {
        text: "sparka",
        imageUrl: "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_960_720.jpg"
    },
    {
        text: "spaghetti",
        imageUrl: "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg"
    },
    {
        text: "kaka",
        imageUrl: "https://images.unsplash.com/photo-1520406089332-69976b2722f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d97b705c518eb888f833401e69f42b77&auto=format&fit=crop&w=1049&q=80"
    },
    {
        text: "ko",
        imageUrl: "https://cdn.pixabay.com/photo/2016/10/04/23/52/cow-1715829_960_720.jpg"
    },
    {
        text: "sparka",
        imageUrl: "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_960_720.jpg"
    },
    {
        text: "spaghetti",
        imageUrl: "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg"
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
