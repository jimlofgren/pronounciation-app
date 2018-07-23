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
        imageUrl: "https://cdn.pixabay.com/photo/2016/11/17/22/53/biscuit-1832917_960_720.jpg"
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
        imageUrl: "https://cdn.pixabay.com/photo/2016/11/17/22/53/biscuit-1832917_960_720.jpg"
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
