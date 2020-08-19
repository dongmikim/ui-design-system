import React, { Component } from 'react';
import axios from 'axios';
import PageTemplate from '../partials/PageTemplate';
import PageHeader from '../partials/PageHeader';

class Colors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorList: []
    };
  }

  componentDidMount() {
    this.getColorList();
  }

  getColorList = () => {
    const url = '../data/colors.json';
    axios.get(url)
      .then(data => {
        this.setState({
          colorList: data.data.colorList
        });
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    
    return (
      <PageTemplate>
        <PageHeader title="Colors" desc="공통 컬러 정의" />

        <div className="colors">
          <div>
            {
              this.state.colorList.map(({category, contents}, i) => (
                <div key={i}>
                  <h3>{category} Colors</h3>
                  {contents.map((content, j) => (
                    <div className="color-item" key={j}>
                      <div className="color-fill" style={{backgroundColor: `#${content.hex}`}}>
                        {category} {j+1}
                      </div>
                      <table className="color-info">
                        <tbody>
                          <tr>
                            <th className="color-code">Name</th>
                            <td className="color-code">
                              {content.name}
                            </td>
                          </tr>
                          <tr>
                            <th className="color-code">Hex</th>
                            <td className="color-code">
                              <textarea readOnly value={`#${content.hex}`} />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
              
                </div>
              
              ))
            }
          </div>
        </div>
      </PageTemplate>
    )
  }
}

export default Colors;