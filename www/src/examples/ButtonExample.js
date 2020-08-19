
import React, { Component } from 'react';
import PageTemplate from '../partials/PageTemplate';
import PageHeader from '../partials/PageHeader';
import Button from '~/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class ButtonExample extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    const codeString = `
    <Button size="md" color="" text="Button" />
    <Button size="md" color="primary" text="Button" />
    <Button size="md" color="blue" text="Button" />
    <Button size="md" color="dark" text="Button" />
    `;
    const codeString2 = `
    <Button size="xs" text="Button" />
    <Button size="sm" text="Button" />
    <Button size="md" text="Button" />
    <Button size="lg" text="Button" />
    <Button size="md" width="sm-w" text="Button" />
    <Button size="md" width="md-w" text="Button" />
    <Button size="lg" width="lg-w" text="Button" />
    `;

    const codeString3 = `
    <Button text="Button" disabled />
    <Button color="primary" text="Button" disabled />
    `;

    return (
      <PageTemplate>

        <PageHeader title="Buttons" />
        
        <h2>Colors</h2>
        <p className="example-desc"><code>color</code> </p>
        <div className="d-flex">
          <Button text="Button" />
          <Button color="primary" text="Button" className="ml-1" />
          <Button color="blue" text="Button" className="ml-1" />
          <Button color="dark" text="Button" className="ml-1" />
        </div>
        <div className="codes"> 
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        </div>

        <h2>Sizes</h2>
        <p className="example-desc">높이 별 크기 는<code>size</code> xs, sm, md, lg가 있으며,
        최소 너비 사이즈는 <code>width</code>로 설정합니다.
        </p>
        <div className="d-flex">
          <Button size="xs" text="Button" />
          <Button size="sm" text="Button" className="ml-1" />
          <Button size="md" text="Button" className="ml-1" />
          <Button size="lg" text="Button" className="ml-1" />
          <Button size="md" width="sm-w" text="Button" className="ml-1" />
          <Button size="md" width="md-w" text="Button" className="ml-1" />
          <Button size="lg" width="lg-w" text="Button" className="ml-1" />
        </div>
        <div className="codes">
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString2}
          </SyntaxHighlighter>
        </div>

        <h2>Disabled</h2>
        <p className="example-desc">
          선택 불가 상태일 때 <code>disabled</code> prop를 추가합니다.
        </p>
        <div className="d-flex">
          <Button text="Button" disabled />
          <Button color="primary" text="Button" className="ml-1" disabled />
        </div>
        <div className="codes">
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString3}
          </SyntaxHighlighter>
        </div>

        <h2>API</h2>
        <SyntaxHighlighter language="jsx" style={tomorrow}>import Button from '~/Button'</SyntaxHighlighter>
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
                <td>color</td>
                <td>string</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>md</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

      </PageTemplate>
      
    )
  }
}

export default ButtonExample;