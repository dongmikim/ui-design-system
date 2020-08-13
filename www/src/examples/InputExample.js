
import React, { Component } from 'react';
import Input from '~/Input';
import InputFile from '~/InputFile';
import Textarea from '~/InputTextarea';

class InputExample extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className="contents-header">
          <h1 className="contents-title">Forms</h1>
          <p></p>
        </div>
        <div>
          <Input />
          <InputFile />
          <Textarea />
        </div>
      </div>
    )
  }
}

export default InputExample;