import React     from 'react'
import { scale } from '../data'
import Survey    from './Survey'

const scaleList = scale.map((item, index) => <li key={index}>{item}</li>)

const Layout = () => {

  // TODO: format layout nicely
  return (
    <>
      <header className="App-header">
        <img alt="Ovio" src="http://ovio.co.nz/wp-content/uploads/2016/09/ovio-logo.png"/>
        <h1 className="App-title">Mindful Attention Awareness Scale</h1>
        <h3 className="subheading">created by Kirk Warren Brown, PhD & Richard M. Ryan, PhD</h3>
      </header>
      <main className="survey-body">
        <h3 className="subheading">Description</h3>
        <p className="App-intro">
          The MAAS is a 15-item scale designed to assess a core characteristic of dispositional mindfulness, namely, open or receptive awareness of and attention to what is taking place in the present. The scale shows strong psychometric properties and has been validated with college, community, and cancer patient samples. Correlational, quasi-experimental, and laboratory studies have shown that the MAAS taps a unique quality of consciousness that is related to, and predictive of, a variety of self-regulation and well-being constructs. The measure takes 10 minutes or less to complete.
        </p>
        <h3 className="subheading">Day-to-Day Experiences</h3>
        <p>
          <strong><em>Instructions:</em></strong> Below is a collection of statements about your everyday experience. Using the 1-6 scale below, please indicate how frequently or infrequently you currently have each experience. Please answer according to what really reflects your experience rather than what you think your experience should be. Please treat each item separately from every other item.
        </p>
        <ol className="scale-list">
          {scaleList}
        </ol>
        <Survey />
      </main>
    </>
  )
}

export default Layout