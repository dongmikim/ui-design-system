import React, { Component } from 'react';
import classNames from "classnames";
import InputText from "./InputText";
import InputGroupText from "./InputGroupText";
import './styles/style.scss';

class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  
  render() {
    const { prefix, id, label, size, className, placeholder, disabled } = this.props;
    const { value } = this.state;

    const labelAppend = this.props.labelAppend;
    
    const classes = classNames(
      prefix && `${prefix}`, 
      size ? `form-control-${size}` : false,
      className
    );

    return (
      <>
        {!labelAppend ?
         <div className="input-group"><InputGroupText label={label} /><InputText id={id} size={size} placeholder={placeholder} disabled={disabled} /></div>
          : <div className="input-group"><InputText id={id} size={size} /><InputGroupText label={label} position="append" placeholder={placeholder} disabled={disabled} /></div> }
      </>
    )
  }
}

InputGroup.defaultProps = {
  label: 'label'
}

export default InputGroup;