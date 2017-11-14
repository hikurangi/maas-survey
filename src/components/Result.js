import React from 'react'

const Result = props => {
  const mean = props.values.reduce((a, b) => a + b, 0) / props.values.length
  if (props.values.length === props.dataLength) {
    return (
      <h1>Your MAAS Score is {mean.toFixed(2)}</h1>
    )
  } else {
    return null
  }
}

export default Result
