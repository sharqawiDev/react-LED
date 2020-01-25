import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import './App.css';
import * as firebase from "firebase"
import { firebaseConfig } from "./credentials"

export default class App extends Component {

  state = {
    background: '#fff',

  };


  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    firebase.database().ref('/currentColor').set(color.hex.substring(1));
  };

  componentDidMount() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <SketchPicker
            color={this.state.background}
            onChangeComplete={this.handleChangeComplete}
          />
        </header>
      </div>
    );
  }

}
