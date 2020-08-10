import React, { Component } from 'react';

class Textarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    }
  }

  _onChange = e => {
    let { value, min, max } = e.target;

    this.setState({
      value: value
    })

    this.props.onChange(e, value);
  }

  _onBlur = e => {
    this.props.onBlur(e);
  }

  onKeyDown = e => {
    let keyCode = e.keyCode;

    this.props.onKeyDown(e);

    if(keyCode == 13) {
      this.props.onPressEnter(e);
    }
  }  

  render() {
    const { id, name, required, rows, maxLength, placeholder, style, readOnly } = this.props;
    const { value } = this.state;

    return (
      <textarea id={id}
        name={name}
        required={required}
        rows={rows}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        style={style}
        readOnly={readOnly}
        onChange={this._onChange}
        onBlur={this._onBlur}
        onKeyDown={this.onKeyDown}
      ></textarea>
    )
  }
}

Textarea.defaultProps = {
  id: 'textarea',
  name: 'textarea',
  required: false,
  rows: 5,
  maxLength: null,
  placeholder: 'placeholder',
  value: '',
  style: {},

  onChange: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  formatClassname: (classnames) => formatClassname(styles, classnames)
}

export default Textarea;