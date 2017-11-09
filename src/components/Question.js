import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const Question = props => {
  const buttons = props.scale.map((item, index) => (
    <RadioButton
      key={index}
      value={index + 1}
      label={index + 1}
      onClick={props.handleChange}
      style={{
        display: 'inline-block',
        width: '40px',
        margin: '20px 10px',
      }}
    />
  ))
  return (
    <li key={props.id}>
      {props.item}
      <RadioButtonGroup
        name={'scale' + props.id}
      >
        {buttons}
      </RadioButtonGroup>
    </li>
  )
}

export default Question

{/* <RadioButton
  key={index}
  value={item}
  label={item}
  onClick={props.handleChange}
  style={{
    width: "auto"
  }}
/> */}

{/* <RadioButtonGroup
  name={'scale' + props.id}
  labelPosition="left"
  style={{
    display: "flex",
    flexDirection: "row"
  }}
> */}
