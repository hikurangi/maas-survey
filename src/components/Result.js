import React         from 'react'
import { questions } from '../data'

const Result = ({ answers }) => {
  const liveScore      = answers.reduce((a, b) => a + b, 0) / answers.length
  
  // if score is a whole integer
  const formattedScore = Math.floor(liveScore) === liveScore
    ? liveScore // just print it
    : liveScore.toFixed(2) // otherwise round nicely for presentation

  return answers.length === questions.length
    ? <h1>Your MAAS Score is {formattedScore}</h1>
    : null

}

export default Result
