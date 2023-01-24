import React, { Component } from 'react';
import './App.css';
import ParticlesBg from 'particles-bg'
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
window.process = {}

const app = new Clarifai.App({
  apiKey: 'e7139a179fda45d4b25f46a09fdd3ad9'
});

class App extends Component {
  constructor(){
    super(); 
      this.state = {
        input: '',
        imgURL: ''
      }
    };

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imgURL: this.state.input});
    app.models
      .predict(
        {
          id: 'face-detection',
          name: 'face-detection',
          version: '6dc7e46bc9124c5c8824be4822abe105',
          type: 'visual-detector',
        }, this.state.input
        ).then(
          function(response){
            console.log(response)
          },
          function(err){
            console.log(err)
          }
        )
console.log(this.state.imgURL);
  }

  render() {
    return(
    <div className="App">
      
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onButtonSubmit={this.onButtonSubmit} onInputChange={this.onInputChange}/>
      <ParticlesBg type="lines" bg={true}/>
      <FaceRecognition imgURL={this.state.imgURL}/>
    </div>
  );}
}

export default App;
