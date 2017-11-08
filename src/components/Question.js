import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const Question = props => {
  const buttons = [1, 2, 3, 4, 5, 6].map((item, index) => (
    <RadioButton
      key={index}
      value={index + 1}
      label={index + 1}
      onClick={props.handleChange}
      style={{ width: "auto" }}
    />
  ))
  return (
    <li key={props.id} id={props.id}>
      {props.item}
      <RadioButtonGroup
        name="scale"
        labelPosition="left"
        style={{ display: "flex" }}
      >
        {buttons}
      </RadioButtonGroup>
    </li>
  )
}

export default Question
