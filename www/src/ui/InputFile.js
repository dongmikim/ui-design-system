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
    const { showFileExtensions, id } = this.props;
    return (
      <div className="form-file">
        <input
          type="file"
          id={id}
          accet={showFileExtensions.join(',')}
          onChange={this.handleChange}
        />
        <label for={id}>filename</label>
      </div>
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