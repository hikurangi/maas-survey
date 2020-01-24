import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@material-ui/core'
import React from 'react'

import { scale } from '../data'

const Question = ({ handleChange, index, item, name, value }) => (
  <li key={index}>
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
      mb="8"
    >
      <FormControl component="fieldset">
        <FormLabel component="legend">{item}</FormLabel>
        <RadioGroup
          name={name}
          onChange={handleChange}
          defaultValue={''}
          value={value}
          row
        >
          {scale.map((item, index, array) => {
            const displayIndex = index + 1
            const isFirst = index === 0
            const isLast = index === array.length - 1
            const label = isFirst
              ? 'Almost Always'
              : isLast
              ? 'Almost Never'
              : ''
            const labelPlacement = isLast ? 'end' : 'start'
            const radioComponent = isLast ? (
              <Radio style={{ marginLeft: '27px' }} />
            ) : (
              <Radio />
            )

            return (
              <FormControlLabel
                key={index}
                value={displayIndex}
                control={radioComponent}
                label={label}
                labelPlacement={labelPlacement}
              />
            )
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  </li>
)

export default Question
