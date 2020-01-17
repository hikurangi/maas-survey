import React, { useState }  from 'react'
import { scale, questions } from '../data'
import Question             from './Question'
import Result               from './Result'

const Survey = () => {

  const [state, setState] = useState({})

  function handleChange (e) {
    setState({
      ...state,
      [e.target.name]: parseInt(e.target.value, 10)
    })
  }

  const answers = Object.values(state)

  return (
    <div>
      <ol>
        {
          questions.map((item, index) => (
            <Question
              id={index}
              handleChange={handleChange}
              item={item}
              scale={scale}
            />
          ))
        }
      </ol>
      <Result answers={answers} />
    </div>
  )
}

export default Survey
