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
    const { prefix, id, name, required, className, maxLength, placeholder, readOnly, disabled } = this.props;
    const { value } = this.state;

    const classes = classNames(
      prefix && `${prefix}`, 
      className,
      { disabled: disabled }
    );

    return (
      <input type="text" 
        id={id}
        className={classes}
        name={name}
        required={required}
        maxLength={maxLength}
        value={value}
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
  prefix: 'form-control',
  disabled: false,
  name: 'input',
  size: 10,
  required: false,
  maxLength: 100,
  placeholder: 'placeholder',
  readOnly: false,
  value: '',
  onChange: () => {},
  handleBlur: () => {},
  handleKeyDown: () => {}
}

export default InputText;