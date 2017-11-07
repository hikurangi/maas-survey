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
        <section className="survey-body">
          <h3 className="subheading">Description</h3>
          <p className="App-intro">
            The MAAS is a 15-item scale designed to assess a core characteristic of dispositional mindfulness, namely, open or receptive awareness of and attention to what is taking place in the present. The scale shows strong psychometric properties and has been validated with college, community, and cancer patient samples. Correlational, quasi-experimental, and laboratory studies have shown that the MAAS taps a unique quality of consciousness that is related to, and predictive of, a variety of self-regulation and well-being constructs. The measure takes 10 minutes or less to complete.
          </p>
          <h3 className="subheading">Day-to-Day Experiences</h3>
          <p>
            <strong><em>Instructions:</em></strong> Below is a collection of statements about your everyday experience. Using the 1-6 scale below, please indicate how frequently or infrequently you currently have each experience. Please answer according to what really reflects your experience rather than what you think your experience should be. Please treat each item separately from every other item.
          </p>
          <table className="scale-table">
            <tr>
              <td>1 Almost Always</td>
              <td>2 Very Frequently</td>
              <td>3 Somewhat Frequently</td>
              <td>4 Somewhat Infrequently</td>
              <td>5 Very Infrequently</td>
              <td>6 Almost Never</td>
            </tr>
          </table>
          <Survey/>
        </section>
      </div>
    );
  }
}

export default App;
