
import React, { Component } from 'react';
import Button from '~/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import reactElementToJSXString from 'react-element-to-jsx-string';

class ButtonExample extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    function createMarkup(code) {
      return {__html: code};
    }

    const data = [
      {
        title: 'Colors',
        desc: 'description',
        code: `
        <Button size="md" color="" text="Button" />
        <Button size="md" color="primary" text="Button" />
        <Button size="md" color="blue" text="Button" />
        <Button size="md" color="dark" text="Button" />
        `,
      },
      {
        title: 'Sizes',
        desc: 'description',
        code: `
        <Button size="xs" text="Button" />
        <Button size="sm" text="Button" />
        <Button size="md" text="Button" />
        <Button size="lg" text="Button" />
        <Button size="md" width="sm-w" text="Button" />
        <Button size="md" width="md-w" text="Button" />
        <Button size="lg" width="lg-w" text="Button" />
        `
      },
    ];
    
    return (
      <div>
        <div className="contents-header">
          <h1 className="contents-title">Buttons</h1>
          <p></p>
        </div>
        <>
          {
            data.map((item,i) => (
              <div key={i}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <div className="area">
                {reactElementToJSXString(item.code)}
                 {/* <div dangerouslySetInnerHTML={createMarkup(item.code)} /> */}
                </div>
                <div>
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {item.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            ))
          }
        </>
        {/* <h2>Colors</h2>
        <div>
          <Button size="md" text="Button" />
          <Button size="md" color="primary" text="Button" className="ml-1" />
          <Button size="md" color="blue" text="Button" className="ml-1" />
          <Button size="md" color="dark" text="Button" className="ml-1" />
        </div>
        <div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        </div>

        <h2>Sizes</h2>
        <div>
          <Button size="xs" text="Button" />
          <Button size="sm" text="Button" className="ml-1" />
          <Button size="md" text="Button" className="ml-1" />
          <Button size="lg" text="Button" className="ml-1" />
          <Button size="md" width="sm-w" text="Button" className="ml-1" />
          <Button size="md" width="md-w" text="Button" className="ml-1" />
          <Button size="lg" width="lg-w" text="Button" className="ml-1" />
        </div>
        <div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString2}
          </SyntaxHighlighter>
        </div> */}
      </div>
    )
  }
}

export default ButtonExample;