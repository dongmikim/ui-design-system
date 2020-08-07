import React, { Component } from 'react';
import axios from 'axios';

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
      <>
        <div className="contents-header">
          <h2 className="contents-title">Colors</h2>
          <p className="contents-desc">공통 컬러 정의</p>
        </div>

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
                              #{content.hex}
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
      </>
    )
  }
}

export default Colors;