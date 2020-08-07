import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      solutionsList: []
    };
  }


  render() {
    return (
      <>
        <div className="contents-header">
          <h1 className="contents-title">Home</h1>
          {/* <p className="contents-desc">이글루시큐리티 연구개발본부 솔루션 별 UI 화면 가이드</p> */}
        </div>
      
      </>
    )
  }
}

export default Home;