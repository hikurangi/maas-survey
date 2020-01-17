import {
  Box,
  FormControl,
  FormControlLabel,
  // FormHelperText,
  // FormLabel,
  // List,
  // ListItem,
  Radio,
  RadioGroup,
}                           from '@material-ui/core'
import React, { useState }  from 'react'

import { scale, questions } from '../data'
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
  console.log({state, answers})

  return (
    <Box component='article'>
      <ol>
        {
          questions.map((item, index) => {
            const radioGroupName = 'scale' + index

            return (
              <li key={index}>
                <p>{item}</p>
                <FormControl component='fieldset'>
                  <RadioGroup
                    name={radioGroupName}
                    onChange={handleChange}
                    // value={state[radioGroupName]}
                    row
                  >
                    {
                      scale.map((item, index, array) => {
              
                        const displayIndex = index + 1
                        const label        = displayIndex + '.'
                        // const description  = getLabelDescription({ index, array })
                        
                        return (
                          <FormControlLabel
                            key={index}
                            value={displayIndex}
                            control={<Radio/>}
                            label={label}
                            labelPlacement={'start'}
                          />
                        )
                      })
                    }
                  </RadioGroup>
                </FormControl>
              </li>
            )
          })
        }
      </ol>
      <Result answers={answers} />
    </Box>
  )
}

export default Survey

// function getLabelDescription ({ index, array }) {
//   if (index === 0) {
//     return 'Almost Always'

//   } else if (index === array.length - 1) {
//     return 'Almost Never'
  
//   } else {
//     return ''
  
//   }
// }