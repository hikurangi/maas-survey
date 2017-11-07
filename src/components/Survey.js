import React, {Component} from 'react'
import data from '../data/data'

class Survey extends Component {
  render() {
    const questions = data.map((item, index) => (
      <li key={index}>
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
