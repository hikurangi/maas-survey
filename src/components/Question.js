import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const Question = props => (
    <li id={props.id}>
      {props.item}
      <RadioButtonGroup>
        <RadioButton></RadioButton>
      </RadioButtonGroup>
    </li>
  )

export default Question
