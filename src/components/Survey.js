import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import data from '../data/data'
import Question from './Question'

class Survey extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleChange = e => {
    this.setState({[e.target.name] :+ e.target.value})
  }

  render() {
    const scale = [1, 2, 3, 4, 5, 6]
    const stateValues = Object.values(this.state)
    const mean = stateValues.reduce((a, b) => a + b, 0) / stateValues.length

    console.log({mean});
    const questions = data.map((item, index) => (
      <MuiThemeProvider key={index}>
        <Question id={index} handleChange={this.handleChange} item={item} scale={scale}/>
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
