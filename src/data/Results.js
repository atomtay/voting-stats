import React from 'react';
import ResultData from './results_2004.json'


class Results extends React.Component {
  render(){
    //console.log(ResultData)
    const list = []


    Object.entries(ResultData).forEach(([key,value]) => {
      //console.log(key)
      Object.entries(value).forEach(([key,value]) => {
        //console.log(key)
        //console.log(value)
        Object.entries(value).forEach(([key,value]) => {
         // console.log(key)
          console.log(value)
        })
      })
    })
    
    
    return (
      <div>
        hello world!
        {list}
      </div>
    )
  }
}

export default Results;
