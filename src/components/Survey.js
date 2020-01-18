import { Box }             from '@material-ui/core'
import React, { useState } from 'react'
import { questions }       from '../data'
import Question            from './Question'
import Result              from './Result'

const Survey = () => {

  const [state, setState] = useState({})

  function handleChange (e) {
    console.log({targetName: e.target.name, targetValue: e.target.value})
    setState({
      ...state,
      [e.target.name]: parseInt(e.target.value, 10)
    })
  }

  const answers = Object.values(state)
  console.log({state, answers})

  return (
    <Box component='article'>
      <ol>
        {
          questions.map((item, index) => {
            // index just in an array!
            const name = 'scale' + index // TODO: unnecessary
            const value = state[name] || ''

            return (
              <Question
                item={item}
                index={index}
                value={value}
                name={name}
                handleChange={handleChange}
              />
            )

          })
        }
      </ol>
      <Result answers={answers} />
    </Box>
  )
}

export default Survey