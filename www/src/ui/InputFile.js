import React, { Component } from 'react';

class InputFile extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  handleChange = (e) => {
    console.log('textarea change');

  }

  render() {
    const { showFileExtensions } = this.props;
    return (
      <input
        type="file"
        accet={showFileExtensions.join(',')}
        onChange={this.handleChange}
      />
    )
  }
}

InputFile.defaultProps = {
  className : 'form-control',
  showFileExtensions: [],
  acceptFileExtensions: [],
  name: 'input-file',
  required: false,
  style: {},
  onChange: () => {},
  alertMessage: ''
}

export default InputFile;