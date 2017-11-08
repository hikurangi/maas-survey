import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import data from '../data/data'
import Question from './Question'

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const questions = data.map((item, index) => (
      <MuiThemeProvider>
        <Question key={index} id={index}>
          {item}
        </Question>
      </MuiThemeProvider>
    ))
    return (
      <ol>
        {questions}
      </ol>
    )
  }
}

export default Survey
