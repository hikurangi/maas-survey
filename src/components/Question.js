import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const Question = props => {
  const buttons = [1, 2, 3, 4, 5, 6].map((item, index) => (
    <RadioButton
      value={index}
      label={index}
      onChange={props.handleChange}
      className="radio-button"
    />
  ))
  return (
    <li key={props.id} id={props.id}>
      {props.item}
      <RadioButtonGroup
        name="scale"
        labelPosition="left"
        className="radio-button-group"
      >
        {buttons}
      </RadioButtonGroup>
    </li>
  )
}

export default Question
