import React from 'react'

const Input = props => {
  let inputElement = null
  const inputClasses = ['input']
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('invalid')
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      )
      break
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      )
      break
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        >
          {props.config.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      )
      break
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.config}
          value={props.value}
          onChange={props.changed}
        />
      )
  }

  return (
    <div className="input">
      <label className="label">{props.label}</label>
      {inputElement}
    </div>
  )
}

export default Input
