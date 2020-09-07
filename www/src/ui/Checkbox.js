import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/style.scss';

class Checkbox extends Component {
  render() {
    const { id, label, labelWith } = this.props;

    return (
      <>
        <div className={!labelWith ? "form-check" : "form-check form-check-text"}>
          <input id={id} type="checkbox" className="form-check-input" />
          <label for={id} className="form-check-label">
            {label}
          </label>
          {/* <span title={props.label}>{props.label}</span> */}
        </div>
      </>
    );
  }
}

Checkbox.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string
};

export default Checkbox;
