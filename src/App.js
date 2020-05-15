import React from 'react'

import Input from './components/Form/Input'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {
        number1: {
          label: 'Enter First Number',
          config: {
            id: 'Text1',
            type: 'text',
          },
          value: '',
          validation: {
            required: true,
            isNumeric: true,
          },
          valid: false,
        },
        number2: {
          label: 'Enter Second Number',
          config: {
            id: 'Text2',
            type: 'text',
          },
          value: '',
          validation: {
            required: true,
            isNumeric: true,
          },
          valid: false,
        },

        result: {
          label: 'Result',
          config: {
            id: 'txtresult',
            type: 'text',
            disabled: true,
          },
          value: '',
          validation: {
            required: true,
            isNumeric: true,
          },
          valid: true,
        },
      },
    }
  }

  checkValidity = (value, validation) => {
    let isValid = true
    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (validation.isNumeric) {
      const pattern = /^\d+$/
      isValid = pattern.test(value) && isValid
    }
    return isValid
  }

  onChange = (event, key) => {
    const field = { ...this.state.fields[key] }
    field.value = event.target.value
    field.valid = this.checkValidity(field.value, field.validation)
    const { fields } = this.state
    fields[key] = field
    this.setState({ fields })
  }

  displayResult = () => {
    const { fields } = this.state
    fields.result.value =
      parseInt(fields.number1.value) + parseInt(fields.number2.value)
    this.setState({ fields })
  }

  render() {
    const { fields } = this.state
    let isDisplayEnabled = true
    Object.keys(fields).forEach(key => {
      isDisplayEnabled = fields[key].valid && isDisplayEnabled
    })
    return (
      <div>
        <h2>Welcome React</h2>
        {Object.keys(fields).map((key, index) => (
          <div>
            <Input
              key={index}
              changed={event => this.onChange(event, key)}
              {...fields[key]}
            />
            <br />
          </div>
        ))}
        <button
          name="clickbtn"
          onClick={this.displayResult}
          disabled={!isDisplayEnabled}
        >
          Display Result{' '}
        </button>
      </div>
    )
  }
}

export default App
