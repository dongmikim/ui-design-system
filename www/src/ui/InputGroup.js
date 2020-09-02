import React, { Component } from 'react';
import classNames from "classnames";
import InputText from "./InputText";
import './styles/style.scss';

class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }


  render() {
    const { prefix, id, label, size, className } = this.props;
    const { value } = this.state;

    const classes = classNames(
      prefix && `${prefix}`, 
      size ? `${prefix}-${size}` : false,
      className
    );

    return (
      <div className="input-group">
        <div className="input-label">
          <label for={id}>{label}</label>
        </div>
        <InputText id={id} />
      </div>
    )
  }
}


export default InputGroup;