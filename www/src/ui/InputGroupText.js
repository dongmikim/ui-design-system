import React, { Component } from 'react';
import classNames from "classnames";
import './styles/style.scss';

class InputGroupText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  
  render() {
    const { prefix, id, label, className, position } = this.props;
    const { value } = this.state;

    const classes = classNames(
      position ? `${prefix}-${position}` : false,
      className
    );

    return (
      <div className={classes} >
        <span className="input-group-text">{label}</span>
      </div>
    )
  }
}

InputGroupText.defaultProps = {
  prefix: 'input-group',
  label: 'label',
  position: 'prepend'
}

export default InputGroupText;