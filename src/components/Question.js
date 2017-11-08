import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const Question = props => {
  const scale = [1, 2, 3, 4, 5, 6] // can be abstracted further. Use this value to divide total score by for mean value.
  const buttons = scale.map((item, index) => (
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
