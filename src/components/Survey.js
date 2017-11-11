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
    this.setState({
      [e.target.name]: e.target.value // new syntax - ES6 Computed Property Names
    })
  }

  render() {
    console.log({data, 'data.length': data.length});
    const questions = data.map((item, index) => (
      <MuiThemeProvider key={index}>
        <Question
          id={index}
          handleChange={this.handleChange}
          item={item}
          scale={this.props.scale}
        />
      </MuiThemeProvider>
    )) // perhaps the MuiThemeProvider should wrap Survey rather than individually wrapping multiple Question components - requires more research
    const stateValues = Object.values(this.state)
    const mean = stateValues.reduce((a, b) => a + b, 0) / stateValues.length
    const result = (stateValues.length === data.length) && mean && <h1>Your MAAS Score is {mean.toFixed(2)}</h1>

    return (
      <div>
        <ol>
          {questions}
        </ol>
        {result}
      </div>
    )

  }
}

export default Survey
