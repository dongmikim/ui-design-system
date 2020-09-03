import React, { Component } from 'react';
import classNames from "classnames";
import './styles/style.scss';

class InputText extends Component {
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
    const { type, prefix, id, name, size, required, className, maxLength, placeholder, readOnly, disabled } = this.props;
    const { value } = this.state;

    const classes = classNames(
      prefix && `${prefix}`, 
      size ? `${prefix}-${size}` : false,
      className,
      { disabled: disabled }
    );

    return (
      <input type={type} 
        id={id}
        className={classes}
        name={name}
        maxLength={maxLength}
        value={value}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        onChange={this._onChange} />
    )
  }
}

InputText.defaultProps = {
  type: 'text',
  prefix: 'form-control',
  disabled: false,
  name: 'input',
  size: '',
  required: false,
  maxLength: 100,
  placeholder: '',
  readOnly: false,
  value: '',
  onChange: () => {},
  handleBlur: () => {},
  handleKeyDown: () => {}
}

export default InputText;