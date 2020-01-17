import React                             from 'react'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

const style = {
  questionStyle: {
    display: 'inline-block',
    width: '40px',
    margin: '20px 10px',
  }
}

const Question = ({
  scale,
  handleChange,
  id,
  item
}) => {
  return (
    <li key={id}>
      {item}
      <RadioButtonGroup name={'scale-' + id}>
        {
          scale.map((item, index, array) => {

            const displayIndex = index + 1
            
            // lazy string coercion
            const label = ''
              + displayIndex
              + ' '
              + getLabelDescription({ index, array })
            
            return (
              <RadioButton
                key={index}
                value={displayIndex}
                label={label}
                onClick={handleChange}
                style={style.questionStyle}
              />
            )
          })
        }
      </RadioButtonGroup>
    </li>
  )
  
}

export default Question

function getLabelDescription ({ index, array }) {
  if (index === 0) {
    return 'Almost Always'

  } else if (index === array.length - 1) {
    return 'Almost Never'
  
  } else {
    return ''
  
  }
}