import React from 'react';
import {shuffle, sample, reject} from 'underscore';
import Confetti from 'react-dom-confetti'
import './App.css';
import './bootstrap.min.css';

const confettiConfig = {
  angle: 45,
  spread: 100,
  startVelocity: 60,
  elementCount: 200,
  decay: 0.8
};

const Picture = (props) => {
  const images = [
    {
        text: "SPAGHETTI",
        imageUrl: "https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b62378793198b7e3934d04f96dac9e3e&auto=format&fit=crop&w=1050&q=80"
    },
    {
        text: "KAKA",
        imageUrl: "https://images.unsplash.com/photo-1520406089332-69976b2722f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d97b705c518eb888f833401e69f42b77&auto=format&fit=crop&w=1049&q=80"
    },
    {
        text: "KO",
        imageUrl: "https://images.unsplash.com/photo-1467217322460-5f03dc33a28e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fd8c223fa37d553ad9c792186bf3a9a3&auto=format&fit=crop&w=1950&q=80"
    },
    {
        text: "SÄL",
        imageUrl: "https://images.unsplash.com/photo-1447675702052-663a7ef9eaa6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=beb1461e41cbccf1bf1d3fbf816c420a&auto=format&fit=crop&w=1350&q=80"
    },
    {
        text: "KOMPIS",
        imageUrl: "https://images.unsplash.com/photo-1488956322016-1e7554142097?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ef40c653843b0f89434252f8671bdca&auto=format&fit=crop&w=1350&q=80"
    },
    {
        text: "SPARKA",
        imageUrl: "https://images.unsplash.com/photo-1476525223214-c31ff100e1ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6a868144e4ef4fb580b12aaa8010fc76&auto=format&fit=crop&w=1350&q=80"
    },
    {
        text: "SIMMA",
        imageUrl: "https://images.unsplash.com/photo-1506322845680-6e3e1a5b1de1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cce7bb6598e36e284720a0799bab43da&auto=format&fit=crop&w=969&q=80"
    },
      {
        text: "SPEL",
        imageUrl: "https://images.unsplash.com/photo-1515600467781-911b35a7e539?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=017b5199627fe076e2e1c0ea21e29c19&auto=format&fit=crop&w=1350&q=80"
    },
    {
        text: "SNABEL",
        imageUrl: "https://images.unsplash.com/photo-1526824814752-c87997cd2c71?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83c1acde8f942f890a99d1c6190e2323&auto=format&fit=crop&w=1000&q=80"
    },
    {
        text: "SNÖ",
        imageUrl: "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a2ecb093c96c69ec20be4729219c081&auto=format&fit=crop&w=1350&q=80"
    },
  ];

  const filteredImages = reject(images, function(img) { return props.usedPictures.indexOf(img.text) !== -1 })

  const picture = sample(shuffle(filteredImages).slice(0,1));
  
  return (
    <div className="text-center" onClick={() => props.selectPicture(picture.text)}>
      <h1>{picture.text}</h1>
      <img src={picture.imageUrl} className="image" alt="randomImage"/>
    </div>
  )
}

const WinFrame = (props) => {
  return (
    <div className="text-center">
      <h1>{props.winStatus}</h1>
      <br />
      <button className="btn btn-secondary" onClick={props.resetGame}>
        Spela igen
      </button>
    </div>
  )
}

class Game extends React.Component {
  static initialState = () => ({
    usedPictures: [],
    winStatus: null,
    goConfetti: false,
  });
  state = Game.initialState();

  resetGame = () => {
    this.setState(Game.initialState())
  };
  
  updateWinStatus = () => {
    this.setState(prevState => {
      if (prevState.usedPictures.length === 9) {
        return { winStatus: 'Bra jobbat', goConfetti: true };
      }
    });
  };

  selectPicture = (clickedPicture) => {
    this.setState(prevState => ({
      usedPictures: prevState.usedPictures.concat(clickedPicture)
    }), this.updateWinStatus);
  };

  render() {
    const {winStatus, goConfetti} = this.state;
    return (
      <React.Fragment>
      <div className="row">
        <div className="col-10 offset-1">
        {winStatus ?
          <WinFrame resetGame={this.resetGame} winStatus={winStatus} /> : 
          <Picture  usedPictures={this.state.usedPictures}
          selectPicture={this.selectPicture} />
        }
        </div>
      </div>
      <div className="row">
        <div className="text-center">
          <Confetti active={ goConfetti } config= { confettiConfig } />
        </div>
      </div>
      </React.Fragment>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Game />
      </div>
    )
  }
}

export default App;
