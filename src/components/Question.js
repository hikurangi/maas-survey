import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
}                from '@material-ui/core'
import React     from 'react'

import { scale } from '../data'

const Question = ({
  handleChange,
  index,
  item,
  name,
  value,
}) => (
  <li key={index}>
    <p>{item}</p>
    <Box display="flex" flexDirection="row">
      <p>{'Almost Always'}</p>
      <FormControl component='fieldset'>
        <RadioGroup
          name={name}
          onChange={handleChange}
          defaultValue={''}
          value={value}
          row
        >
          {
            scale.map((item, index, array) => {
    
              const displayIndex = index + 1
              const label        = displayIndex + '.'
              
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
      <p>{'Almost Never'}</p>
    </Box>
  </li>
)

export default Question