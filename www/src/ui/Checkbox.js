import React from 'react';
import PropTypes from 'prop-types';
import './styles/style.scss';

const Checkbox = (props) => {
  const { ...inputProps } = props;

  return (
    <div className="checkbox">
      <input id={props.id} type="checkbox" {...inputProps} />
      <label htmlFor={props.id}>{props.label}</label>
      <span title={props.label}>{props.label}</span>
    </div>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}

export default Checkbox;