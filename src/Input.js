import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  handleChange() {
    this.setState({
      value: this.state.value
    })
  }

  render() {
    const {
      className,
      name,
      required,
      size,
      maxLength,
      value,
      placeholder } = this.props;

    return (
      <input type="text" 
        className={className}
        name={name}
        required={required}
        size={size}
        maxLength={maxLength}
        value={value}
        placeholder={placeholder}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange} />
    )
  }
}

Input.defaultProps = {
  className: '',
  name: 'input',
  size: 10,
  required: false,
  maxLength: 100,
  placeholder: 'placeholder',
  value: '',
  handleChange: () => {},
  handleBlur: () => {},
  handleKeyDown: () => {}
}

export default Input;