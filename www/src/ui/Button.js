import React, { Component } from 'react';
import classNames from "classnames";
import './styles/style.scss';

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
      icon,
      title,
      ...attributes
    } = this.props;

    const classes = classNames(
      prefix && `${prefix}`, 
      size ? `${prefix}-${size}` : false,
      width ? `${prefix}-w-${width}` : false,
      color ? `${prefix}-${color}` : false,
      block ? "btn-block" : false,
      className,
      { active, disabled: disabled }
    );

    return (
      <>
      {
        !icon ?  <button
        type={type} 
        id={id}
        className={classes}
        disabled={disabled}
        onClick={onClick}
        {...attributes}
      >
        <span>{text}</span>
      </button>
       : <button
       type={type} 
       id={id}
       className={classes}
       disabled={disabled}
       onClick={onClick}
       {...attributes}
     >
       <i title={title} className={icon}>icon</i>
     </button>  
      }
      </>
  
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