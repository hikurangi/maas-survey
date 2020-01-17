import React      from 'react'
import Radio      from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

const Question = ({
  scale,
  handleChange,
  id,
  item
}) => (
  <li key={id}>
    {item}
    <RadioGroup name={'scale-' + id}>
      {
        scale.map((item, index, array) => {

          const displayIndex = index + 1
          
          // lazy string coercion
          const label = ''
            + displayIndex
            + ' '
            + getLabelDescription({ index, array })
          
          return (
            <Radio
              key={index}
              value={displayIndex}
              label={label}
              onClick={handleChange}
            />
          )
        })
      }
    </RadioGroup>
  </li>
)

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