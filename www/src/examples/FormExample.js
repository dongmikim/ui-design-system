
import React, { Component } from 'react';
import PageTemplate from '../partials/PageTemplate';
import PageHeader from '../partials/PageHeader';
import Input from '~/Input';
import InputFile from '~/InputFile';
import Textarea from '~/InputTextarea';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class FormExample extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const codeString = `<Input placeholder="placeholder" />`;
    return (
      <PageTemplate>
        <PageHeader title="Forms" />

        <h2>Input</h2>
        <div>
         <Input />
        </div>
        <div className="codes">
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}  
          </SyntaxHighlighter>
        </div>
        <div>
          <InputFile />
          <Textarea />
        </div>

        <h2>API</h2>
        <SyntaxHighlighter language="jsx" style={tomorrow}>import Input from '~/Input'</SyntaxHighlighter>
        <div>
          <table class="table">
            <colgroup>
              <col style={{width: "150px"}} />
              <col style={{width: "100px"}} />
              <col style={{width: "100px"}} />
              <col style={{width: "500px"}} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Default</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>id</td>
                <td>string</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>name</td>
                <td>string</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>string</td>
                <td>placeholder</td>
                <td></td>
              </tr>
              <tr>
                <td>maxLength</td>
                <td>number</td>
                <td>100</td>
                <td></td>
              </tr>
              <tr>
                <td>size</td>
                <td>number</td>
                <td>10</td>
                <td></td>
              </tr>
              <tr>
                <td>required</td>
                <td>boolean</td>
                <td>false</td>
                <td></td>
              </tr>
              <tr>
                <td>readOnly</td>
                <td>boolean</td>
                <td>false</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

      </PageTemplate>
    )
  }
}

export default FormExample;