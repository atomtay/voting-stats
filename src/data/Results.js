import React from 'react';
import ResultData from './results_2004.json'


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }


  render(){
    console.log(ResultData)
    const list = []
    Object.keys(ResultData).map(key => (
      list.push(<p>{key}</p>)
    ))

    
    
    return (
      <div>
        hello world!
        {list}
      </div>
    )
  }
}
export default Results;
