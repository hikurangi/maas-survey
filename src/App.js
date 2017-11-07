import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Survey from './components/Survey'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Mindful Attention Awareness Scale</h1>
        </header>
        <p className="App-intro">
          The MAAS is a 15-item scale designed to assess a core characteristic of dispositional mindfulness, namely, open or receptive awareness of and attention to what is taking place in the present. The scale shows strong psychometric properties and has been validated with college, community, and cancer patient samples. Correlational, quasi-experimental, and laboratory studies have shown that the MAAS taps a unique quality of consciousness that is related to, and predictive of, a variety of self-regulation and well-being constructs. The measure takes 10 minutes or less to complete.
        </p>
        <Survey />
      </div>
    );
  }
}

export default App;
