import React, { Component } from 'react';

class InputFile extends Component {
  render() {
    return (
      <>
        <label>파일첨부</label>
        <input type="file" />
      </>
    )
  }
}

export default InputFile;