import React, { Component } from 'react';
import classNames from "classnames";
import './assets/styles/style.scss';

class Button extends Component {
  render() {
    const {
      type,
      id,
      disabled,
      text,
      onClick,
      className,
      prefix,
      color,
      active,
      block,
      size,
      width,
      ...attributes
    } = this.props;

    const classes = classNames(
      prefix && `${prefix}`, 
      size ? `${prefix}-${size}` : false,
      width ? `${prefix}-${size}` : false,
      color ? `${prefix}-${color}` : false,
      block ? "btn-block" : false,
      className,
      { active, disabled: disabled }
    );

    return (
      <button
        type={type} 
        id={id}
        className={classes}
        disabled={disabled}
        onClick={onClick}
        {...attributes}
      >
        <span>{text}</span>
      </button>  
    )
  }
}

Button.defaultProps = {
  prefix: "btn",
  color: '',
  size: 'md',
  width: '',
  id: '',
  type: 'button',
  text: '',
  disabled: false,
  style: {},
  onClick: () => {console.log('Button clicked.')}
}

export default Button;