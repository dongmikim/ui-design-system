import React, { Component } from 'react';
import classNames from "classnames";
import InputText from "./InputText";
import './styles/style.scss';

class FormGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  
  render() {
    const { prefix, id, label, size, className, type } = this.props;
    const { value } = this.state;

    
    const classes = classNames(
      prefix && `${prefix}`, 
      size ? `${prefix}-${size}` : false,
      className
    );

    return (
      <div className="form-group">
        <label for={id}>{label}</label>
        <InputText type={type} id={id} />
      </div>
    )
  }
}

FormGroup.defaultProps = {
  label: 'label'
}

export default FormGroup;