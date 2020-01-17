import React, {Component}                   from 'react'
import { scale, questions as appQuestions } from '../data'
import Question                             from './Question'
import Result                               from './Result'

// TODO: functional component with hooks
class Survey extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: appQuestions || []
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: +e.target.value // only dealing with numbers which are received as strings
    })
  }

  render() {
    const questions = appQuestions.map((item, index) => (
      <Question
        id={index}
        handleChange={this.handleChange}
        item={item}
        scale={scale}
      />
    ))
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
