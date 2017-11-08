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
    this.setState({[e.target.name]:+e.target.value}, console.log({state: this.state}))
  }

  render() {
    const questions = data.map((item, index) => (
      <MuiThemeProvider key={index}>
        <Question id={index} handleChange={this.handleChange} item={item}/>
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
