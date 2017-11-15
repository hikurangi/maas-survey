import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const style = {
  questionStyle: {
    display: 'inline-block',
    width: '40px',
    margin: '20px 10px',
  }
}

const Question = props => {
  const buttons = props.scale.map((item, index, array) => {
    let label = ''
    if (index === 0) {
      label += 'Almost Always'
    } else if (index === array.length - 1) {
      label += 'Almost Never'
    } // better as a hover label? should be mobile friendly
    return (
      <RadioButton
        key={index}
        value={index + 1}
        label={index + 1 + ' ' + label}
        onClick={props.handleChange}
        style={style.questionStyle}
      />
    )
  })
  return (
    <li key={props.id}>
      {props.item}
      <RadioButtonGroup name={'scale' + props.id}>
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
