import React, {Component} from 'react'
import data from '../data/data'

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const questions = data.map((item, index) => (
      <li key={index} id={index}>
        {item}
      </li>
    ))
    return (
      <ol>
        {questions}
      </ol>
    )
  }
}

export default Survey
