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
    const questions = data.map((item, index) => (
      <Question
        id={index}
        handleChange={this.handleChange}
        item={item}
        scale={this.props.scale}
      />
    ))
    const stateValues = Object.values(this.state).filter(item => !Array.isArray(item))
    return (
      <div>
        <ol>
          <MuiThemeProvider>
            {questions}
          </MuiThemeProvider>
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
