import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import data from '../data/data'
import Question from './Question'
import Result from './Result'

class Survey extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: +e.target.value // only dealing with numbers which are received as strings
    })
  }

  render() {
    console.log({
      'data in state': this.state.data,
      'data.length': this.state.data.length
    });
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
    const stateValues = Object.values(this.state).filter(item => !Array.isArray(item))
    return (
      <div>
        <ol>
          {questions}
        </ol>
        <Result
          values={stateValues}
          dataLength={this.state.data.length}
        />
      </div>
    )
  }
}

export default Survey
