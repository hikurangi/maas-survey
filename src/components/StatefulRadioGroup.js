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
} from '@material-ui/core'
import React, { useState }  from 'react'
import { scale, questions } from '../data'

const StatefulRadioGroup = ({
  item,
  index,
  setSurveyState = surveyState => console.log({surveyState})
}) => {
  // takeaway is to initialise state properly first
  const [state, setState] = useState('') 

  function handleChange (e) {
    const stateChange = e.target.value
    console.log({targetName: e.target.name, targetValue: e.target.value})
    setSurveyState(stateChange)
    setState(parseInt(stateChange, 10))
  }

  const radioGroupName = 'scale' + index

  return (
    <li key={index}>
      <p>{item}</p>
      <FormControl component='fieldset'>
        <RadioGroup
          name={radioGroupName}
          onChange={handleChange}
          // defaultValue={null}
          value={state}
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
}

export default StatefulRadioGroup