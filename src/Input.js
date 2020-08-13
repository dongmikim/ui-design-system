import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  _onChange = e => {
    let { value } = e.target;
    this.setState({
      value: value
    })

    this.props.onChange(e, value);
  }

  render() {
    const { id, name, required, className, maxLength, placeholder, style, readOnly } = this.props;
    const { value } = this.state;

    return (
      <input type="text" 
        id={id}
        className={className}
        name={name}
        required={required}
        maxLength={maxLength}
        value={value}
        style={style}
        readOnly={readOnly}
        placeholder={placeholder}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        onChange={this._onChange} />
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
  onChange: () => {},
  handleBlur: () => {},
  handleKeyDown: () => {}
}

export default Input;