import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function App({data}) {
  return (
    <div className="container-fluid">
      <Picture {...data}/>
    </div>
  );
}

function Picture({image}) {
  return (
    <div className="row">
      <div className="col-10 offset-1">
        <h1>{image.text}</h1>
        <img src={image.imageUrl} className="image" alt="image"/>
      </div>
    </div>
  )
}

export default App;
