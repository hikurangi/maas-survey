import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const Question = props => {
  const buttons = props.scale.map((item, index) => (
    <RadioButton
      key={index}
      value={item}
      label={item}
      onClick={props.handleChange}
      style={{ width: "auto" }}
    />
  ))
  return (
    <li key={props.id} id={props.id}>
      {props.item}
      <RadioButtonGroup
        name={'scale' + props.id}
        labelPosition="left"
        style={{ display: "flex" }}
      >
        {buttons}
      </RadioButtonGroup>
    </li>
  )
}

export default Question
