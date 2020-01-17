import React     from 'react'
import { scale } from '../data'

const Description = () => (
  <React.Fragment>
    <h3>Description</h3>
    <p>
      The MAAS is a 15-item scale designed to assess a core characteristic of dispositional mindfulness, namely, open or receptive awareness of and attention to what is taking place in the present. The scale shows strong psychometric properties and has been validated with college, community, and cancer patient samples. Correlational, quasi-experimental, and laboratory studies have shown that the MAAS taps a unique quality of consciousness that is related to, and predictive of, a variety of self-regulation and well-being constructs. The measure takes 10 minutes or less to complete.
    </p>
    <h3>Day-to-Day Experiences</h3>
    <p>
      <strong><em>Instructions:</em></strong> Below is a collection of statements about your everyday experience. Using the 1-6 scale below, please indicate how frequently or infrequently you currently have each experience. Please answer according to what really reflects your experience rather than what you think your experience should be. Please treat each item separately from every other item.
    </p>
    <ol>
      {scale.map((item, idx) => <li key={idx}>{item}</li>)}
    </ol>
  </React.Fragment>
)

export default Description