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
      <div className="col-2 offset-1">
        <p>{image.text}</p>
        <img src={image.imageUrl} className="image" alt="image"/>
      </div>
    </div>
  )
}

export default App;
